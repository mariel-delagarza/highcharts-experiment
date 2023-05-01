let categories = [];

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

let coalRankings = [];
let crudeOilRankings = [];
let electricityRankings = [];
let fuelEthanolRankings = [];
let naturalGasRankings = [];
let rppRankings = [];
let uraniumRankings = [];

Highcharts.data({
  googleAPIKey: "AIzaSyAImbihK2tiRewSFzuJTF_lcgPlGSr7zcg",
  googleSpreadsheetKey: "19uN6jYmrvuXwwrcOnwpTlQSJAEYP9gH6TQdq3Jn4z94",
  googleSpreadsheetRange: "Commodity_Exports",
  switchRowsAndColumns: true,
  parsed: function parsed(columns) {
    /* parse google sheet into series for chart */
    for (let i = 1; i < columns.length; i++) {
      const row = columns[i];
      const state = row[0];

      allData.coal.values.push({
        state,
        coal: row[2],
      });
      allData.crudeOil.values.push({
        state,
        crudeOil: row[3],
      });
      allData.electricity.values.push({
        state,
        electricity: row[4],
      });
      allData.fuelEthanol.values.push({
        title: "Fuel Ethanol",
        values: row[5],
      });
      allData.naturalGas.values.push({
        state,
        naturalGas: row[6],
      });
      allData.rpp.values.push({
        title: "Raw Petrolum Products",
        values: row[7],
      });
      allData.uranium.values.push({
        title: "Uranium",
        values: row[8],
      });
    }

    /* functions to create rankings, find state's rank by state name*/
    const createCommodityRanking = (values, commodity) => {
      let commodityRanking = values
        .sort((a, b) => a[commodity] - b[commodity])
        .reverse();

      return commodityRanking;
    };
    const findStateRanking = (stateName, commodityRanking) => {
      return commodityRanking.findIndex((x) => x.state === stateName) + 1;
    };

    coalRankings = createCommodityRanking(allData.coal.values, "coal");
    crudeOilRankings = createCommodityRanking(
      allData.crudeOil.values,
      "crudeOil"
    );
    electricityRankings = createCommodityRanking(
      allData.electricity.values,
      "electricity"
    );
    fuelEthanolRankings = createCommodityRanking(
      allData.fuelEthanol.values,
      "fuelEthanol"
    );
    naturalGasRankings = createCommodityRanking(
      allData.fuelEthanol.values,
      "fuelEthanol"
    );
    rppRankings = createCommodityRanking(allData.rpp.values, "rpp");
    uraniumRankings = createCommodityRanking(allData.uranium.values, "uranium");
    console.log(findStateRanking("Texas", coalRankings));
    for (let i = 0; i < allData.coal.values.length; i++) {
      //console.log(coalRankings[i]["state"]);
      /*let coalRanking = findStateRanking(
        coalRankings[i]["state"],
        coalRankings
      );
      let crudeOilRanking = findStateRanking(
        crudeOilRankings[i]["state"],
        crudeOilRankings
      );
      let electricityRanking = findStateRanking(
        electricityRankings[i]["state"],
        coalRankings
      );
      let fuelEthanolRanking = findStateRanking(
        fuelEthanolRankings[i]["state"]
      )*/
      console.log(allData.coal.values);
      let rankings = {
        coal: findStateRanking(coalRankings[i]["state"], coalRankings),
        crudeOil: findStateRanking(
          crudeOilRankings[i]["state"],
          crudeOilRankings
        ),
        electricity: findStateRanking(
          electricityRankings[i]["state"],
          electricityRankings
        ),
        fuelEthanol: findStateRanking(
          fuelEthanolRankings[i]["state"],
          fuelEthanolRankings
        ),
        naturalGas: findStateRanking(
          naturalGasRankings[i]["state"],
          naturalGasRankings
        ),
        rpp: findStateRanking(rppRankings[i]["state"], rppRankings),
        uranium: findStateRanking(uraniumRankings[i]["state"], uraniumRankings),
      };
      Object.assign(allData.coal.values[i], rankings);
      Object.assign(allData.crudeOil.values[i], rankings);
      Object.assign(allData.electricity.values[i], rankings);
      Object.assign(allData.fuelEthanol.values[i], rankings);
      Object.assign(allData.naturalGas.values[i], rankings);
      Object.assign(allData.rpp.values[i], rankings);
      Object.assign(allData.uranium.values[i], rankings);
    }

    console.log("All data", allData);
  },
});

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
  //series: coalSeries,
});
