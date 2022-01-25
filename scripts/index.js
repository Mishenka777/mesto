const person = document.querySelector('.profile__title');
const job = document.querySelector('.profile__text');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');
const popupProfileBlock = document.querySelector('.popup_profile');
const popupElementBlock = document.querySelector('.popup_element');
const popupImageBlock = document.querySelector('.popup_image');
const formProfile = document.querySelector('.popup__container_type_profile');
const formElement = document.querySelector('.popup__container_type_element');
const popupJob = document.querySelector('.popup__text_type_job');
const popupName = document.querySelector('.popup__text_type_name');
const popupTitle = document.querySelector('.popup__text_type_title');
const popupImage = document.querySelector('.popup__text_type_image');
const buttonExit = document.querySelectorAll('.popup__exit');
const openedPopup = 'popup_opened';
const openPopup = document.querySelector('.popup_opened');
const elementSection = document.querySelector('.elements');
const templateElement = document.querySelector('#element').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function handleFormElementPush (evt){
  evt.preventDefault();
  const newCard = {
    name: popupTitle.value,
    link: popupImage.value
  };
  renderCard(newCard);
  closePopup();
}

formElement.addEventListener('submit', handleFormElementPush);
const popupImagephoto = document.querySelector('.popup__image');
const popupImagetitle = document.querySelector('.popup__image-title');

function createСard(cardItems) {
  const element = templateElement.querySelector('.element').cloneNode(true);
  const useLike = element.querySelector('.element__button');
  const deleteElement = element.querySelector('.element__delete');
  const cardPhoto = element.querySelector('.element__photo');
  const cardTitle = element.querySelector('.element__title');
  cardTitle.textContent = cardItems.name;
  cardPhoto.src = cardItems.link;
  cardPhoto.alt = cardItems.name;
  useLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button_active');
  });
  deleteElement.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
});

function openPopupImage () {
  popupImagetitle.textContent = cardItems.name;
  popupImagephoto.alt = cardItems.name;
  popupImagephoto.src = cardItems.link;
  openPopupArticle(popupImageBlock);
}

cardPhoto.addEventListener('click', openPopupImage);

return element;
}

function renderCard(cardItems) {
 const element = createСard(cardItems);
 elementSection.prepend(element);
}

initialCards.forEach(renderCard);

function openPopupArticle(popup) {
  popup.classList.add(openedPopup);
}

function openPopupElement () {
  popupTitle.value = "";
  popupImage.value = "";
  openPopupArticle(popupElementBlock)
};

function openPopupProfile () {
  popupName.value = person.textContent;
  popupJob.value = job.textContent;
  openPopupArticle(popupProfileBlock)
};

buttonExit.forEach(exit => {
  exit.addEventListener('click', closePopup)
})

function closePopup () {
  const openPopup = document.querySelector('.popup_opened')
  if(openPopup) {
    openPopup.classList.remove(openedPopup);
  }
};

function popupPush(evt) {
  evt.preventDefault();
  person.textContent = popupName.value;
  job.textContent = popupJob.value;
  closePopup ();
};

buttonEditProfile.addEventListener('click', openPopupProfile);
buttonAddElement.addEventListener('click', openPopupElement);
formProfile.addEventListener('submit', popupPush);
