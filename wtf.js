/* -------------------------------------------------------------------------- */
/*                             Set up data storage                            */
/* -------------------------------------------------------------------------- */
let allData = [];
let allDataObject = {
  testValues: {
    title: "test",
    values: [],
  },
};
let stateNames = [];
let coalRankings = [];
let crudeOilRankings = [];
let electricityRankings = [];
let fuelEthanolRankings = [];
let naturalGasRankings = [];
let rppRankings = [];
let uraniumRankings = [];

let texasInfo = [];

/* -------------------------------------------------------------------------- */
/*                          Parse data for highcharts                         */
/* -------------------------------------------------------------------------- */
Highcharts.data({
  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Commodity_Exports",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    /* parse google sheet into series for chart */
    let commodityList = columns[0].slice(2, 9);

    for (let i = 1; i < columns.length; i++) {
      //console.log(columns[i]);
      const row = columns[i];

      const obj = {
        name: row[0],
        data: row.slice(2, 9),
      };

      allData.push(obj);
    }
    //console.log(allData);
    //let sorted = allData.sort((a, b) => a.data[0] - b.data[0]);
    //console.log(sorted.reverse());
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

    texasInfo.push(allData[44]);
    console.log(allData);
    allDataObject.testValues.values = allData;
  },
});

console.log(allDataObject);

Highcharts.chart("container", {
  data: googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Commodity_Exports",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    /* parse google sheet into series for chart */
    let commodityList = columns[0].slice(2, 9);

    for (let i = 1; i < columns.length; i++) {
      //console.log(columns[i]);
      const row = columns[i];

      const obj = {
        name: row[0],
        data: row.slice(2, 9),
      };

      allData.push(obj);
    }
    //console.log(allData);
    //let sorted = allData.sort((a, b) => a.data[0] - b.data[0]);
    //console.log(sorted.reverse());
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

    texasInfo.push(allData[44]);
    console.log(allData);
    allDataObject.testValues.values = allData;
  },
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
    min: 0,
    title: {
      text: "Rainfall (mm)",
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: allDataObject.testValues.values[44],
});
