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
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._cardLike = this._element.querySelector('.element__button')
    this._cardLike.addEventListener('click', () => {
      this._cardLike.classList.toggle('element__button_active');
      });
    this._cardDelete = this._element.querySelector('.element__delete')
    this._cardDelete.addEventListener('click', () => {
      this._element.remove();
      this._element = null;
      });
    this._cardImage = this._element.querySelector('.element__photo')
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
