// loader.js
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("face-scanner-loader");
    const overlay = document.getElementById("overlay-scan");

    if (loader) {
      loader.style.transition = "opacity 2s ease";
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
    }

    if (overlay) {
      overlay.style.transition = "opacity 2s ease";
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    }
  }, 3500);
});