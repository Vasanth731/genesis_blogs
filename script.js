/*
function sayHello() {
    alert("Welcome to your GitHub-hosted site!");
}
*/


const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownLinks = dropdownMenu.querySelectorAll("a");

function closeMenu() {
  menuIcon.classList.remove("active");
  dropdownMenu.classList.remove("active");
}

// Dropdown toggles only when menu icon is clicked
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});

// Hide dropdown when any link inside it is clicked
dropdownLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});






