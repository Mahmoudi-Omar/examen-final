// Nav
const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

const navLeft = nav.getBoundingClientRect().left;
openBtn.addEventListener("click", () => {
  if (navLeft < 0) {
    navigation.classList.add("show");
    nav.classList.add("show");
    document.body.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  if (navLeft < 0) {
    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  }
});




// preloader
window.addEventListener("load", () => {
    const loader = document.getElementById("pre-loader");
    setTimeout(() => {
      loader.classList.add("hide");
    }, 2000);
  });

// PopUp
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.add("show");
  }, 5000);
});