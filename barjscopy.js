let categories = [];
/*
series: [{
  name: 'Aa', 
  data: [1, 2, 3],
}, {
  name: 'Bb',
  data: [2,3,4],
}]

So column gives me each row.
Columns[0] is the row of headers,
Columns[1] is Alabama across, etc.
Like the Ukraine map, we need to split off the headers
and just know that they have the same indices as the states.
So header[2] == coal means alabama[2] also == coal.

so name: columns[i][0]
data: columns[i][1 through end]

*/

/*
But we don't want every state on every graph. We want the state they're hovering over on the map + the 10 highest states in that category to see
how it compares.

Which means i need to go over series[i].data[category] and figure out the top 10 and stick them in their own data thing.

*/

let series = [];
let coalSeries = [];
console.log("coal series", coalSeries);
Highcharts.data({
  // Load Data in from Google Sheets

  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Commodity_Exports",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    /* parse google sheet into series for chart */
    for (let i = 1; i < columns.length; i++) {
      /*series[i - 1] = {
        name: columns[i][0],
        data: columns[i].slice(2, 9),
      };

      coalSeries[i - 1] = {
        name: columns[i][0],
        data: columns[i][2],
      };*/
      console.log(columns[i]);
      row = columns[i];

      const state = row[0];
      let coal = row[2];
      let crudeOil = row[3];
      let electricity = row[4];
      let fuelEthanol = row[5];
      let naturalGas = row[6];
      let rpp = row[7];
      let uranium = row[8];

      const data = {
        state,
        coal,
        crudeOil,
        electricity,
        fuelEthanol,
        naturalGas,
        rpp,
        uranium,
      };
    }

    /* functions to create rankings, find state's rank by state name*/
    /*const createCommodityRanking = (commodity) => {
      if (commodity == "coal") {
        index = 0;
      } else if (commodity == "crudeOil") {
        index = 1;
      } else if (commodity == "electricity") {
        index = 2;
      } else if (commodity == "fuelEthanol") {
        index = 3;
      } else if (commodity == "naturalGas") {
        index = 4;
      } else if (commodity == "rpp") {
        index = 5;
      } else if (commodity == "uranium") {
        index = 6;
      }

      return (commodityRanking = series
        .sort((a, b) => a.data[index] - b.data[index])
        .reverse());
    };
    const findCommodityRanking = (stateName, commodity) => {
      let commodityRanking = createCommodityRanking(commodity);
      return commodityRanking.findIndex((x) => x.name === stateName) + 1;
    };*/
  },
});

console.log(series);

Highcharts.chart("container", {
  chart: {
    type: "column",
  },
  // Colors
  colors: ["#0065A4"],
  // Chart Title and Subtitle
  title: {
    text: "2020 US Exports of Coal to Canada",
  },
  // Credits
  credits: {
    enabled: true,
    href: false,
    text: "CSIS | Center for Strategic and International Studies",
  },
  // Chart Legend
  legend: {
    enabled: false,
  },
  // X Axis
  xAxis: {
    categories: ["coal"],
    title: {
      text: "States",
    },
  },
  // Y Axis
  yAxis: {
    title: {
      text: "USD",
    },
  },
  // Additional Plot Options
  plotOptions: {
    column: {
      stacking: null, // Normal bar graph
      // stacking: "normal", // Stacked bar graph
      dataLabels: {
        enabled: false,
      },
    },
  },
  series: coalSeries,
});
