const burgerBtn = document.querySelector("#burgerBtn");
const mobileModalMenu = document.querySelector("#mobileModalMenu");

function openMenu() {
  burgerBtn.classList.add("is-active");
  mobileModalMenu.classList.add("!left-0");
  fixedBody();
  burgerBtn.removeEventListener("click", openMenu);
  burgerBtn.addEventListener("click", closeMenu);
}

function closeMenu() {
  burgerBtn.classList.remove("is-active");
  mobileModalMenu.classList.remove("!left-0");
  unfixedBody();
  burgerBtn.removeEventListener("click", closeMenu);
  burgerBtn.addEventListener("click", openMenu);
}

function fixedBody() {
  document.body.classList.add("min-h-screen");
  document.body.classList.add("h-screen");
  document.body.classList.add("overflow-hidden");
}

function unfixedBody() {
  document.body.classList.remove("min-h-screen");
  document.body.classList.remove("h-screen");
  document.body.classList.remove("overflow-hidden");
}

burgerBtn.addEventListener("click", openMenu);
