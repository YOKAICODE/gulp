const headerElement = document.querySelector(".header");
const bodyElement = document.body;

if (Boolean(bodyElement.dataset.headerBlack)) {
  headerElement.classList.add("bg-black");
} else {
  if (window.scrollY > 80) {
    headerElement.classList.add("bg-black", "shadow-xl");
  }
  window.onscroll = () => {
    if (window.scrollY > 80) {
      headerElement.classList.add("bg-black", "shadow-xl");
    } else {
      headerElement.classList.remove("bg-black", "shadow-xl");
    }
  };
}
