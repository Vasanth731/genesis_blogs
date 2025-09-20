/*
function sayHello() {
    alert("Welcome to your GitHub-hosted site!");
}
*/


const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownLinks = dropdownMenu.querySelectorAll("a");

// Dropdown toggles only when menu icon is clicked
menuIcon.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
});

// Hide dropdown when any link inside it is clicked
dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });
});






