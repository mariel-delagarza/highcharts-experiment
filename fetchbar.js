/* -------------------------------------------------------------------------- */
/*             THIS FILE WORKS TO SHOW EACH STATE (3:02PM 5/1/23)             */
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
      let rankingValues = [
        findStateRanking(stateName, coalRankings),
        findStateRanking(stateName, crudeOilRankings),
        findStateRanking(stateName, electricityRankings),
        findStateRanking(stateName, fuelEthanolRankings),
        findStateRanking(stateName, naturalGasRankings),
        findStateRanking(stateName, rppRankings),
        findStateRanking(stateName, uraniumRankings),
      ];

      Object.assign(allData[i], rankings);
      Object.assign((allData[i]["rankingValues"] = rankingValues));
    }

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
      text: data.name + " Commodity Exports to Canada 2020",
    },
    subtitle: {
      text: "SUBTITLE GOES HERE",
    },
    credits: {
      enabled: true,
      text: "CSIS Energy Security Project",
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
      title: {
        text: "US Dollars",
      },
      labels: {
        formatter: function () {
          if (this.value >= 1000000000) {
            return "$" + this.value / 1000000000 + "B";
          } else if (this.value >= 1000000) {
            return "$" + this.value / 1000000 + "M";
          } else if (this.value >= 1000) {
            return "$" + this.value / 1000 + "K";
          } else {
            return "$" + this.value;
          }
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:14px">{point.category}</span><br>',
      useHTML: true,
      borderColor: "#333",
      backgroundColor: "#fff",
      formatter: function () {
        let yFormatted;

        if (this.point.y >= 1000000000) {
          yFormatted =
            "$" + parseFloat((this.point.y / 1000000000).toFixed(2)) + "B";
        } else if (this.point.y >= 1000000) {
          yFormatted =
            "$" + parseFloat((this.point.y / 1000000).toFixed(2)) + "M";
        } else if (this.point.y >= 1000) {
          yFormatted = "$" + parseFloat((this.point.y / 1000).toFixed(2)) + "K";
        } else {
          yFormatted = "$" + this.point.y;
        }

        let index = this.point.index;
        return `<b>${this.point.category}</b><br><br><span>Export Total: ${yFormatted}</span><br><span>Ranking: ${data.rankingValues[index]}</span>`;
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        colorByPoint: true,
      },
    },
    colors: [
      "#2caffe",
      "#544fc5",
      "#00e272",
      "#fe6a35",
      "#6b8abc",
      "#d568fb",
      "#2ee0ca",
    ],
    series: [data],
  });
}
