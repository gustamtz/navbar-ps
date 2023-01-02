let button = document.querySelector("[data-mobile-menu]");
let mobileMenu = document.getElementById("mobile-menu");

button.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
