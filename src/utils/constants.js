export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAddElement = document.querySelector('.profile__add-button');
export const popupProfileBlock = document.querySelector('.popup_profile');
export const popupElementBlock = document.querySelector('.popup_element');
export const popupImageBlock = document.querySelector('.popup_image');
export const formProfile = document.querySelector('.popup__container_type_profile');
export const formElement = document.querySelector('.popup__container_type_element');
export const popupJob = document.querySelector('.popup__text_type_job');
export const popupName = document.querySelector('.popup__text_type_name');
export const popupTitle = document.querySelector('.popup__text_type_title');
export const popupImage = document.querySelector('.popup__text_type_image');
export const elementSection = document.querySelector('.elements');
export const person = document.querySelector('.profile__title');
export const job = document.querySelector('.profile__text');
export const formsValidateConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  inputErrorClass: 'popup__text_state_invalid',
  submitButtonSelector: '.popup__save',
  submitButtonErrorClass: 'popup__save_invalid',
};
export const initialCards = [
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