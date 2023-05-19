const columns = [
  [
    "state",
    "stateId",
    "coalExports",
    "crudeOilExports",
    "electricityExports",
    "fuelEthanolExports",
    "naturalGasExports",
    "rppExports",
    "uraniumExports",
    "coalImports",
    "crudeOilImports",
    "electricityImports",
    "fuelEthanolImports",
    "naturalGasImports",
    "rppImports",
    "uraniumImports",
  ],
  [
    "Alabama",
    0,
    4,
    10,
    0,
    0,
    0,
    3959499,
    7248,
    4445601,
    384089052,
    0,
    0,
    0,
    21190290,
    3498725,
  ],
  [
    "Alaska",
    1,
    0,
    1091,
    0,
    0,
    0,
    44388658,
    24511,
    427345,
    0,
    30049,
    0,
    0,
    171165257,
    141567,
  ],
  [
    "Arizona",
    2,
    312643,
    210834,
    0,
    0,
    0,
    3366305,
    2187,
    6806055,
    0,
    47732394,
    0,
    0,
    11564034,
    4411526,
  ],
  [
    "Arkansas",
    3,
    43770,
    31683,
    0,
    0,
    0,
    4965580,
    347915,
    3387371,
    0,
    0,
    0,
    0,
    9597178,
    6202095,
  ],
  [
    "California",
    4,
    2225104,
    28876,
    112409,
    128982,
    959,
    215056644,
    1946682,
    75971123,
    261588158,
    338037136,
    0,
    0,
    232618830,
    48833965,
  ],
  [
    "Colorado",
    5,
    9730,
    595,
    0,
    0,
    0,
    1887400,
    0,
    13712191,
    1752307899,
    61114,
    0,
    0,
    11187214,
    4240698,
  ],
  [
    "Connecticut",
    6,
    4191,
    26,
    195861,
    0,
    51210127,
    28602463,
    20595,
    12283145,
    0,
    0,
    0,
    0,
    303864591,
    1250909,
  ],
  [
    "Delaware",
    7,
    1137,
    0,
    0,
    0,
    0,
    34035750,
    11127,
    247443,
    375226508,
    0,
    0,
    0,
    13499873,
    610750,
  ],
  [
    "District of Columbia",
    8,
    0,
    0,
    0,
    0,
    0,
    201,
    0,
    0,
    0,
    0,
    0,
    0,
    160848,
    2406116,
  ],
  [
    "Florida",
    9,
    1972263,
    114,
    337148,
    0,
    0,
    11134920,
    1099849,
    17762224,
    0,
    0,
    0,
    0,
    180355138,
    24578009,
  ],
  [
    "Georgia",
    10,
    38270,
    0,
    0,
    0,
    0,
    7772540,
    2665091,
    10084870,
    1466268,
    0,
    0,
    0,
    38472927,
    10502377,
  ],
  ["Hawaii", 11, 0, 0, 0, 0, 0, 0, 0, 45038, 0, 0, 0, 0, 34427873, 2337182],
  [
    "Idaho",
    12,
    0,
    56,
    0,
    0,
    28824,
    1720223,
    589203,
    1800680,
    0,
    1486568,
    0,
    0,
    162211127,
    1404554,
  ],
  [
    "Illinois",
    13,
    4126156,
    46425,
    0,
    184483,
    0,
    974438595,
    224997330,
    16259977,
    19375441935,
    0,
    0,
    875350446,
    182057888,
    42873716,
  ],
  [
    "Indiana",
    14,
    13367937,
    25721214,
    3929552,
    0,
    0,
    85339359,
    22787709,
    58801555,
    21784,
    0,
    0,
    0,
    77648251,
    4628823,
  ],
  [
    "Iowa",
    15,
    2779,
    0,
    0,
    112481227,
    0,
    12433776,
    0,
    4709243,
    902089,
    0,
    0,
    112389633,
    23842464,
    991519,
  ],
  [
    "Kansas",
    16,
    27906,
    0,
    0,
    25168886,
    6360091,
    32343395,
    0,
    2255575,
    0,
    12610,
    0,
    0,
    28056204,
    140599,
  ],
  [
    "Kentucky",
    17,
    33854376,
    2929,
    0,
    0,
    0,
    22034078,
    66490,
    16994773,
    0,
    0,
    0,
    0,
    44701694,
    4081515,
  ],
  [
    "Louisiana",
    18,
    0,
    288547160,
    0,
    0,
    0,
    572755348,
    668762,
    2220037,
    1370480886,
    0,
    55692,
    0,
    111101464,
    10466182,
  ],
  [
    "Maine",
    19,
    11745,
    0,
    264818,
    1579080,
    203990700,
    3462237,
    0,
    5215759,
    0,
    153011309,
    0,
    0,
    1450605351,
    3341,
  ],
  [
    "Maryland",
    20,
    1352,
    18845,
    0,
    0,
    495,
    3861391,
    84146,
    5082330,
    9846784,
    0,
    0,
    0,
    79750088,
    3593683,
  ],
  [
    "Massachusetts",
    21,
    22413,
    38,
    4297949,
    11134,
    698262,
    3595336,
    19122873,
    9106246,
    0,
    0,
    0,
    421972833,
    1501875074,
    5957830,
  ],
  [
    "Michigan",
    22,
    86819961,
    27062464,
    10337,
    78427,
    598492325,
    131114017,
    8489,
    54596129,
    1760785845,
    159521436,
    0,
    289668342,
    327375260,
    6638656,
  ],
  [
    "Minnesota",
    23,
    8787677,
    2798059,
    295,
    97058216,
    1267484,
    1189365180,
    140423,
    9443701,
    3703580859,
    411526371,
    0,
    302584448,
    151666414,
    5839178,
  ],
  [
    "Mississippi",
    24,
    10593,
    70981,
    0,
    42905,
    0,
    16659351,
    12677,
    886332,
    60025977,
    0,
    0,
    0,
    6261082,
    1087576,
  ],
  [
    "Missouri",
    25,
    55341692,
    2564,
    0,
    166527,
    0,
    12838770,
    29412008,
    7460870,
    2073583673,
    0,
    0,
    0,
    24850171,
    4709782,
  ],
  [
    "Montana",
    26,
    53957,
    10,
    10458780,
    0,
    0,
    30663023,
    0,
    1183021,
    2381597728,
    2138127,
    0,
    65586538,
    59006159,
    472180,
  ],
  [
    "Nebraska",
    27,
    0,
    0,
    0,
    649451,
    165592248,
    25693522,
    0,
    1174940,
    0,
    307418,
    0,
    0,
    28074226,
    6864850,
  ],
  [
    "Nevada",
    28,
    402,
    259,
    0,
    0,
    0,
    417544,
    0,
    207288,
    0,
    11557138,
    0,
    0,
    18599601,
    1593291,
  ],
  [
    "New Hampshire",
    29,
    0,
    2,
    0,
    47827,
    10041498,
    4141477,
    8108,
    2553706,
    0,
    37946704,
    0,
    0,
    382713251,
    522500,
  ],
  [
    "New Jersey",
    30,
    1685473,
    15266,
    0,
    14056,
    21054421,
    99024124,
    2089157,
    11875988,
    1087462932,
    0,
    0,
    0,
    559748096,
    18405332,
  ],
  [
    "New Mexico",
    31,
    85929,
    5,
    0,
    0,
    0,
    30041,
    799630,
    3559518,
    0,
    152686,
    0,
    0,
    5098565,
    5563880,
  ],
  [
    "New York",
    32,
    9854357,
    11163,
    811677,
    45773,
    347260227,
    99182310,
    171909,
    28436682,
    25051313,
    340662476,
    0,
    672367026,
    509868543,
    21272555,
  ],
  [
    "North Carolina",
    33,
    6132764,
    1,
    0,
    2857,
    0,
    4542480,
    3613,
    13867969,
    0,
    0,
    0,
    0,
    43121244,
    18119727,
  ],
  [
    "North Dakota",
    34,
    316820,
    1523019057,
    8849,
    85508229,
    4157388,
    1977317002,
    0,
    7451766,
    17894150,
    1480638,
    0,
    0,
    78466861,
    240565,
  ],
  [
    "Ohio",
    35,
    23704187,
    14580021,
    0,
    0,
    0,
    202597477,
    900873,
    44118627,
    700930222,
    33006,
    0,
    0,
    103957255,
    12682510,
  ],
  [
    "Oklahoma",
    36,
    5062,
    17655,
    0,
    0,
    228,
    45448486,
    2031,
    7147085,
    3539158765,
    0,
    0,
    0,
    16861401,
    323759,
  ],
  [
    "Oregon",
    37,
    147117,
    4636,
    1310047,
    0,
    0,
    55720195,
    20,
    16444620,
    144203647,
    18210902,
    0,
    0,
    126484863,
    3691670,
  ],
  [
    "Pennsylvania",
    38,
    209222555,
    40446,
    0,
    2835,
    52,
    186373874,
    7973,
    43668662,
    819691451,
    1777383,
    0,
    0,
    168099352,
    7389523,
  ],
  [
    "Puerto Rico",
    39,
    0,
    0,
    0,
    0,
    0,
    29888,
    0,
    2451259,
    4930133,
    0,
    0,
    0,
    178821724,
    2229787,
  ],
  [
    "Rhode Island",
    40,
    71,
    0,
    0,
    0,
    0,
    199864,
    0,
    866543,
    0,
    0,
    0,
    0,
    622666876,
    265355,
  ],
  [
    "South Carolina",
    41,
    34527,
    1077,
    0,
    0,
    0,
    2512684,
    233,
    6702355,
    0,
    0,
    0,
    0,
    68912944,
    9532127,
  ],
  [
    "South Dakota",
    42,
    0,
    11,
    0,
    53575175,
    0,
    84391,
    30,
    753105,
    0,
    0,
    0,
    0,
    4810771,
    2799950,
  ],
  [
    "Tennessee",
    43,
    719921,
    106367,
    0,
    1422048,
    0,
    8812237,
    409291,
    3877876,
    0,
    0,
    0,
    12606788,
    26805049,
    23310254,
  ],
  [
    "Texas",
    44,
    91670,
    5004637188,
    2684743,
    10839699,
    60001837,
    1610172187,
    115057,
    29218687,
    4282060548,
    34297,
    0,
    0,
    876221045,
    18807432,
  ],
  ["U.S. Virgin Islands", 45, 0, 0, 0, 0, 0, 9273569, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    "Utah",
    46,
    12889504,
    1050353,
    0,
    0,
    0,
    5208855,
    0,
    4861,
    0,
    0,
    0,
    0,
    2366,
    0,
  ],
  [
    "Vermont",
    47,
    0,
    0,
    0,
    0,
    0,
    152782,
    0,
    5243099,
    6089,
    2351790,
    0,
    0,
    74699879,
    5081022,
  ],
  [
    "Virginia",
    48,
    9824628,
    843628,
    0,
    0,
    0,
    10034121,
    106421,
    1571057,
    0,
    426738729,
    0,
    39659249,
    248915923,
    151213,
  ],
  [
    "Washington",
    49,
    1829469,
    9032884,
    165953921,
    75,
    3726685,
    365037131,
    1106632,
    8870887,
    13231757,
    0,
    0,
    0,
    8545111,
    4788407,
  ],
  [
    "West Virginia",
    50,
    197012794,
    0,
    0,
    0,
    0,
    30652734,
    0,
    20516854,
    3448268712,
    46615281,
    0,
    2519392096,
    532117141,
    6987410,
  ],
  [
    "Wisconsin",
    51,
    3414793,
    6477,
    0,
    83812720,
    0,
    47117745,
    0,
    939962,
    0,
    0,
    0,
    0,
    68699542,
    822116,
  ],
  [
    "Wyoming",
    52,
    3488,
    297,
    0,
    0,
    0,
    5911182,
    1078006,
    9319941,
    3769545,
    0,
    0,
    0,
    237342719,
    8907151,
  ],
];

/* --------------------------- Make commodity list -------------------------- */
let commodityColumns = columns[0].slice(2, 9);
let commodityList = [];
commodityColumns.forEach((element) => {
  commodityList.push(element.slice(0, -7));
});

/* --------------------------- Make allData object -------------------------- */
let allData = [];
let exportDataToSort = [];
let importDataToSort = [];

function makeAllData(columns) {
  for (let i = 1; i < columns.length; i++) {
    const row = columns[i];
    let stateName = row[0];
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

    /*need data in this shape to sort by commodity later*/
    const obj1 = {
      name: stateName,
      data: row.slice(2, 9),
    };
    exportDataToSort.push(obj1);

    /*need data in this shape to sort by commodity later*/
    const obj2 = {
      name: stateName,
      data: row.slice(9, 16),
    };
    importDataToSort.push(obj2);

    /*object of state's data, add to allData*/
    const obj3 = {
      name: stateName,
      imports: {
        name: stateName,
        data: [
          {
            name: "Coal",
            drilldown: commodityList[0],
            isDrilldown: "False",
            y: coalImports,
          },
          {
            name: "Crude Oil",
            drilldown: commodityList[1],
            isDrilldown: "False",
            y: crudeOilImports,
          },
          {
            name: "Electricity",
            drilldown: commodityList[2],
            isDrilldown: "False",
            y: electricityImports,
          },
          {
            name: "Fuel Ethanol",
            drilldown: commodityList[3],
            isDrilldown: "False",
            y: fuelEthanolImports,
          },
          {
            name: "Natural Gas",
            drilldown: commodityList[4],
            isDrilldown: "False",
            y: naturalGasImports,
          },
          {
            name: "RPP",
            drilldown: commodityList[5],
            isDrilldown: "False",
            y: rppImports,
          },
          {
            name: "Uranium",
            drilldown: commodityList[6],
            isDrilldown: "False",
            y: uraniumImports,
          },
        ],
      },
      exports: {
        name: stateName,
        data: [
          {
            name: "Coal",
            drilldown: commodityList[0],
            isDrilldown: "False",
            y: coalExports,
          },
          {
            name: "Crude Oil",
            drilldown: commodityList[1],
            isDrilldown: "False",
            y: crudeOilExports,
          },
          {
            name: "Electricity",
            drilldown: commodityList[2],
            isDrilldown: "False",
            y: electricityExports,
          },
          {
            name: "Fuel Ethanol",
            drilldown: commodityList[3],
            isDrilldown: "False",
            y: fuelEthanolExports,
          },
          {
            name: "Natural Gas",
            drilldown: commodityList[4],
            isDrilldown: "False",
            y: naturalGasExports,
          },
          {
            name: "RPP",
            drilldown: commodityList[5],
            isDrilldown: "False",
            y: rppExports,
          },
          {
            name: "Uranium",
            drilldown: commodityList[6],
            isDrilldown: "False",
            y: uraniumExports,
          },
        ],
      },
      importDrilldown: [],
      exportDrilldown: [],
    };
    allData.push(obj3);
  }
}
makeAllData(columns);
/* ------------------------ Sort states by commodity ------------------------ */
let exportStateRankings = {};
let importStateRankings = {};

const sortStatesByCommodity = () => {
  for (let i = 0; i < commodityList.length; i++) {
    /* process exports*/
    let exportDataToSortCopy = JSON.parse(JSON.stringify(exportDataToSort));
    let exportRankingValues = exportDataToSortCopy.sort(
      (a, b) => a.data[i] - b.data[i]
    );
    let exportReverse = exportRankingValues.reverse();
    Object.assign((exportStateRankings[commodityList[i]] = exportReverse));

    exportDataToSortCopy = "";
    exportRankingValues = "";
    exportReverse = "";

    /* process imports*/
    let importDataToSortCopy = JSON.parse(JSON.stringify(importDataToSort));
    let importRankingValues = importDataToSortCopy.sort(
      (a, b) => a.data[i] - b.data[i]
    );
    let importReverse = importRankingValues.reverse();
    Object.assign((importStateRankings[commodityList[i]] = importReverse));

    importDataToSortCopy = "";
    exportRankingValues = "";
    exportReverse = "";
  }
};
sortStatesByCommodity();

/* --------------------------- find state ranking --------------------------- */
const findStateRanking = () => {
  for (let i = 0; i < allData.length; i++) {
    let stateName = allData[i].name;

    // Add state's rank in each category to an array, add array to state's data
    let exportRankingValues = [
      exportStateRankings.coal.findIndex((x) => x.name === stateName) + 1,
      exportStateRankings.crudeOil.findIndex((x) => x.name === stateName) + 1,
      exportStateRankings.electricity.findIndex((x) => x.name === stateName) +
        1,
      exportStateRankings.fuelEthanol.findIndex((x) => x.name === stateName) +
        1,
      exportStateRankings.naturalGas.findIndex((x) => x.name === stateName) + 1,
      exportStateRankings.rpp.findIndex((x) => x.name === stateName) + 1,
      exportStateRankings.uranium.findIndex((x) => x.name === stateName) + 1,
    ];

    let importRankingValues = [
      importStateRankings.coal.findIndex((x) => x.name === stateName) + 1,
      importStateRankings.crudeOil.findIndex((x) => x.name === stateName) + 1,
      importStateRankings.electricity.findIndex((x) => x.name === stateName) +
        1,
      importStateRankings.fuelEthanol.findIndex((x) => x.name === stateName) +
        1,
      importStateRankings.rpp.findIndex((x) => x.name === stateName) + 1,
      importStateRankings.uranium.findIndex((x) => x.name === stateName) + 1,
    ];

    Object.assign((allData[i].exports["rankingValues"] = exportRankingValues));
    Object.assign((allData[i].imports["rankingValues"] = importRankingValues));
  }
};
findStateRanking();

/* -------------------------------------------------------------------------- */
/*                                  Drilldown                                 */
/* -------------------------------------------------------------------------- */
let exportDrilldownSeries = [];
let importDrilldownSeries = [];
let top10Exports = Object.entries(exportStateRankings)
  .slice(0)
  .map((entry) => entry[1].slice(0, 10));
let top10Imports = Object.entries(importStateRankings)
  .slice(0)
  .map((entry) => entry[1].slice(0, 10));

/* -------------------------- make drillown series -------------------------- */
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
      name: allData[i].exports.data[i].name,
      id: commodityList[i],
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
      name: allData[i].imports.data[i].name,
      id: commodityList[i],
      data: importData,
    };
    importDrilldownSeries.push(obj);
  }
};
makeDrilldownSeries();

/* -------------------------------------------------------------------------- */
/*                       add drilldown series to states                       */
/* -------------------------------------------------------------------------- */
const addDrilldownSeriesToAllData = () => {
  let exportObj = {};
  let importObj = {};
  // i -> go through each state
  for (let i = 0; i < allData.length; i++) {
    // j -> go through each commodity
    for (let j = 0; j < 7; j++) {
      // grab the commodity y value for the state
      exportObj = {
        name: allData[i].name,
        y: allData[i].exports.data[j].y,
        color: "#F5B841",
      };
      importObj = {
        name: allData[i].name,
        y: allData[i].imports.data[j].y,
        color: "#F5B841",
      };

      // the array of the top10 states for that commodity
      let exportTop10 = structuredClone(exportDrilldownSeries[j].data);
      let importTop10 = structuredClone(importDrilldownSeries[j].data);

      // go through each value of the commodity array
      for (let k = 0; k < exportTop10.length; k++) {
        // if that value is for the state you're on
        if (exportTop10[k].name == allData[i].name) {
          exportTop10[k].color = "#F5B841";
        }

        if (importTop10[k].name == allData[i].name) {
          importTop10[k].color = "#F5B841";
        }
      }
      /* ----------------------------- exports ---------------------------- */
      // if the array includes the state we're looking at
      if (exportTop10.some((value) => value.name == allData[i].name)) {
        // add that array to the drilldown as is

        let exportTemp = {
          name: allData[i].exports.data[j].name,
          id: commodityList[j],
          data: exportTop10,
        };

        allData[i].exportDrilldown.push(exportTemp);
      } else {
        let array = [...exportTop10, exportObj];

        let exportTemp = {
          name: allData[i].exports.data[j].name,
          id: commodityList[j],
          data: array,
        };

        allData[i].exportDrilldown.push(exportTemp);
      }

      /* ----------------------------- imports ---------------------------- */
      if (importTop10.some((value) => value.name == allData[i].name)) {
        // add that array to the drilldown as is

        let importTemp = {
          name: allData[i].imports.data[j].name,
          id: commodityList[j],
          data: importTop10,
        };

        allData[i].importDrilldown.push(importTemp);
      } else {
        let array = [...importTop10, importObj];

        let importTemp = {
          name: allData[i].imports.data[j].name,
          id: commodityList[j],
          data: array,
        };

        allData[i].importDrilldown.push(importTemp);
      }
    }
  }
};
addDrilldownSeriesToAllData();

//console.log("all data", allData[44]);
