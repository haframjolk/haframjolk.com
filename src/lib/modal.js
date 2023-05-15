export default class Modal {
  /**
   * Creates a new Modal object
   *
   * @param {HTMLDialogElement} element Dialog element used by modal
   */
  constructor(element) {
    this.element = element;

    // Events
    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) {
        this.close();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  /**
   * Opens the modal
   */
  open() {
    this.element.showModal();
    document.body.classList.add('body--modal-open');
  }

  /**
   * Closes the modal
   */
  close() {
    this.element.close();
    document.body.classList.remove('body--modal-open');
  }
}
