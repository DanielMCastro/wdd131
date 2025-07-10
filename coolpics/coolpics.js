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

const modal = document.getElementById('modal');
const gallery = document.getElementById('gallery');
gallery.onclick = (event) => {
  const selected_image = event.target;
  if (selected_image.tagName === 'IMG'){
    const src = selected_image.getAttribute('src');
    const newImg = src.replace('-sm.jpeg', '-full.jpeg');
    modal.querySelector('img').setAttribute('src', newImg);
    modal.style.display = 'grid';
    modal.classList.remove('hide');
  }
};

const exit = document.getElementById("exit");
  exit.onclick = (event) => {modal.classList.add('hide');
  modal.style.display = 'none';
};
