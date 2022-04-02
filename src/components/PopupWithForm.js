import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._popupForm = this._popup.querySelector('.popup__container');
    this._inputList = this._popup.querySelectorAll('.popup__text');
    this._saveButton = this._popup.querySelector('.popup__save')
  }

  _getInputValues() {
    this._inputValue = {};
    this._inputList.forEach((input) => {
      this._inputValue[input.name] = input.value;
    });
    return this._inputValue;
  }

  renderLoading(loading) {
    if (loading) {
      this._saveButton.textContent = "Сохранение...";
    }
    else {
      this._saveButton.textContent = "Сохранить";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}