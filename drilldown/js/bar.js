Highcharts.chart("hcContainer", {
  chart: {
    type: "column",
  },
  title: {
    text: " Commodity Exports to Canada 2020",
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
    type: "category",
    categories: [
      "Coal",
      "Crude Oil",
      "Electricity",
      "Fuel Ethanol",
      "Natural Gas",
      "RPP",
      "Uranium",
    ],
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
      let rankingValues = this.series.userOptions.rankingValues;
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
      return `<b>${this.point.category}</b><br><br><span>Export Total: ${yFormatted}</span><br><span>Ranking: ${rankingValues[index]}</span>`;
    },
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
      },
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
  series: [
    {
      name: "Texas",
      data: [
        { y: 91670, drilldown: "Coal" },
        { y: 5004637188, drilldown: "Crude Oil" },
        { y: 2684743, drilldown: "Electricity" },
        { y: 10839699, drilldown: "Fuel Ethanol" },
        { y: 60001837, drilldown: "Natural Gas" },
        { y: 1610172187, drilldown: "RPP" },
        { y: 115057, drilldown: "Uranium" },
      ],
      rankingValues: [23, 1, 5, 7, 2, 19],
    },
  ],
  drilldown: {
    series: [
      {
        name: "Coal",
        id: "Coal",
        data: [
          ["Carbon Dioxide", 0],
          ["Glove Damage", 0],
          ["Visual Impairment", 0],
          ["Temperature", 1],
          ["Water", 1],
          ["Other", 0],
        ],
      },
      {
        name: "Crude Oil",
        id: "Crude Oil",
        data: [
          ["Carbon Dioxide", 0],
          ["Glove Damage", 1],
          ["Visual Impairment", 2],
          ["Temperature", 2],
          ["Water", 0],
          ["Other", 1],
        ],
      },
      {
        name: "Electricity",
        id: "Electricity",
        data: [
          ["Carbon Dioxide", 3],
          ["Glove Damage", 2],
          ["Visual Impairment", 4],
          ["Temperature", 1],
          ["Water", 0],
          ["Other", 0],
        ],
      },
      {
        name: "Fuel Ethanol",
        id: "Fuel Ethanol",
        data: [
          ["Carbon Dioxide", 1],
          ["Glove Damage", 0],
          ["Visual Impairment", 1],
          ["Temperature", 1],
          ["Water", 5],
          ["Other", 1],
        ],
      },
      {
        name: "Natural Gas",
        id: "Natural Gas",
        data: [
          ["Carbon Dioxide", 1],
          ["Glove Damage", 0],
          ["Visual Impairment", 1],
          ["Temperature", 1],
          ["Water", 5],
          ["Other", 1],
        ],
      },
      {
        name: "RPP",
        id: "RPP",
        data: [
          ["Carbon Dioxide", 1],
          ["Glove Damage", 0],
          ["Visual Impairment", 1],
          ["Temperature", 1],
          ["Water", 5],
          ["Other", 1],
        ],
      },
      {
        name: "Uranium",
        id: "Uranium",
        data: [
          ["Carbon Dioxide", 1],
          ["Glove Damage", 0],
          ["Visual Impairment", 1],
          ["Temperature", 1],
          ["Water", 5],
          ["Other", 1],
        ],
      },
    ],
  },
});
