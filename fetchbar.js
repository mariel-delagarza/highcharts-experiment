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
    let commodityList = columns[0].slice(2, 9);

    /* ------------------------ Create allData object ---------------------- */
    for (let i = 1; i < columns.length; i++) {
      const row = columns[i];

      const obj = {
        name: row[0],
        data: row.slice(2, 9),
      };

      allDataExports.push(obj);
    }

    /* --------------------Rank States by Commodity ----------------------- */

    const sortStatesByCommodity = () => {
      for (let i = 0; i < commodityList.length; i++) {
        let allDataCopy = JSON.parse(JSON.stringify(allDataExports));
        let rankingValues = allDataCopy.sort((a, b) => a.data[i] - b.data[i]);
        let reverse = rankingValues.reverse();
        Object.assign((stateRankings[commodityList[i]] = reverse));
        allDataCopy = "";
        rankingValues = "";
        reverse = "";
      }
    };

    console.log(stateRankings);

    sortStatesByCommodity();
    /* ------------------- find and assign state rankings ------------------- */

    const findStateRanking = () => {
      for (let i = 0; i < allDataExports.length; i++) {
        let stateName = allDataExports[i].name;

        // Add state's rank in each category to an array, add array to state
        let rankingValues = [
          stateRankings.coal.findIndex((x) => x.name === stateName) + 1,
          stateRankings.crudeOil.findIndex((x) => x.name === stateName) + 1,
          stateRankings.electricity.findIndex((x) => x.name === stateName) + 1,
          stateRankings.fuelEthanol.findIndex((x) => x.name === stateName) + 1,
          stateRankings.rpp.findIndex((x) => x.name === stateName) + 1,
          stateRankings.uranium.findIndex((x) => x.name === stateName) + 1,
        ];

        Object.assign((allDataExports[i]["rankingValues"] = rankingValues));
      }
    };

    findStateRanking();

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
      series: [
        /*
        // data for each series should be top 10 states
        // need to check if it includes the state being drilled down from
        { name: "Coal", id: "coalExports", data: [] },
        { name: "Crude Oil", id: "crudeOilExports", data: [] },
        { name: "Electricity", id: "electricityExports", data: [] },
        { name: "Fuel Ethanol", id: "fuelEthanolExports", data: [] },
        { name: "Natural Gas", id: "naturalGasExports", data: [] },
        { name: "RPP", id: "rppExports", data: [] },
        { name: "Uranium", id: "uraniumExports", data: [] },
        { name: "Coal", id: "coalImports", data: [] },
        { name: "Crude Oil", id: "crudeOilImports", data: [] },
        { name: "Electricity", id: "electricityImports", data: [] },
        { name: "Fuel Ethanol", id: "fuelEthanolImports", data: [] },
        { name: "Natural Gas", id: "naturalGasImports", data: [] },
        { name: "RPP", id: "rppImports", data: [] },
        { name: "Uranium", id: "uraniumImports", data: [] },
    */ data,
      ],
    },
  });
}
