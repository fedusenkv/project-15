(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prod-open]'),
    closeModalBtn: document.querySelector('[data-modal-prod-close]'),
    modal: document.querySelector('[data-prod-modal]'),
    body: document.querySelector('vsc-initialized'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('.no-scroll');
  }
})();
