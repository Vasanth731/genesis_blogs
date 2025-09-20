/*
function sayHello() {
    alert("Welcome to your GitHub-hosted site!");
}
*/


const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle full-page dropdown when menu icon is clicked
menuIcon.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
});





