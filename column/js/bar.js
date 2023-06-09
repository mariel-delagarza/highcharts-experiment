/* -------------------------------------------------------------------------- */
/*             THIS FILE WORKS TO SHOW EACH STATE (1:34PM 5/1/23)             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                             Set up data storage                            */
/* -------------------------------------------------------------------------- */
let allData = [];
let stateNames = [];
let coalRankings = [];
let crudeOilRankings = [];
let electricityRankings = [];
let fuelEthanolRankings = [];
let naturalGasRankings = [];
let rppRankings = [];
let uraniumRankings = [];

/* -------------------------------------------------------------------------- */
/*                          Parse data for highcharts                         */
/* -------------------------------------------------------------------------- */
Highcharts.data({
  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Commodity_Exports",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    let commodityList = columns[0].slice(2, 9);
    for (let i = 1; i < columns.length; i++) {
      const row = columns[i];

      const obj = {
        name: row[0],
        data: row.slice(2, 9),
      };

      allData.push(obj);
    }
    /* ------------------------ Rank States by Commodity ------------------------ */
    const sortStatesByCommodity = (commodity) => {
      let index = commodityList.findIndex((x) => x === commodity);
      let allDataCopy = JSON.parse(JSON.stringify(allData));
      let commodityRanking = allDataCopy.sort(
        (a, b) => a.data[index] - b.data[index]
      );

      return commodityRanking.reverse();
    };

    coalRankings = sortStatesByCommodity("coal");
    crudeOilRankings = sortStatesByCommodity("crudeOil");
    electricityRankings = sortStatesByCommodity("electricity");
    fuelEthanolRankings = sortStatesByCommodity("fuelEthanol");
    naturalGasRankings = sortStatesByCommodity("naturalGas");
    rppRankings = sortStatesByCommodity("rpp");
    uraniumRankings = sortStatesByCommodity("uranium");

    /* --------------------- find and assign state rankings --------------------- */
    const findStateRanking = (stateName, commodityRanking) => {
      return commodityRanking.findIndex((x) => x.name === stateName) + 1;
    };

    for (let i = 0; i < allData.length; i++) {
      let stateName = allData[i].name;
      stateNames.push(stateName);
      let rankings = {
        coalRank: findStateRanking(stateName, coalRankings),
        crudeOilRank: findStateRanking(stateName, crudeOilRankings),
        electricityRank: findStateRanking(stateName, electricityRankings),
        fuelEthanolRank: findStateRanking(stateName, fuelEthanolRankings),
        naturalGasRank: findStateRanking(stateName, naturalGasRankings),
        rppRank: findStateRanking(stateName, rppRankings),
        uraniumRank: findStateRanking(stateName, uraniumRankings),
      };

      Object.assign(allData[i], rankings);
    }

    let testInfo = {
      name: "Texas",
      y: 91670,
      data: [99, 15, 6, 3, 6, 3],
      coalRank: 23,
      crudeOilRank: 1,
      electricityRank: 4,
      fuelEthanolRank: 55,
      naturalGasRank: 43,
      rppRank: 2,
      uraniumRank: 9,
    };

    //If we pass the index of a state, that state's data will show in a chart
    console.log(allData[44]);
    renderChart(allData[44]);
  },
});

function renderChart(data) {
  console.log(data.coalRank);
  Highcharts.chart("container", {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Average Rainfall",
    },
    subtitle: {
      text: "Source: WorldClimate.com",
    },
    xAxis: {
      categories: [
        "Coal",
        "Crude Oil",
        "Electricity",
        "Fuel Ethanol",
        "Natural Gas",
        "RPP",
        "Uranium",
      ],
      crosshair: true,
    },
    yAxis: {
      type: "logarithmic",
    },
    tooltip: {
      useHTML: true,
      borderColor: "#333",
      backgroundColor: "#fff",
      formatter: function () {
        console.log(this.point);
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [data],
  });
}
