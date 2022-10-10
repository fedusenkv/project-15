(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-location-open]"),
    closeModalBtn: document.querySelector("[data-franchise-close]"),
    modal: document.querySelector("[data-franchise-location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
