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

let parseColumns = [
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
    "caExportToState",
    "caImportFromState",
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
    528926295,
    5077454,
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
    219858200,
    56850253,
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
    90257931,
    4981719,
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
    24558905,
    6897853,
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
    1225022991,
    280959559,
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
    2280331669,
    2429088,
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
    406270266,
    102442578,
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
    498668255,
    43581457,
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
    3285714,
    257,
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
    285050075,
    18616697,
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
    77473846,
    13409153,
  ],
  [
    "Hawaii",
    11,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    45038,
    0,
    0,
    0,
    0,
    34427873,
    2337182,
    47116919,
    0,
  ],
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
    213635748,
    2993032,
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
    26229739473,
    1540855026,
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
    180608528,
    193466587,
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
    182828733,
    159894761,
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
    38995185,
    81792356,
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
    84195817,
    71626077,
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
    1912735054,
    1103323226,
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
    2059309773,
    267914982,
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
    125789294,
    5076773,
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
    2481807339,
    35517446,
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
    3326189655,
    1079790105,
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
    5868340444,
    1663254190,
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
    87374038,
    21499528,
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
    2701573754,
    125134799,
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
    3212779202,
    52704986,
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
    46619435,
    245677083,
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
    40905367,
    535302,
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
    542382286,
    18225807,
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
    2147190206,
    158569597,
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
    18399551,
    1171974,
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
    2045003000,
    585391893,
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
    96139442,
    13672595,
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
    135083494,
    4595619002,
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
    1103003673,
    309481674,
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
    4561268492,
    58206032,
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
    395565696,
    73192979,
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
    1332001754,
    506429100,
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
    241194116,
    38257,
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
    798462431,
    255917,
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
    108988704,
    3262107,
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
    10705698,
    68684297,
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
    85247957,
    14681426,
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
    6664117772,
    8561334246,
  ],
  [
    "U.S. Virgin Islands",
    45,
    0,
    0,
    0,
    0,
    0,
    9273569,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    11870168,
  ],
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
    9250,
    87263,
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
    111848805,
    24510351,
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
    917806300,
    195561,
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
    45358287,
    26635262,
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
    8414588792,
    699759101,
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
    90190873,
    291411875,
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
    331954375,
    171970219,
  ],
];

let otherColuns = [
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

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

let oneMillion = arrayRange(0, 1000000, 100000);
let fiveBillion = arrayRange(1000000, 5000000000, 1000000);

//console.log(fiveBillion);
