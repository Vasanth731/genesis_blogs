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

// Contribute modal (only present on the home page)
const contributeIcon = document.getElementById("contributeIcon");
const contributeModal = document.getElementById("contributeModal");
const contributeModalClose = document.getElementById("contributeModalClose");

if (contributeIcon && contributeModal) {
  contributeIcon.addEventListener("click", () => {
    contributeModal.classList.add("active");
  });

  contributeModalClose.addEventListener("click", () => {
    contributeModal.classList.remove("active");
  });

  contributeModal.addEventListener("click", (e) => {
    if (e.target === contributeModal) {
      contributeModal.classList.remove("active");
    }
  });
}

// Fade scroll-fade text in as its panel enters view, out as it leaves
const scrollFadeEls = document.querySelectorAll(".scroll-fade");

if (scrollFadeEls.length) {
  const scrollFadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
      });
    },
    { threshold: 0.5 }
  );

  scrollFadeEls.forEach((el) => scrollFadeObserver.observe(el));
}






