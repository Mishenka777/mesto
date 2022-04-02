export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupExit = this._popup.querySelector('.popup__exit');
    this._saveButton = this._popup.querySelector('.popup__save')
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  renderLoading(loading) {
    if (loading) {
      this._saveButton.textContent = "Сохранение...";
    }
    else {
      this._saveButton.textContent = "Сохранить";
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
    this._popupExit.addEventListener('click', () => {
      this.close()
    });
  }
}
