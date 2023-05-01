/* -------------------------------------------------------------------------- */
/*                             Set up data storage                            */
/* -------------------------------------------------------------------------- */
let allData = {
  coal: {
    title: "Coal",
    values: [],
  },
  crudeOil: {
    title: "Crude Oil",
    values: [],
  },
  electricity: {
    title: "Electricity",
    values: [],
  },
  fuelEthanol: {
    title: "Fuel Ethanol",
    values: [],
  },
  naturalGas: {
    title: "Natural Gas",
    values: [],
  },
  rpp: {
    title: "Raw Petroleum Products",
    values: [],
  },
  uranium: {
    title: "Uranium",
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
console.log(allData["coal"].values);

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
    for (let i = 1; i < columns.length; i++) {
      const row = columns[i];
      // x == state name
      const x = row[0];

      allData.coal.values.push({
        x,
        y: row[2],
      });
      allData.crudeOil.values.push({
        x,
        y: row[3],
      });
      allData.electricity.values.push({
        x,
        y: row[4],
      });
      allData.fuelEthanol.values.push({
        x,
        y: row[5],
      });
      allData.naturalGas.values.push({
        x,
        y: row[6],
      });
      allData.rpp.values.push({
        x,
        y: row[7],
      });
      allData.uranium.values.push({
        x,
        y: row[8],
      });
    }

    /* ------------------------ Rank States by Commodity ------------------------ */
    const sortStatesByCommodity = (values, commodity) => {
      let statesList = JSON.parse(JSON.stringify(values));
      let commodityRanking = statesList
        .sort((a, b) => a[commodity] - b[commodity])
        .reverse();

      return commodityRanking;
    };

    coalRankings = sortStatesByCommodity(allData.coal.values, "coal");
    crudeOilRankings = sortStatesByCommodity(allData.crudeOil.values, "coal");
    electricityRankings = sortStatesByCommodity(
      allData.electricity.values,
      "coal"
    );
    fuelEthanolRankings = sortStatesByCommodity(
      allData.fuelEthanol.values,
      "coal"
    );
    naturalGasRankings = sortStatesByCommodity(
      allData.naturalGas.values,
      "coal"
    );
    rppRankings = sortStatesByCommodity(allData.rpp.values, "coal");
    uraniumRankings = sortStatesByCommodity(allData.uranium.values, "coal");

    /* --------------------- find and assign state rankings --------------------- */
    const findStateRanking = (stateName, commodityRanking) => {
      return commodityRanking.findIndex((x) => x.state === stateName) + 1;
    };

    for (let i = 0; i < allData.coal.values.length; i++) {
      let stateName = allData.coal.values[i].state;
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

      Object.assign(allData.coal.values[i], rankings);
      Object.assign(allData.crudeOil.values[i], rankings);
      Object.assign(allData.electricity.values[i], rankings);
      Object.assign(allData.fuelEthanol.values[i], rankings);
      Object.assign(allData.naturalGas.values[i], rankings);
      Object.assign(allData.rpp.values[i], rankings);
      Object.assign(allData.uranium.values[i], rankings);
    }

    console.log(allData);
  },
});

let seriesInfo = [
  {
    name: "Tokyo",
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
  },
  {
    name: "New York",
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0],
  },
  {
    name: "London",
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3],
  },
  {
    name: "Berlin",
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4],
  },
];

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
    min: 0,
    title: {
      text: "Rainfall (mm)",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: seriesInfo,
});
