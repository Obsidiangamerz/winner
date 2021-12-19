// creating the variables

const navBtn = document.getElementById("nav-btn")
const navClose = document.getElementById("nav-close")
const navbar = document.getElementById("navbar")

// code to show the navbar

navBtn.addEventListener("click", () => {
    navbar.classList.add("shownav");
});


// code to remove the navbar

navClose.addEventListener("click", () => {
    navbar.classList.remove("shownav");
});