let arr = [29218687, 4282060548, 34297, 0, 0, 876221045, 18807432];

const roundOffTo = (num, factor) => {
  const quotient = num / 100000;
  const res = Math.round(quotient) * factor;
  return res;
};

const setExtremeMax = (arr) => {
  var i = arr.length;
  while (i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    }
  }

  arr.sort(function (a, b) {
    return a - b;
  });

  console.log("sorted", arr);
  console.log(arr[0]);
  // add 100k to arr[1] in case it's small
  let increasedMax = arr[0] + 100000;
  let roundedMax = roundOffTo(increasedMax, 100000);
  return roundedMax;
};
