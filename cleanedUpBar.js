let commodityColumnHeadings = [
  "coalExports",
  "crudeOilExports",
  "electricityExports",
  "fuelEthanolExports",
  "naturalGasExports",
  "rppExports",
  "uraniumExports",
];

export const makeCommodityNames = (commodityColumnHeadings) => {
  let commodityNames = [];

  commodityColumnHeadings.forEach((element) => {
    // process ID to get formatted name for Names list
    let processedCommodity = element.slice(0, -7).split(/(?=[A-Z])/);
    let word =
      processedCommodity[0].charAt(0).toUpperCase() +
      processedCommodity[0].slice(1);
    processedCommodity[0] = word;

    let final = processedCommodity.join(" ");
    console.log(final);
    commodityNames.push(final);
  });
};

makeCommodityNames(commodityColumnHeadings);
