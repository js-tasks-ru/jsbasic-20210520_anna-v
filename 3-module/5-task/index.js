function getMinMax(str) {
  let arr = str.replace(/\s+/g, ",").split(",");

  //split(",").join("").split(" ");
  let nums = arr.filter((arr) => {
    if (isFinite(arr) === true) return arr;
  });

  let getMin = nums.reduce((a, b) => {
    return Math.min(a, b);
  });

  let getMax = nums.reduce((a, b) => {
    return Math.max(a, b);
  });

  let result = {
    min: getMin,
    max: getMax,
  };

  return result;
}
