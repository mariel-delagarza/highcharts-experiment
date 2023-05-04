/* -------------------------------------------------------------------------- */
/*                             Set up data storage                            */
/* -------------------------------------------------------------------------- */
let allDataExports = [];
let stateRankings = {};

let stateIndex = 44;
/*
need allDataExports and allDataImports 

let stateRankings = {
  exports: {

  },
  imports: {
    
  }
}




*/

let testData = {
  category: "coal",
  name: "Coal",
  data: [{ y: 91670, rank: 23 }],
};

/* -------------------------------------------------------------------------- */
/*                          Parse data for highcharts                         */
/* -------------------------------------------------------------------------- */
Highcharts.data({
  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Commodity_Exports",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    let commodityColumns = columns[0].slice(2, 9);
    let commodityList = [];
    let commodityNames = [
      "Coal",
      "Crude Oil",
      "Electricity",
      "Fuel Ethanol",
      "Natural Gas",
      "RPP",
      "Uranium",
    ];
    commodityColumns.forEach((element) => {
      commodityList.push(element.slice(0, -7));
    });
    console.log("parse - commodityList", commodityList);

    /* --------------------------- Make allData object -------------------------- */
    let allData = [];
    let exportDataToSort = [];
    let importDataToSort = [];

    function makeAllData(columns) {
      for (let i = 1; i < columns.length; i++) {
        const row = columns[i];
        let stateName = row[0];
        let coalExports = row[2];
        let crudeOilExports = row[3];
        let electricityExports = row[4];
        let fuelEthanolExports = row[5];
        let naturalGasExports = row[6];
        let rppExports = row[7];
        let uraniumExports = row[8];
        let coalImports = row[9];
        let crudeOilImports = row[10];
        let electricityImports = row[11];
        let fuelEthanolImports = row[12];
        let naturalGasImports = row[13];
        let rppImports = row[14];
        let uraniumImports = row[15];

        const obj1 = {
          name: stateName,
          data: row.slice(2, 9),
        };
        exportDataToSort.push(obj1);

        const obj2 = {
          name: stateName,
          data: row.slice(9, 16),
        };
        importDataToSort.push(obj2);

        const obj3 = {
          name: stateName,
          imports: {
            name: stateName,
            data: [
              {
                name: "Coal",
                drilldown: "Coal Imports",
                isDrilldown: "False",
                y: coalImports,
              },
              {
                name: "Crude Oil",
                drilldown: "Crude Oil Imports",
                isDrilldown: "False",
                y: crudeOilImports,
              },
              {
                name: "Electricity",
                drilldown: "Electricity Imports",
                isDrilldown: "False",
                y: electricityImports,
              },
              {
                name: "Fuel Ethanol",
                drilldown: "Fuel Ethanol Imports",
                isDrilldown: "False",
                y: fuelEthanolImports,
              },
              {
                name: "Natural Gas",
                drilldown: "Natural Gas Imports",
                isDrilldown: "False",
                y: naturalGasImports,
              },
              {
                name: "RPP",
                drilldown: "RPP Imports",
                isDrilldown: "False",
                y: rppImports,
              },
              {
                name: "Uranium",
                drilldown: "Uranium Imports",
                isDrilldown: "False",
                y: uraniumImports,
              },
            ],
          },
          exports: {
            name: stateName,
            data: [
              {
                name: "Coal",
                drilldown: "coal",
                isDrilldown: "False",
                y: coalExports,
              },
              {
                name: "Crude Oil",
                drilldown: "crudeOil",
                isDrilldown: "False",
                y: crudeOilExports,
              },
              {
                name: "Electricity",
                drilldown: "electricity",
                isDrilldown: "False",
                y: electricityExports,
              },
              {
                name: "Fuel Ethanol",
                drilldown: "fuelEthanol",
                isDrilldown: "False",
                y: fuelEthanolExports,
              },
              {
                name: "Natural Gas",
                drilldown: "naturalGas",
                isDrilldown: "False",
                y: naturalGasExports,
              },
              {
                name: "RPP",
                drilldown: "rpp",
                isDrilldown: "False",
                y: rppExports,
              },
              {
                name: "Uranium",
                drilldown: "uranium",
                isDrilldown: "False",
                y: uraniumExports,
              },
            ],
          },
          importDrilldown: [],
          exportDrilldown: [],
        };
        allData.push(obj3);
      }
    }
    makeAllData(columns);
    /* ------------------------ Sort states by commodity ------------------------ */
    let sortData = [];
    let exportStateRankings = {};
    let importStateRankings = {};

    const sortStatesByCommodity = () => {
      for (let i = 0; i < commodityList.length; i++) {
        /* process exports*/
        let exportDataToSortCopy = JSON.parse(JSON.stringify(exportDataToSort));
        let exportRankingValues = exportDataToSortCopy.sort(
          (a, b) => a.data[i] - b.data[i]
        );
        let exportReverse = exportRankingValues.reverse();
        Object.assign((exportStateRankings[commodityList[i]] = exportReverse));

        exportDataToSortCopy = "";
        exportRankingValues = "";
        exportReverse = "";

        /* process imports*/
        let importDataToSortCopy = JSON.parse(JSON.stringify(importDataToSort));
        let importRankingValues = importDataToSortCopy.sort(
          (a, b) => a.data[i] - b.data[i]
        );
        let importReverse = importRankingValues.reverse();
        Object.assign((importStateRankings[commodityList[i]] = importReverse));

        importDataToSortCopy = "";
        exportRankingValues = "";
        exportReverse = "";
      }
    };
    sortStatesByCommodity();

    /* --------------------------- find state ranking --------------------------- */
    const findStateRanking = () => {
      for (let i = 0; i < allData.length; i++) {
        let stateName = allData[i].name;

        // Add state's rank in each category to an array, add array to state's data
        let exportRankingValues = [
          exportStateRankings.coal.findIndex((x) => x.name === stateName) + 1,
          exportStateRankings.crudeOil.findIndex((x) => x.name === stateName) +
            1,
          exportStateRankings.electricity.findIndex(
            (x) => x.name === stateName
          ) + 1,
          exportStateRankings.fuelEthanol.findIndex(
            (x) => x.name === stateName
          ) + 1,
          exportStateRankings.naturalGas.findIndex(
            (x) => x.name === stateName
          ) + 1,
          exportStateRankings.rpp.findIndex((x) => x.name === stateName) + 1,
          exportStateRankings.uranium.findIndex((x) => x.name === stateName) +
            1,
        ];

        let importRankingValues = [
          importStateRankings.coal.findIndex((x) => x.name === stateName) + 1,
          importStateRankings.crudeOil.findIndex((x) => x.name === stateName) +
            1,
          importStateRankings.electricity.findIndex(
            (x) => x.name === stateName
          ) + 1,
          importStateRankings.fuelEthanol.findIndex(
            (x) => x.name === stateName
          ) + 1,
          importStateRankings.rpp.findIndex((x) => x.name === stateName) + 1,
          importStateRankings.uranium.findIndex((x) => x.name === stateName) +
            1,
        ];

        Object.assign(
          (allData[i].exports["rankingValues"] = exportRankingValues)
        );
        Object.assign(
          (allData[i].imports["rankingValues"] = importRankingValues)
        );
      }
    };
    findStateRanking();

    /* -------------------------------------------------------------------------- */
    /*                            figure out drilldown                            */
    /* -------------------------------------------------------------------------- */
    let exportDrilldownSeries = [];
    let importDrilldownSeries = [];
    let top10Exports = Object.entries(exportStateRankings)
      .slice(0)
      .map((entry) => entry[1].slice(0, 10));
    let top10Imports = Object.entries(importStateRankings)
      .slice(0)
      .map((entry) => entry[1].slice(0, 10));

    /* -------------------------- make drillown series -------------------------- */
    const makeDrilldownSeries = () => {
      //exports
      for (let i = 0; i < top10Exports.length; i++) {
        let exportData = [];

        for (let j = 0; j < top10Exports[i].length; j++) {
          let obj2 = {
            name: top10Exports[i][j].name,
            y: top10Exports[i][j].data[i],
            color: "#6a041d",
          };
          exportData.push(obj2);
        }

        let obj = {
          name: commodityNames[i],
          id: commodityList[i],
          data: exportData,
        };
        exportDrilldownSeries.push(obj);
      }

      // imports
      for (let i = 0; i < top10Imports.length; i++) {
        let importData = [];

        for (let j = 0; j < top10Imports[i].length; j++) {
          let obj2 = {
            name: top10Imports[i][j].name,
            y: top10Imports[i][j].data[i],
            color: "#6a041d",
          };
          importData.push(obj2);
        }

        let obj = {
          name: commodityNames[i],
          id: commodityList[i],
          data: importData,
        };
        importDrilldownSeries.push(obj);
      }
    };
    makeDrilldownSeries();

    /* -------------------------------------------------------------------------- */
    /*                       add drilldown series to states                       */
    /* -------------------------------------------------------------------------- */
    const addDrilldownSeriesToAllData = () => {
      let exportDrilldownSeriesCopy = JSON.parse(
        JSON.stringify(exportDrilldownSeries)
      );
      console.log("exportDrilldownSeriesCopy", exportDrilldownSeriesCopy);

      var obj = {};
      // i -> go through each state
      for (let i = 0; i < allData.length; i++) {
        // j -> go through each commodity
        for (let j = 0; j < 7; j++) {
          commodityList;
          // grab the commodity y value for the state
          obj = {
            name: allData[i].name,
            y: allData[i].exports.data[j].y,
            color: "#F5B841",
          };

          // the array of the top10 states for that commodity
          let top10 = structuredClone(exportDrilldownSeries[j].data);

          // go through each value of the commodity array
          for (let k = 0; k < top10.length; k++) {
            // if that value is for the state you're on
            if (top10[k].name == allData[i].name) {
              top10[k].color = "#F5B841";
            }
          }

          // if the array includes the state we're looking at
          if (top10.some((value) => value.name == allData[i].name)) {
            // add that array to the drilldown as is

            let temp = {
              name: commodityNames[j],
              id: commodityList[j],
              data: top10,
            };

            allData[i].exportDrilldown.push(temp);
          } else {
            let array = [...top10, obj];

            let temp = {
              name: commodityList[j],
              id: commodityList[j],
              data: array,
            };

            allData[i].exportDrilldown.push(temp);
          }
        }
      }
    };
    addDrilldownSeriesToAllData();

    /* ---------------------------- Render chart ---------------------------- */
    //If we pass the index of a state, that state's data will show in a chart
    /*
      So event handler like bubbles,

      on change, if select = imports, pass allDataExports[stateIndex]
      if select = exports, pass allDataExports[stateIndex]


      each category should be tied to a drilldown in the series 
      https://www.highcharts.com/demo/column-drilldown 

    */
    //console.log(allDataExports[44]);
    //console.log("allDataExports", allDataExports);
    renderChart(allDataExports[stateIndex]);
  },
});

function renderChart(data) {
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
    legend: {
      enabled: false,
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
        console.log(this.point);

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
      "#001219",
      "#005f73",
      "#0a9396",
      "#94d2bd",
      "#fdbf45",
      "#ee9b00",
      "#ca6702",
    ],
    series: [data],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
      series: [data.exports],
      drilldown: {
        breadcrumbs: {
          position: {
            align: "left",
          },
        },
        series: data.exportDrilldown,
      },
    },
  });
}
