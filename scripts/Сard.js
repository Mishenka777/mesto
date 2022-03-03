import { openPopupImage } from "./index.js";
export class Card {
  constructor(data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardImage = document.querySelector('.popup__image');
    this._cardTitle = document.querySelector('.popup__image-title');
  }
  
  _getTemplate() {
    const templateElement = document.querySelector(this._cardTemplateSelector).content;
    return templateElement.querySelector('.element').cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this.useImage.src = this._link;
    this.useImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }

  _methodCardImage() {
     this._cardTitle.textContent = this._name;;
     this._cardImage.src = this._link;
     this._cardImage.alt = this._name;
     openPopupImage();
  }

  _setEventListeners() {
    this.uselike = this._element.querySelector('.element__button')
    this.uselike.addEventListener('click', () => {
      this.uselike.classList.toggle('element__button_active');
      });
    this.useDelete = this._element.querySelector('.element__delete')
    this.useDelete.addEventListener('click', () => {
      this._element.remove();
      this._element = null;
      });
    this.useImage = this._element.querySelector('.element__photo')
    this.useImage.addEventListener('mousedown', () => {
      this._methodCardImage();
    });
  }
}
