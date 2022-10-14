(() => {
  const refs = {
    openModalBtn: document.querySelector('[head-mod-open]'),
    closeModalBtn: document.querySelector('[head-mod-close]'),
    modal: document.querySelector('[head-mod-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
