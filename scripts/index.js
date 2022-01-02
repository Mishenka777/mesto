let names = document.querySelector('.profile__title');
let jobs = document.querySelector('.profile__text');
let buttonEditProfile = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container')
let popupJob = document.querySelector('.popup__text_type_job')
let popupName = document.querySelector('.popup__text_type_name')
let buttonExitEditProfile = document.querySelector('.popup__exit');
let openedPopup = 'popup_opened';

buttonEditProfile.addEventListener('click', openPopup); 

function openPopup () {
  popupName.value = names.textContent;
  popupJob.value = jobs.textContent;
  popup.classList.add(openedPopup);
}

buttonExitEditProfile.addEventListener('click', closePopup);

function closePopup () {
  popup.classList.remove(openedPopup);
};

function popupPush(evt) {
  evt.preventDefault();
  names.textContent = popupName.value;
  jobs.textContent = popupJob.value;
  closePopup ();
}

form.addEventListener('submit', popupPush);


