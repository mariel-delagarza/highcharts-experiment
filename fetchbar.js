import * as helpers from "./modules/cat.js";
/* -------------------------------------------------------------------------- */
/*                             Set up data storage                            */
/* -------------------------------------------------------------------------- */
let allData = [];
let exportDataToSort = [];
let importDataToSort = [];
let extremeFlag;

helpers.meow();

// Texas data to test with -- will need to set stateIndex with which state is being hovered over
let stateIndex = 44;

/*
TODO: Make a dropdown that switches between data.imports, data.importDrilldown
and data.exports, data.exportDrilldown
*/

// font to make it look like Flourish
Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: "Source Sans Pro",
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
    let commodityColumnHeadings = columns[0].slice(2, 9);
    let commodityIds = [];
    let commodityNames = [];
    // go through each column heading with a commodity name
    commodityColumnHeadings.forEach((element) => {
      // add heading name as-is to IDs
      commodityIds.push(element.slice(0, -7));

      // process ID to get formatted name for Names list
      let processedCommodity = element.slice(0, -7).split(/(?=[A-Z])/);
      let word =
        processedCommodity[0].charAt(0).toUpperCase() +
        processedCommodity[0].slice(1);
      processedCommodity[0] = word;

      let final = processedCommodity.join(" ");
      commodityNames.push(final);
    });
    let exportExtremeMax;
    let importExtremeMax;

    /* ------------------------- Make allData object ------------------------ */
    // function also creates export and import lists to sort
    function makeAllData(columns) {
      for (let i = 1; i < columns.length; i++) {
        const row = columns[i];
        let stateName = row[0];

        let stateExportsArray = row.slice(2, 9);
        let stateImportsArray = row.slice(9, 16);
        exportExtremeMax = helpers.setExtremeMax(stateExportsArray);
        importExtremeMax = helpers.setExtremeMax(stateImportsArray);

        // create what we need to get export rankings later
        const obj1 = helpers.makeObj1(stateName, row);
        exportDataToSort.push(obj1);

        // create what we need to get import rankings later
        const obj2 = helpers.makeObj2(stateName, row);
        importDataToSort.push(obj2);

        // create item that goes in final allData list
        const obj3 = helpers.makeObj3(
          stateName,
          row,
          importExtremeMax,
          exportExtremeMax
        );
        allData.push(obj3);
      }
    }
    makeAllData(columns);
    /* ---------------------- Sort states by commodity ---------------------- */
    let exportStateRankings = {};
    let importStateRankings = {};

    const sortStatesByCommodity = () => {
      for (let i = 0; i < commodityIds.length; i++) {
        /* process exports*/
        let exportDataToSortCopy = JSON.parse(JSON.stringify(exportDataToSort));
        let exportRankingValues = exportDataToSortCopy.sort(
          (a, b) => a.data[i] - b.data[i]
        );
        let exportReverse = exportRankingValues.reverse();
        Object.assign((exportStateRankings[commodityIds[i]] = exportReverse));

        exportDataToSortCopy = "";
        exportRankingValues = "";
        exportReverse = "";

        /* process imports*/
        let importDataToSortCopy = JSON.parse(JSON.stringify(importDataToSort));
        let importRankingValues = importDataToSortCopy.sort(
          (a, b) => a.data[i] - b.data[i]
        );
        let importReverse = importRankingValues.reverse();
        Object.assign((importStateRankings[commodityIds[i]] = importReverse));

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
        let exportRankingValues = helpers.makeExportRankingValues(
          exportStateRankings,
          stateName
        );

        let importRankingValues = helpers.makeImportRankingvalues(
          importStateRankings,
          stateName
        );

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
          id: commodityIds[i],
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
          id: commodityIds[i],
          data: importData,
        };
        importDrilldownSeries.push(obj);
      }
    };
    makeDrilldownSeries();

    /* ------------------- add drilldown series to states ------------------- */
    const addDrilldownSeriesToAllData = () => {
      var obj = {};
      // i -> go through each state
      for (let i = 0; i < allData.length; i++) {
        // j -> go through each commodity
        for (let j = 0; j < 7; j++) {
          commodityIds;
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
              id: commodityIds[j],
              data: top10,
            };

            allData[i].exportDrilldown.push(temp);
          } else {
            let array = [...top10, obj];

            let temp = {
              name: commodityNames[j],
              id: commodityIds[j],
              data: array,
            };

            allData[i].exportDrilldown.push(temp);
          }
        }
      }
    };
    addDrilldownSeriesToAllData();

    /* ---------------------------- Render chart ---------------------------- */
    renderChart(allData[44], "export", 2020, false);
  },
});

//importExport must be capitalized Import or Export
function renderChart(data, importExport, year, extremeFlag) {
  console.log(data);
  // set title text, get correct series data and drilldown
  if (importExport == "import") {
    var title = data.name + " Commodity Imports from Canada " + year;
    var seriesData = data.imports;
    var seriesDrilldown = data.importDrilldown;
    var importTooltipData = data.imports.data;

    if (extremeFlag == false) {
      var extremeMax = data.imports.extremeMax;
    } else {
      var extremeMax = null;
    }
  } else {
    var title = data.name + " Commodity Exports Canada " + year;
    var seriesData = data.exports;
    var seriesDrilldown = data.exportDrilldown;
    var exportTooltipData = data.exports.data;
    console.log(data);

    if (extremeFlag == false) {
      var extremeMax = data.exports.extremeMax;
    } else {
      var extremeMax = null;
    }
  }

  Highcharts.chart("container", {
    chart: {
      type: "bar",
      scrollablePlotArea: {
        minWidth: 700,
        scrollPositionX: 1,
      },
      zoomType: "y",
      events: {
        load: function (event) {
          this.yAxis[0].setExtremes(0, extremeMax);
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
      lineWidth: 1,
      //endOnTick: false,
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
      className: "myClass",
      useHTML: true,
      borderColor: "#333",
      backgroundColor: "#fff",
      formatter: function () {
        let output = "";
        let colors = Highcharts.defaultOptions.colors;

        const formatY = (yValue) => {
          console.log(this.point.x);
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
          for (let i = 0; i < exportTooltipData.length; i++) {
            let yFormatted = formatY(exportTooltipData[i].y);
            console.log(exportTooltipData[i].name, exportTooltipData[i].y);
            if (i == exportTooltipData.length - 1) {
              output += `<tr><td><span style="color:${colors[i]}">\u25CF </span> ${exportTooltipData[i].name}: </td><td>${yFormatted}</td></tr><tr><td><span style="color:${colors[i]}">\u25CF </span> Rank: </td><td>${rankingValues[i]}</td></tr><tr><td colspan="2"></td></tr>`;
            } else {
              output += `<tr><td><span style="color:${colors[i]}">\u25CF </span> ${exportTooltipData[i].name}: </td><td>${yFormatted}</td></tr><tr><td><span style="color:${colors[i]}">\u25CF </span> Rank: </td><td>${rankingValues[i]}</td></tr><tr><td colspan="2" style="border-bottom: 2px solid; border-bottom-color: #808080"></td></tr>`;
            }
          }
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

        return `<table>${output}</table>`;
      },
    },
    plotOptions: {
      bar: {
        colorByPoint: true,
      },
    },
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
  chart.destroy();
  renderChart(allData[44], "export", 2020, true);
});

document.getElementById("zoom").addEventListener("click", function () {
  let chart = Highcharts.chart("container", {});
  chart.destroy();
  renderChart(allData[44], "export", 2020, false);
});

const select = document.getElementById("dropdown");
select.addEventListener("change", function () {
  let chart = Highcharts.chart("container", {});
  chart.destroy();
  renderChart(allData[44], this.value, 2020, false);
});
