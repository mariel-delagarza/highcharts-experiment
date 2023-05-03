export const secondSort = (commodityList, allData) => {
  let stateRankings = {};
  console.log(commodityList);

  // need a copy so we don't mutate original dat

  for (let i = 0; i < commodityList.length; i++) {
    let allDataCopy = JSON.parse(JSON.stringify(allData));
    let rankingValues = allDataCopy.sort((a, b) => a.data[i] - b.data[i]);
    let reverse = rankingValues.reverse();
    Object.assign((stateRankings[commodityList[i]] = reverse));
    allDataCopy = "";
    rankingValues = "";
    reverse = "";
  }

  console.log(stateRankings);
};

/* --------------------Rank States by Commodity ----------------------- */
const sortStatesByCommodity = (commodity) => {
  let index = commodityList.findIndex((x) => x === commodity);
  // need a copy so we don't mutate original data
  let allDataCopy = JSON.parse(JSON.stringify(allData));
  let commodityRanking = allDataCopy.sort(
    (a, b) => a.data[index] - b.data[index]
  );

  return commodityRanking.reverse();
};
