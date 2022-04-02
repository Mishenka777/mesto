export default class Card {
  constructor(data, handleCardClick, cardTemplateSelector, handleLikeClick, userId, handleCardDelete) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._userId = userId;
    this._id = data._id
    this._ownerId = data.owner._id
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {
    this._templateElement = document.querySelector(this._cardTemplateSelector).content;
    return this._templateElement.querySelector('.element').cloneNode(true);
  }

  isLike() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
    return userHasLikedCard
  }

  setLikes(newLikes) {
    this._likes = newLikes
    this._likeCountsElement.textContent = this._likes.length

    if (this.isLike()) {
      this._likeButton.classList.add('element__button_active')
    } else {
      this._likeButton.classList.remove('element__button_active')
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.element__button');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likeCountsElement = this._element.querySelector('.element__button-count');
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none'
    }

    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._deleteButton.addEventListener("click", () => {
      this._handleCardDelete(this._id)
    });
    this._cardImage = this._element.querySelector('.element__photo')
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
