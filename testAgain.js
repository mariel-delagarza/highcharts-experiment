let arr = [3488, 297, 0, 0, 0, 5911182, 1078006];

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

  return arr[1];
}

removeZeroes(arr);
