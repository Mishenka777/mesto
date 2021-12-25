let names = document.querySelector('.profile__title');
let jobs = document.querySelector('.profile__text');
let buttonEditProfile = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container')
let popupJob = document.querySelector('.popup__job')
let popupName = document.querySelector('.popup__name')
let buttonExitEditProfile = document.querySelector('.popup__exit');
let openedPopup = 'popup_opened';
let useLike = document.querySelectorAll('.element__button');
let likeWorked = 'element__button_black';

for (let i = 0; i < useLike.length; i ++) {
  useLike[i].addEventListener('click', function () {
  useLike[i].classList.toggle(likeWorked);
  }) 
};

buttonEditProfile.addEventListener('click', function () {
  openPopup ();
});

function openPopup () {
  popup.classList.add(openedPopup);
  popupName.value = names.textContent;
  popupJob.value = jobs.textContent;
}

buttonExitEditProfile.addEventListener('click', function () {
  closePopup (); 
});

function closePopup () {
  popup.classList.remove(openedPopup);
};

function popupPush(evt) {
  evt.preventDefault();
  names.textContent = popupName.value;
  jobs.textContent = popupJob.value;
  popup.classList.remove('popup_opened');
}

form.addEventListener('submit', popupPush);


