import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSubmit = this._popup.querySelector('.popup__save');
  }

  changeSubmit(data) {
    this._submitHandler = data
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSubmit.addEventListener('click', this._submitHandler);
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    this._submitHandler();
  }
}
