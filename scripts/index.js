import { FormValidator } from "./FormValidator.js";
import { Card } from "./Сard.js";

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
const buttonElementExit = popupElementBlock.querySelector('.popup__exit');
const buttonProfileExit = popupProfileBlock.querySelector('.popup__exit');
const buttonImageExit = popupImageBlock.querySelector('.popup__exit');
const openedPopup = 'popup_opened';
const elementSection = document.querySelector('.elements');
const overlayList = document.querySelectorAll('.popup');
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
const formsValidateConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  inputErrorClass: 'popup__text_state_invalid',
  submitButtonSelector: '.popup__save',
  submitButtonErrorClass: 'popup__save_invalid',
};
const editFormValidator = new FormValidator(formsValidateConfig, formProfile);
const addCardFormValidator = new FormValidator(formsValidateConfig, formElement);

function closePopupEsc(evt) { 
  if (evt.key === 'Escape') {
    const popupActiv = document.querySelector('.popup_opened');
    closePopup(popupActiv)
  }
}

function openPopup(popup) {
  popup.classList.add(openedPopup);
  document.addEventListener('keydown', closePopupEsc); 
};

function closePopup(popup) {
  popup.classList.remove(openedPopup);
  document.removeEventListener('keydown', closePopupEsc); 
};

function openPopupElement () {
  popupTitle.value = "";
  popupImage.value = "";
  openPopup(popupElementBlock);
  addCardFormValidator.setSubmitButtonState(formElement);
};

function openPopupProfile () {
  popupName.value = person.textContent;
  popupJob.value = job.textContent;
  openPopup(popupProfileBlock);
  editFormValidator.setSubmitButtonState(formProfile);
};

export function openPopupImage () {
  openPopup(popupImageBlock);
}

function handlePopupPush(evt) {
  evt.preventDefault();
  person.textContent = popupName.value;
  job.textContent = popupJob.value;
  closePopup(popupProfileBlock);
};

function handleFormElementPush (evt){
  evt.preventDefault();
  const newCard = {
    name: popupTitle.value,
    link: popupImage.value,
  };
  renderNewCard(newCard);
  closePopup(popupElementBlock);
}

function renderNewCard(date) {
  const card = new Card(date, '#element').generateCard();
  elementSection.prepend(card);
};

initialCards.forEach((item) => {
  const element = {
    name: item.name,
    link: item.link
  };
  renderNewCard(element);
});

overlayList.forEach((data) => {
  data.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains(openedPopup)) {
      closePopup(evt.target);
    }
  })
});

formProfile.addEventListener('submit', handlePopupPush);
formElement.addEventListener('submit', handleFormElementPush);

buttonProfileExit.addEventListener('click', () => {
  closePopup(popupProfileBlock);
});
buttonElementExit.addEventListener('click', () => {
  closePopup(popupElementBlock);
});
buttonImageExit.addEventListener('click', () => {
  closePopup(popupImageBlock);
});
buttonEditProfile.addEventListener('click', openPopupProfile);
buttonAddElement.addEventListener('click', openPopupElement);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();