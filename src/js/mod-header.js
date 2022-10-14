(() => {
  const refs = {
    openModalBtn: document.querySelector('[chack-modal-open]'),
    openModal1Btn: document.querySelector('[chack-modal-open1]'),
    closeModalBtn: document.querySelector('[chack-modal-close]'),
    closeModal2Btn: document.querySelector('[chack-2]'),
    modal: document.querySelector('[chack-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModal1Btn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModal2Btn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
