document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", () => {
      navContainer.classList.toggle("active");
    });

    // Close nav when any link is clicked (good for mobile)
    navContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navContainer.classList.remove("active");
      });
    });
  }
});
