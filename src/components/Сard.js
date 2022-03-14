export default class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick(this._name, this._link);
    });
  }
}
