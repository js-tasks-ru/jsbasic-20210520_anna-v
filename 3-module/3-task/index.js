function camelize(str) {
  let arr = str.split("-");
  let toUpperCase = arr.map((word, index) =>
    index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  return toUpperCase.join("");
}
