window.onscroll = () => {
  scroll = document.documentElement.scrollTop;
  header = document.getElementById("header");
  if (scroll > 20) {
    header.classList.add("nav-move");
  } else if (scroll < 20) {
    header.classList.remove("nav-move");
  }
};

document.getElementById("btn-menu").addEventListener("click", mostrar_Menu);
menu = document.getElementById("header");
body = document.getElementById("container-all");
nav = document.getElementById("nav");
function mostrar_Menu() {
  menu.classList.toggle("move-content");
  body.classList.toggle("move-content");
  nav.classList.toggle("move-nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move-content");
    body.classList.remove("move-content");
    nav.classList.remove("move-nav");
  }
});

/* let lg = document.getElementById("logoCss");
let bg = document.getElementById("body");
function bodyCss() {
  if (lg.click) {
    bg.style.background = "#8da0a4";
  }
} */