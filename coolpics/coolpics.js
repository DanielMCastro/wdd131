function MenuButton() {
  var moreText = document.getElementById("MenuOptions");
  var btnText = document.getElementById("button");
  var MenuOptions = document.getElementsByTagName("h3")

  if (moreText.style.display === "none") {
    btnText.innerHTML = "-Menu-";
    moreText.style.display = "inline";
  }

  else {
    moreText.style.display = 'none';
    btnText.innerHTML = "Menu";
  }
}