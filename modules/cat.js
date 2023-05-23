export const meow = () => {
  console.log("meow");
};

/* -------------------------------------------------------------------------- */
/*                        find setExtremes max for zoom                       */
/* -------------------------------------------------------------------------- */
const roundOffTo = (num, factor) => {
  const quotient = num / 100000;
  const res = Math.round(quotient) * factor;
  return res;
};
export const setExtremeMax = (arr) => {
  var i = arr.length;
  while (i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    }
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  // add 100k to arr[1] in case it's small
  let increasedMax = arr[1] + 100000;
  let roundedMax = roundOffTo(increasedMax, 100000);
  return roundedMax;
};

/* -------------------------------------------------------------------------- */
/*             make objects for finding import and export rankings            */
/* -------------------------------------------------------------------------- */

export const makeObj1 = (stateName, row) => {
  // create what we need to get export rankings later
  const obj1 = {
    name: stateName,
    data: row.slice(2, 9),
  };

  return obj1;
};

export const makeObj2 = (stateName, row) => {
  const obj2 = {
    name: stateName,
    data: row.slice(9, 16),
  };

  return obj2;
};

/* -------------------------------------------------------------------------- */
/*                       make object to push to allData                       */
/* -------------------------------------------------------------------------- */
export const makeObj3 = (
  stateName,
  row,
  importExtremeMax,
  exportExtremeMax
) => {
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

  const obj3 = {
    name: stateName,
    imports: {
      name: stateName,
      extremeMax: importExtremeMax,
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
      extremeMax: exportExtremeMax,
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

  return obj3;
};

/* -------------------------------------------------------------------------- */
/*                    sort exports and imports by commodity                   */
/* -------------------------------------------------------------------------- */

export const makeExportRankingValues = (exportStateRankings, stateName) => {
  // Add state's rank in each category to an array, add array to state's data
  let exportRankingValues = [
    exportStateRankings.coal.findIndex((x) => x.name === stateName) + 1,
    exportStateRankings.crudeOil.findIndex((x) => x.name === stateName) + 1,
    exportStateRankings.electricity.findIndex((x) => x.name === stateName) + 1,
    exportStateRankings.fuelEthanol.findIndex((x) => x.name === stateName) + 1,
    exportStateRankings.naturalGas.findIndex((x) => x.name === stateName) + 1,
    exportStateRankings.rpp.findIndex((x) => x.name === stateName) + 1,
    exportStateRankings.uranium.findIndex((x) => x.name === stateName) + 1,
  ];

  return exportRankingValues;
};

export const makeImportRankingvalues = (importStateRankings, stateName) => {
  let importRankingValues = [
    importStateRankings.coal.findIndex((x) => x.name === stateName) + 1,
    importStateRankings.crudeOil.findIndex((x) => x.name === stateName) + 1,
    importStateRankings.electricity.findIndex((x) => x.name === stateName) + 1,
    importStateRankings.fuelEthanol.findIndex((x) => x.name === stateName) + 1,
    importStateRankings.rpp.findIndex((x) => x.name === stateName) + 1,
    importStateRankings.uranium.findIndex((x) => x.name === stateName) + 1,
  ];

  return importRankingValues;
};

/* -------------------------------------------------------------------------- */
/*                            make drilldown series                           */
/* -------------------------------------------------------------------------- */
