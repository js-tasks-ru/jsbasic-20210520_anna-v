function hideSelf() {
  let button = document.querySelector(".hide-self-button");
  button.onclick = function () {
    return (button.hidden = true);
  };
}
