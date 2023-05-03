// called classInfo in aerospace bubbles
// this would  be the equivalent of my stateRanking object
// in aerospace, if you click "heavy" or "Small" it shows *all* of
// the objects in that category, as few as 9 or as many as 38.
const commodityInfo = {
  coal: {
    color: "#001219",
    lendIndex: 1,
  },
  crudeOil: {
    color: "#005f73",
    legendIndex: 2,
  },
  electricity: {
    color: "#0a9396",
    legendIndex: 3,
  },
  fuelEthanol: {
    color: "#94d2bd",
    legendIndex: 4,
  },
  naturalGas: {
    color: "#fdbf45",
    legendIndex: 5,
  },
  rpp: {
    color: "#ee9b00",
    legendIndex: 6,
  },
  uranium: {
    color: "#ca6702",
    legendIndex: 7,
  },
};

let allData = {
  exports: {
    title: "Commodity Exports to Canada 2020",
    values: [],
  },
  imports: {
    title: "Commodity Imports to Canada 2020",
    values: [],
  },
};

let currentChartData = [];

/* -------------------------------------------------------------------------- */
/*                          Parse data for highcharts                         */
/* -------------------------------------------------------------------------- */
Highcharts.data({
  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "1P6nkaiwq_jtwqxwF_J-kxyuePyOH3IF3N8Rb-XWQ1uk",
  googleSpreadsheetRange: "Sheet1",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    /* --------------------- create list of commodities --------------------- */
    let commodityColumns = columns[0].slice(2, 9);
    let commodityList = [];
    commodityColumns.forEach((element) => {
      test.push(element.slice(0, -7));
    });
  },
});
