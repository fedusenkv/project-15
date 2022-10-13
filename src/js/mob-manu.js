(() => {
  const refs = {
    openModalBtn: document.querySelector('[mob-open]'),
    closeModalBtn: document.querySelector('[mob-close]'),
    closeModal1Btn: document.querySelector('[mob-1]'),
    closeModal2Btn: document.querySelector('[mob-2]'),
    closeModal3Btn: document.querySelector('[mob-3]'),
    closeModal4Btn: document.querySelector('[mob-4]'),
    modal: document.querySelector('[bob-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModal1Btn.addEventListener('click', toggleModal);
  refs.closeModal2Btn.addEventListener('click', toggleModal);
  refs.closeModal3Btn.addEventListener('click', toggleModal);
  refs.closeModal4Btn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
