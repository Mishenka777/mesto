const names = document.querySelector('.profile__title');
const jobs = document.querySelector('.profile__text');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddElement = document.querySelector('.profile__add-button');
const popupProfileBlock = document.querySelector('.popup_profile');
const popupElementBlock = document.querySelector('.popup_element');
const popupImageBlock = document.querySelector('.popup_image')
const formProfile = document.querySelector('.popup__container_type_profile')
const formElement = document.querySelector('.popup__container_type_element')
const popupJob = document.querySelector('.popup__text_type_job')
const popupName = document.querySelector('.popup__text_type_name')
const popupTitle = document.querySelector('.popup__text_type_title')
const popupImage = document.querySelector('.popup__text_type_image')
const buttonExit = document.querySelectorAll('.popup__exit');
const openedPopup = 'popup_opened';
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

function formElementPush (evt){
  evt.preventDefault();
  let newCard = {
  name: popupTitle.value,
  link:  popupImage.value
};

createСard(newCard);
closePopup();
}

formElement.addEventListener('submit', formElementPush);
let popupImagephoto = document.querySelector('.popup__image');
let popupImagetitle = document.querySelector('.popup__image-title');

function createСard(cardItems) {
const element = templateElement.querySelector('.element').cloneNode(true);
const useLike = element.querySelector('.element__button')
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
  popupImageBlock.classList.add(openedPopup);
  popupImagetitle.textContent = cardItems.name;
  popupImagephoto.alt = cardItems.name;
  popupImagephoto.src = cardItems.link;
}
cardPhoto.addEventListener('click', openPopupImage);
elementSection.prepend(element)
}

initialCards.forEach(createСard);

buttonEditProfile.addEventListener('click', openPopupProfile);
buttonAddElement.addEventListener('click', openPopupElement);

function openPopupElement () {
  popupElementBlock.classList.add(openedPopup);
  popupTitle.value = "";
  popupImage.value = "";
};

function openPopupProfile () {
  popupName.value = names.textContent;
  popupJob.value = jobs.textContent;
  popupProfileBlock.classList.add(openedPopup);
};

buttonExit.forEach(exit => {
  exit.addEventListener('click', closePopup)
})

function closePopup () {
  popupProfileBlock.classList.remove(openedPopup);
  popupElementBlock.classList.remove(openedPopup);
  popupImageBlock.classList.remove(openedPopup);
};

function popupPush(evt) {
  evt.preventDefault();
  names.textContent = popupName.value;
  jobs.textContent = popupJob.value;
  closePopup ();
};

formProfile.addEventListener('submit', popupPush);
