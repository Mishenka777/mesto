import './../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Сard.js";
import Section from "../components/Section.js";
import {
  buttonEditProfile,
  buttonAddElement,
  formProfile,
  newCardForm,
  popupJob,
  popupName,
  person,
  job,
  formsValidateConfig,
  avatar,
  buttonChangeAvatar,
  avatarForm
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js'
let userId
const formEditValidator = new FormValidator(formsValidateConfig, formProfile);
const cardAddFormValidator = new FormValidator(formsValidateConfig, newCardForm);
const avatarFormValidator = new FormValidator(formsValidateConfig, avatarForm);
const openPopupImage = new PopupWithImage('.popup_image');
const popupConfirm = new PopupWithConfirm('.popup_confirm');
const userInfo = new UserInfo({ profileName: person, profileJob: job, profileAvatar: avatar });
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'd617258f-158a-41bb-8c66-f8b8f4af6cc1',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getProfileData(), api.getInitialCards()])
  .then(([data, cards]) => {
    userInfo.setUserInfo(data.name, data.about);
    userInfo.setAvatar(data.avatar);
    userId = data._id;
    newSection.renderItems(cards)
  })

const newSection = new Section({
  renderer: (data) => {
    newSection.addItem(renderNewCard(data));
  }
},
  '.elements'
)

const popupAvatar = new PopupWithForm('.popup_avatar',
  (avatar) => {
    popupAvatar.renderLoading(true);
    api.setAvatar(avatar)
      .then((res) => {
        userInfo.setAvatar(res.avatar);
        popupAvatar.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => popupAvatar.renderLoading(false))
  }
)

const popupElement = new PopupWithForm(
  '.popup_element',
  (data) => {
    popupElement.renderLoading(true);
    api.addCard(data.name, data.link)
      .then((data) => {
        newSection.addItem(renderNewCard(data))
        popupElement.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => popupElement.renderLoading(false))
  }
)

const popupProfile = new PopupWithForm('.popup_profile',
  (data) => {
    popupProfile.renderLoading(true);
    const { human, job } = data
    api.setProfileData(human, job)
      .then(() => {
        userInfo.setUserInfo(human, job);
        popupProfile.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => popupProfile.renderLoading(false))
  }
)


function renderNewCard(data) {
  const newCard = new Card(
    data,
    handleCardClick,
    '#element',
    (id) => {
      if (newCard.isLike()) {
        api.deleteLike(id)
          .then(res => {
            newCard.setLikes(res.likes)
          })
          .catch(err => console.log(`Ошибка: ${err}`))
      } else {
        api.addLike(id)
          .then(res => {
            newCard.setLikes(res.likes)
          })
          .catch(err => console.log(`Ошибка: ${err}`))
      }
    },
    userId,
    () => {
      popupConfirm.open();
      popupConfirm.changeSubmit(() => {
        api.deleteCard(data._id)
          .then(() => {
            newCard.deleteCard();
            popupConfirm.close();
          })
          .catch(err => console.log(`Ошибка: ${err}`))
      })
    },
  );

  const cardElement = newCard.generateCard()

  return cardElement;
}

function handleCardClick(name, link) {
  openPopupImage.open(name, link)
}

buttonAddElement.addEventListener('click', () => {
  cardAddFormValidator.setSubmitButtonState();
  popupElement.open();
});

buttonEditProfile.addEventListener('click', () => {
  popupName.value = userInfo.getUserInfo().human;
  popupJob.value = userInfo.getUserInfo().job
  popupProfile.open();
});

buttonChangeAvatar.addEventListener('click', () => {
  avatarFormValidator.setSubmitButtonState();
  popupAvatar.open();
});

popupConfirm.setEventListeners();
openPopupImage.setEventListeners();
popupElement.setEventListeners();
popupAvatar.setEventListeners();
popupProfile.setEventListeners();
avatarFormValidator.enableValidation();
formEditValidator.enableValidation();
cardAddFormValidator.enableValidation();
