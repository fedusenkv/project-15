(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prod-open1]'),
    closeModalBtn: document.querySelector('[data-modal-prod-close1]'),
    modal: document.querySelector('[data-prod-modal1]'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
