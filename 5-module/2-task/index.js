function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  button.onclick = function () {
    let text = document.getElementById("text");

    if (text.hidden == false) {
      return (text.hidden = true);
    } else {
      return (text.hidden = false);
    }
  };
}
