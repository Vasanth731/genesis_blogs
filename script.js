/*
function sayHello() {
    alert("Welcome to your GitHub-hosted site!");
}
*/


const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

menuIcon.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
});

// Close dropdown if clicked outside
window.addEventListener("click", function (e) {
  if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});




