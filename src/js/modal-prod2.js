(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-prod-open2]'),
    closeModalBtn: document.querySelector('[data-modal-prod-close2]'),
    modal: document.querySelector('[data-prod-modal2]'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
