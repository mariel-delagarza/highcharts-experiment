/* -------------------------------------------------------------------------- */
/*                                Data Storage                                */
/* -------------------------------------------------------------------------- */

allData[] -- Array that holds all of the data (values, rankings) for each state.

Data shape:

let allDataSample = {
  "name": "Alabama",
  "imports": {
      "name": "Alabama",
      "data": [
          {
              "name": "Coal",
              // "drilldown name needs to match "
              "drilldown": "Coal Imports",
              "isDrilldown": "False",
              "y": 4445601
          },
          {
              "name": "Crude Oil",
              "drilldown": "Crude Oil Imports",
              "isDrilldown": "False",
              "y": 384089052
          },
          {
              "name": "Electricity",
              "drilldown": "Electricity Imports",
              "isDrilldown": "False",
              "y": 0
          },
          {
              "name": "Fuel Ethanol",
              "drilldown": "Fuel Ethanol Imports",
              "isDrilldown": "False",
              "y": 0
          },
          {
              "name": "Natural Gas",
              "drilldown": "Natural Gas Imports",
              "isDrilldown": "False",
              "y": 0
          },
          {
              "name": "RPP",
              "drilldown": "RPP Imports",
              "isDrilldown": "False",
              "y": 21190290
          },
          {
              "name": "Uranium",
              "drilldown": "Uranium Imports",
              "isDrilldown": "False",
              "y": 3498725
          }
      ],
      "rankingValues": [
          31,
          14,
          53,
          53,
          40,
          31
      ]
  },
  "exports": {
      "name": "Alabama",
      "data": [
          {
              "name": "Coal",
              "drilldown": "coal",
              "isDrilldown": "False",
              "y": 4
          },
          {
              "name": "Crude Oil",
              "drilldown": "crudeOil",
              "isDrilldown": "False",
              "y": 10
          },
          {
              "name": "Electricity",
              "drilldown": "electricity",
              "isDrilldown": "False",
              "y": 0
          },
          {
              "name": "Fuel Ethanol",
              "drilldown": "fuelEthanol",
              "isDrilldown": "False",
              "y": 0
          },
          {
              "name": "Natural Gas",
              "drilldown": "naturalGas",
              "isDrilldown": "False",
              "y": 0
          },
          {
              "name": "RPP",
              "drilldown": "rpp",
              "isDrilldown": "False",
              "y": 3959499
          },
          {
              "name": "Uranium",
              "drilldown": "uranium",
              "isDrilldown": "False",
              "y": 7248
          }
      ],
      "rankingValues": [
          42,
          37,
          53,
          53,
          53,
          38,
          30
      ]
  },
  "importDrilldown": [],
  "exportDrilldown": [
      {
          "name": "coal",
          "id": "coal",
          "data": [
              {
                  "name": "Pennsylvania",
                  "y": 209222555,
                  "color": "#6a041d"
              },
              {
                  "name": "West Virginia",
                  "y": 197012794,
                  "color": "#6a041d"
              },
              {
                  "name": "Michigan",
                  "y": 86819961,
                  "color": "#6a041d"
              },
              {
                  "name": "Missouri",
                  "y": 55341692,
                  "color": "#6a041d"
              },
              {
                  "name": "Kentucky",
                  "y": 33854376,
                  "color": "#6a041d"
              },
              {
                  "name": "Ohio",
                  "y": 23704187,
                  "color": "#6a041d"
              },
              {
                  "name": "Indiana",
                  "y": 13367937,
                  "color": "#6a041d"
              },
              {
                  "name": "Utah",
                  "y": 12889504,
                  "color": "#6a041d"
              },
              {
                  "name": "New York",
                  "y": 9854357,
                  "color": "#6a041d"
              },
              {
                  "name": "Virginia",
                  "y": 9824628,
                  "color": "#6a041d"
              },
              {
                  "name": "Alabama",
                  "y": 4,
                  "color": "#F5B841"
              }
          ]
      },
      {
          "name": "crudeOil",
          "id": "crudeOil",
          "data": [
              {
                  "name": "Texas",
                  "y": 5004637188,
                  "color": "#6a041d"
              },
              {
                  "name": "North Dakota",
                  "y": 1523019057,
                  "color": "#6a041d"
              },
              {
                  "name": "Louisiana",
                  "y": 288547160,
                  "color": "#6a041d"
              },
              {
                  "name": "Michigan",
                  "y": 27062464,
                  "color": "#6a041d"
              },
              {
                  "name": "Indiana",
                  "y": 25721214,
                  "color": "#6a041d"
              },
              {
                  "name": "Ohio",
                  "y": 14580021,
                  "color": "#6a041d"
              },
              {
                  "name": "Washington",
                  "y": 9032884,
                  "color": "#6a041d"
              },
              {
                  "name": "Minnesota",
                  "y": 2798059,
                  "color": "#6a041d"
              },
              {
                  "name": "Utah",
                  "y": 1050353,
                  "color": "#6a041d"
              },
              {
                  "name": "Virginia",
                  "y": 843628,
                  "color": "#6a041d"
              },
              {
                  "name": "Alabama",
                  "y": 10,
                  "color": "#F5B841"
              }
          ]
      },
      {
          "name": "electricity",
          "id": "electricity",
          "data": [
              {
                  "name": "Washington",
                  "y": 165953921,
                  "color": "#6a041d"
              },
              {
                  "name": "Montana",
                  "y": 10458780,
                  "color": "#6a041d"
              },
              {
                  "name": "Massachusetts",
                  "y": 4297949,
                  "color": "#6a041d"
              },
              {
                  "name": "Indiana",
                  "y": 3929552,
                  "color": "#6a041d"
              },
              {
                  "name": "Texas",
                  "y": 2684743,
                  "color": "#6a041d"
              },
              {
                  "name": "Oregon",
                  "y": 1310047,
                  "color": "#6a041d"
              },
              {
                  "name": "New York",
                  "y": 811677,
                  "color": "#6a041d"
              },
              {
                  "name": "Florida",
                  "y": 337148,
                  "color": "#6a041d"
              },
              {
                  "name": "Maine",
                  "y": 264818,
                  "color": "#6a041d"
              },
              {
                  "name": "Connecticut",
                  "y": 195861,
                  "color": "#6a041d"
              },
              {
                  "name": "Alabama",
                  "y": 0,
                  "color": "#F5B841"
              }
          ]
      },
      {
          "name": "fuelEthanol",
          "id": "fuelEthanol",
          "data": [
              {
                  "name": "Iowa",
                  "y": 112481227,
                  "color": "#6a041d"
              },
              {
                  "name": "Minnesota",
                  "y": 97058216,
                  "color": "#6a041d"
              },
              {
                  "name": "North Dakota",
                  "y": 85508229,
                  "color": "#6a041d"
              },
              {
                  "name": "Wisconsin",
                  "y": 83812720,
                  "color": "#6a041d"
              },
              {
                  "name": "South Dakota",
                  "y": 53575175,
                  "color": "#6a041d"
              },
              {
                  "name": "Kansas",
                  "y": 25168886,
                  "color": "#6a041d"
              },
              {
                  "name": "Texas",
                  "y": 10839699,
                  "color": "#6a041d"
              },
              {
                  "name": "Maine",
                  "y": 1579080,
                  "color": "#6a041d"
              },
              {
                  "name": "Tennessee",
                  "y": 1422048,
                  "color": "#6a041d"
              },
              {
                  "name": "Nebraska",
                  "y": 649451,
                  "color": "#6a041d"
              },
              {
                  "name": "Alabama",
                  "y": 0,
                  "color": "#F5B841"
              }
          ]
      },
      {
          "name": "naturalGas",
          "id": "naturalGas",
          "data": [
              {
                  "name": "Michigan",
                  "y": 598492325,
                  "color": "#6a041d"
              },
              {
                  "name": "New York",
                  "y": 347260227,
                  "color": "#6a041d"
              },
              {
                  "name": "Maine",
                  "y": 203990700,
                  "color": "#6a041d"
              },
              {
                  "name": "Nebraska",
                  "y": 165592248,
                  "color": "#6a041d"
              },
              {
                  "name": "Texas",
                  "y": 60001837,
                  "color": "#6a041d"
              },
              {
                  "name": "Connecticut",
                  "y": 51210127,
                  "color": "#6a041d"
              },
              {
                  "name": "New Jersey",
                  "y": 21054421,
                  "color": "#6a041d"
              },
              {
                  "name": "New Hampshire",
                  "y": 10041498,
                  "color": "#6a041d"
              },
              {
                  "name": "Kansas",
                  "y": 6360091,
                  "color": "#6a041d"
              },
              {
                  "name": "North Dakota",
                  "y": 4157388,
                  "color": "#6a041d"
              },
              {
                  "name": "Alabama",
                  "y": 0,
                  "color": "#F5B841"
              }
          ]
      },
      {
          "name": "rpp",
          "id": "rpp",
          "data": [
              {
                  "name": "North Dakota",
                  "y": 1977317002,
                  "color": "#6a041d"
              },
              {
                  "name": "Texas",
                  "y": 1610172187,
                  "color": "#6a041d"
              },
              {
                  "name": "Minnesota",
                  "y": 1189365180,
                  "color": "#6a041d"
              },
              {
                  "name": "Illinois",
                  "y": 974438595,
                  "color": "#6a041d"
              },
              {
                  "name": "Louisiana",
                  "y": 572755348,
                  "color": "#6a041d"
              },
              {
                  "name": "Washington",
                  "y": 365037131,
                  "color": "#6a041d"
              },
              {
                  "name": "California",
                  "y": 215056644,
                  "color": "#6a041d"
              },
              {
                  "name": "Ohio",
                  "y": 202597477,
                  "color": "#6a041d"
              },
              {
                  "name": "Pennsylvania",
                  "y": 186373874,
                  "color": "#6a041d"
              },
              {
                  "name": "Michigan",
                  "y": 131114017,
                  "color": "#6a041d"
              },
              {
                  "name": "Alabama",
                  "y": 3959499,
                  "color": "#F5B841"
              }
          ]
      },
      {
          "name": "uranium",
          "id": "uranium",
          "data": [
              {
                  "name": "Illinois",
                  "y": 224997330,
                  "color": "#6a041d"
              },
              {
                  "name": "Missouri",
                  "y": 29412008,
                  "color": "#6a041d"
              },
              {
                  "name": "Indiana",
                  "y": 22787709,
                  "color": "#6a041d"
              },
              {
                  "name": "Massachusetts",
                  "y": 19122873,
                  "color": "#6a041d"
              },
              {
                  "name": "Georgia",
                  "y": 2665091,
                  "color": "#6a041d"
              },
              {
                  "name": "New Jersey",
                  "y": 2089157,
                  "color": "#6a041d"
              },
              {
                  "name": "California",
                  "y": 1946682,
                  "color": "#6a041d"
              },
              {
                  "name": "Washington",
                  "y": 1106632,
                  "color": "#6a041d"
              },
              {
                  "name": "Florida",
                  "y": 1099849,
                  "color": "#6a041d"
              },
              {
                  "name": "Wyoming",
                  "y": 1078006,
                  "color": "#6a041d"
              },
              {
                  "name": "Alabama",
                  "y": 7248,
                  "color": "#F5B841"
              }
          ]
      }
  ]
}
