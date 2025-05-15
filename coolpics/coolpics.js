function MenuButton() {
  var moreText = document.getElementById("MenuOptions");
  var btnText = document.getElementById("button");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "-Menu-";
    moreText.style.display = "block";
  }

  else {
    moreText.style.display = 'none';
    btnText.innerHTML = "Menu";
  }
}