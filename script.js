const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("header nav ul");
hamburgerMenu.addEventListener("click", (e) => {
    nav.classList.toggle("show");
});
nav.addEventListener("click", (e) => {
    nav.classList.remove("show");
});
