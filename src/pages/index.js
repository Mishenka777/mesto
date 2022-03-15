import './../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Сard.js";
import Section from "../components/Section.js";
import { 
  initialCards,
  buttonEditProfile,
  buttonAddElement,
  formProfile,
  newCardForm,
  popupJob,
  popupName,
  person,
  job,
  formsValidateConfig,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
const formEditValidator = new FormValidator(formsValidateConfig, formProfile);
const cardAddFormValidator = new FormValidator(formsValidateConfig, newCardForm);
const popupElement = new PopupWithForm(
  '.popup_element',
  (data) => {
     const newCard = {
      name: data.title,
      link: data.image
     }
     cardList.addItem(renderNewCard(newCard));
     popupElement.close()
  }
)
const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(renderNewCard(data));
  }},
  '.elements'
);
const openPopupImage = new PopupWithImage('.popup_image');
const userInfo = new UserInfo({ profileName: person, profileJob: job });
const popupProfile = new PopupWithForm(
  '.popup_profile',
  (data) => {
     userInfo.setUserInfo(data);
     popupProfile.close()
     }
)

function handleCardClick(name, link) {
  openPopupImage.open(name, link)
}

function renderNewCard(data) {
  return new Card(data, '#element', handleCardClick).generateCard();
};

buttonAddElement.addEventListener('click', () => {
  cardAddFormValidator.setSubmitButtonState();
  popupElement.open();
});

buttonEditProfile.addEventListener('click', () => {
  const userDescription = userInfo.getUserInfo();
   popupName.value = userDescription.human;
   popupJob.value = userDescription.job
   popupProfile.open();
});

openPopupImage.setEventListeners();
cardList.renderItems();
popupElement.setEventListeners();
popupProfile.setEventListeners();
formEditValidator.enableValidation();
cardAddFormValidator.enableValidation();