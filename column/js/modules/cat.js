const createCommodityRanking = (values, commodity) => {
  let commodityRanking = values
    .sort((a, b) => a[commodity] - b[commodity])
    .reverse();

  return commodityRanking;
};
const findStateRanking = (stateName, commodityRanking) => {
  return commodityRanking.findIndex((x) => x.state === stateName) + 1;
};
export { createCommodityRanking, findStateRanking };

// get allData from bar.js
