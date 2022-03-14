export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupExit = popupSelector.querySelector('.popup__exit');
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  setEventListeners() {
    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close(evt.target);
      }
    });
    this._popupExit.addEventListener('click', () => {
      this.close()
    });
  }
}
