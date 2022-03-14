import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._popupForm = popupSelector.querySelector('.popup__container');
    this._inputList = popupSelector.querySelectorAll('.popup__text');
  }

  _getInputValues() {
    this._inputValue = {};
    this._inputList.forEach((input) => {
    this._inputValue[input.name] = input.value;
    });
    return this._inputValue;
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