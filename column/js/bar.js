let categories = [];
/*
series: [{
  name: 'Aa', 
  data: [1, 2, 3]
}, {
  name: 'Bb',
  data: [2,3,4]
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
let series = [];

/*
But we don't want every state on every graph. We want the state they're hovering over on the map + the 10 highest states in that category to see
how it compares.

Which means i need to go over series[i].data[category] and figure out the top 10 and stick them in their own data thing.

*/

Highcharts.data({
  // Load Data in from Google Sheets

  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Commodity_Exports",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    for (let i = 0; i < columns.length; i++) {
      console.log(columns[i]);
    }
  },
});

Highcharts.chart("container", {
  // General Chart Options
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
  xAxis: {},
  // Y Axis
  yAxis: {
    title: {
      text: "Number of Interns",
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
});
