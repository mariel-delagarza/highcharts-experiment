/* -------------------------------------------------------------------------- */
/*                             Set up data storage                            */
/* -------------------------------------------------------------------------- */
let allData = [];
let exportDataToSort = [];
let importDataToSort = [];

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

//console.log(arrayRange(0, 5000000000, 500000));

// Texas data to test with
let stateIndex = 44;

function removeZeroes(arr) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    }
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[1];
}

/*
select/dropdown needs to change
- select imports or imports
- need to switch between data.imports, data.importDrilldown
*/
Highcharts.wrap(
  Highcharts.Axis.prototype,
  "getLinePath",
  function (proceed, lineWidth) {
    var axis = this,
      brokenAxis = axis.brokenAxis,
      path = proceed.call(this, lineWidth),
      start = path[0],
      x = start[1],
      y = start[2];

    (brokenAxis.breakArray || []).forEach(function (brk) {
      if (axis.horiz) {
        x = axis.toPixels(brk.from);
        path.splice(
          1,
          0,
          ["L", x - 4, y], // stop
          ["M", x - 9, y + 5],
          ["L", x + 1, y - 5], // left slanted line
          ["M", x - 1, y + 5],
          ["L", x + 9, y - 5], // higher slanted line
          ["M", x + 4, y]
        );
      } else {
        y = axis.toPixels(brk.from);
        path.splice(
          1,
          0,
          ["L", x, y - 4], // stop
          ["M", x + 5, y - 9],
          ["L", x - 5, y + 1], // lower slanted line
          ["M", x + 5, y - 1],
          ["L", x - 5, y + 9], // higher slanted line
          ["M", x, y + 4]
        );
      }
    });
    return path;
  }
);

Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: "Source Sans Pro",
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                          Parse data for highcharts                         */
/* -------------------------------------------------------------------------- */
Highcharts.data({
  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Sheet1",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    /* ------------------ make lists of commodity IDs, names ---------------- */
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

    /* ------------------------- Make allData object ------------------------ */
    function makeAllData(columns) {
      for (let i = 1; i < columns.length; i++) {
        const row = columns[i];
        //console.log(row);
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

        // exports Array
        let stateExportsArray = row.slice(2, 9);
        //console.log("stateExportsArray", stateExportsArray);
        // removeZeroes(stateExportsArray);
        if (stateName == "Montana") {
          console.log(removeZeroes(stateExportsArray));
        }
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
    //console.log(allData[44]);
    /* ---------------------- Sort states by commodity ---------------------- */
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

    /* ------------------------- find state ranking ------------------------- */
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

    /* ---------------------------------------------------------------------- */
    /*                                Drilldown                               */
    /* ---------------------------------------------------------------------- */
    let exportDrilldownSeries = [];
    let importDrilldownSeries = [];
    let top10Exports = Object.entries(exportStateRankings)
      .slice(0)
      .map((entry) => entry[1].slice(0, 10));
    let top10Imports = Object.entries(importStateRankings)
      .slice(0)
      .map((entry) => entry[1].slice(0, 10));
    /* ------------------------ make drillown series ------------------------ */
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

    /* ------------------- add drilldown series to states ------------------- */
    const addDrilldownSeriesToAllData = () => {
      let exportDrilldownSeriesCopy = JSON.parse(
        JSON.stringify(exportDrilldownSeries)
      );
      //console.log("exportDrilldownSeriesCopy", exportDrilldownSeriesCopy);

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
    console.log(allData[27]);
    renderChart(allData[26], "export", 2020, 0, 200000);
  },
});

//importExport must be capitalized Import or Export
function renderChart(data, importExport, year, extremeMin, extremeMax) {
  if (importExport == "import") {
    var title = data.name + " Commodity Imports from Canada " + year;
    var seriesData = data.imports;
    var seriesDrilldown = data.importDrilldown;
    console.log(seriesData);
  } else {
    console.log("export");
    var title = data.name + " Commodity Exports Canada " + year;
    var seriesData = data.exports;
    var seriesDrilldown = data.exportDrilldown;
    console.log(data);
  }

  console.log(data);
  Highcharts.chart("container", {
    chart: {
      type: "bar",
      scrollablePlotArea: {
        minWidth: 700,
        scrollPositionX: 1,
      },
      zoomType: "y",
      events: {
        // load: function (event) {
        //   this.yAxis[0].setExtremes(0, 153957);
        // },
        // redraw: function (event) {
        //   this.yAxis[0].setExtremes(0, 200000);
        // },
        load: function (event) {
          console.log("load");
          this.yAxis[0].setExtremes(extremeMin, extremeMax);
        },
      },
    },
    title: {
      text: title,
      align: "left",
    },
    exporting: { enabled: false },
    subtitle: {
      text: "SUBTITLE GOES HERE",
      align: "left",
    },
    credits: {
      enabled: false,
      text: "CSIS Energy Security Project",
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "category",
      crosshair: false,
      lineColor: "#eeeeee",
      labels: {
        overflow: "justify",
      },
    },
    yAxis: {
      type: "linear",
      lineColor: "#eeeeee",
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
      split: true,
      useHTML: true,
      borderColor: "#333",
      backgroundColor: "#fff",
      formatter: function () {
        const formatY = (yValue) => {
          let y = "";
          if (yValue >= 1000000000) {
            y = "$" + parseFloat((yValue / 1000000000).toFixed(2)) + "B";
            return y;
          } else if (yValue >= 1000000) {
            y = "$" + parseFloat((yValue / 1000000).toFixed(2)) + "M";
            return y;
          } else if (yValue >= 1000) {
            y = "$" + parseFloat((yValue / 1000).toFixed(2)) + "K";
            return y;
          } else {
            y = "$" + yValue;
            return y;
          }
        };
        let drilldownData = this.series.userOptions.data;
        let rankingValues = this.series.userOptions.rankingValues;
        let index = this.point.index;
        let isDrilldown = this.point.options.isDrilldown;

        if (isDrilldown === "False") {
          let yFormatted = formatY(this.point.y);
          return `<b>${this.point.name}</b><br><br><span>${importExport} Total: ${yFormatted}</span><br><span>Ranking: ${rankingValues[index]}</span>`;
        } else {
          let drillDownID = this.series.userOptions.id;
          console.log(drillDownID);
          let drilldownIndex = seriesData.data.findIndex(
            (x) => x.drilldown === drillDownID
          );
          console.log(drilldownIndex);
          console.log(seriesData);
          let ranking;

          let yFormatted = formatY(this.point.y);

          if (drilldownData[index].name == data.name) {
            ranking = seriesData.rankingValues[drilldownIndex];
          } else {
            ranking = index + 1;
          }
          return `<b>${this.point.name}</b><br><br><span>Export Total: ${yFormatted}</span><br><span>Ranking: ${ranking}</span>`;
        }
      },
    },
    plotOptions: {
      bar: {
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
    series: [seriesData],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "left",
        },
      },
      series: seriesDrilldown,
    },
  });
}

document.getElementById("reset").addEventListener("click", function () {
  let chart = Highcharts.chart("container", {});
  //chart.destroy();
  renderChart(allData[26], "export", 2020, null, null);
});
