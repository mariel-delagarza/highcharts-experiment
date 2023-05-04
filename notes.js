let data = {
  exports: {
    name: "Texas",
    data: [
      {
        name: "Coal",
        drilldown: "coal",
        isDrilldown: "False",
        y: 91670,
      },
      {
        name: "Crude Oil",
        drilldown: "crudeOil",
        isDrilldown: "False",
        y: 5004637188,
      },
      {
        name: "Electricity",
        drilldown: "electricity",
        isDrilldown: "False",
        y: 2684743,
      },
      {
        name: "Fuel Ethanol",
        drilldown: "fuelEthanol",
        isDrilldown: "False",
        y: 10839699,
      },
      {
        name: "Natural Gas",
        drilldown: "naturalGas",
        isDrilldown: "False",
        y: 60001837,
      },
      {
        name: "RPP",
        drilldown: "rpp",
        isDrilldown: "False",
        y: 1610172187,
      },
      {
        name: "Uranium",
        drilldown: "uranium",
        isDrilldown: "False",
        y: 115057,
      },
    ],
    rankingValues: [23, 1, 5, 7, 2, 19],
  },
};
let index = data.exports.data.findIndex((x) => x.drilldown === "coal");
//console.log(index);
