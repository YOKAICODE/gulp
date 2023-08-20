const reserveFormEl = document.querySelector("#form-reserve");
const reserveTriggerEl = document.querySelector("#reserve-btn");
const closeModalBtn = document.querySelector(".close-form");
if (reserveTriggerEl) {
  function openReserveModal() {
    document.body.classList.add("min-h-screen", "h-screen", "overflow-hidden");
    reserveFormEl.parentElement.classList.remove("hidden");
    reserveFormEl.parentElement.classList.add("flex");
    closeModalBtn.addEventListener("click", closeReserveModal);
    reserveTriggerEl.removeEventListener("click", openReserveModal);
  }

  function closeReserveModal() {
    document.body.classList.remove(
      "min-h-screen",
      "h-screen",
      "overflow-hidden"
    );
    reserveFormEl.parentElement.classList.add("hidden");
    reserveFormEl.parentElement.classList.remove("flex");
    closeModalBtn.removeEventListener("click", closeReserveModal);
    reserveTriggerEl.addEventListener("click", openReserveModal);
  }

  reserveTriggerEl.addEventListener("click", openReserveModal);
}
