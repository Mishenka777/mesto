import './../pages/index.css'
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Сard.js";
import Section from "../components/Section.js";
import { 
  initialCards,
  buttonEditProfile,
  buttonAddElement,
  popupProfileBlock,
  popupElementBlock,
  popupImageBlock,
  formProfile,
  formElement,
  popupJob,
  popupName,
  popupTitle,
  popupImage,
  elementSection,
  person,
  job,
  formsValidateConfig,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const formEditValidator = new FormValidator(formsValidateConfig, formProfile);
const cardAddFormValidator = new FormValidator(formsValidateConfig, formElement);
const popupElement = new PopupWithForm(
  popupElementBlock,
  () => {
     const newCard = {
      name: popupTitle.value,
      link: popupImage.value
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
  elementSection
);
const openPopupImage = new PopupWithImage(popupImageBlock);
const userInfo = new UserInfo({ profileName: person, profileJob: job });
const popupProfile = new PopupWithForm(
  popupProfileBlock,
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