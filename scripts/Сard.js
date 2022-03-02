import { openPopupImage } from "./index.js";
export class Card {
  constructor(data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
  }
  
  _getTemplate() {
    const templateElement = document.querySelector(this._cardTemplateSelector).content;
    return templateElement.querySelector('.element').cloneNode(true);
  }

  generateCard() {
    this.element = this._getTemplate();
    this._setEventListeners();
    this.useImage.src = this._link;
    this.useImage.alt = this._name;
    this.element.querySelector('.element__title').textContent = this._name;
    return this.element;
  }

  _methodCardImage() {
     this.cardImage = document.querySelector('.popup__image');
     this.cardTitle = document.querySelector('.popup__image-title').textContent = this._name;;
     this.cardImage.src = this._link;
     this.cardImage.alt = this._name;
     openPopupImage();
  }

  _setEventListeners() {
    this.uselike = this.element.querySelector('.element__button')
    this.uselike.addEventListener('click', () => {
      this.uselike.classList.toggle('element__button_active');
      });
    this.useDelete = this.element.querySelector('.element__delete')
    this.useDelete.addEventListener('click', () => {
      this.useDelete.closest('.element').remove();
      });
    this.useImage = this.element.querySelector('.element__photo')
    this.useImage.addEventListener('mousedown', () => {
      this._methodCardImage();
    });
  }
}
