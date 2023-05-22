let arr = [53957, 10, 10458780, 0, 0, 30663023, 0];

const roundOffTo = (num, factor) => {
  const quotient = num / 100000;
  const res = Math.round(quotient) * factor;
  return res;
};

function removeZeroes(arr) {
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
  console.log(increasedMax);

  let roundedMax = roundOffTo(increasedMax, 100000);
  console.log(roundedMax);
  return roundedMax;
}

removeZeroes(arr);
