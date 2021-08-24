import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'; // добавьте импорт главного файла стилей
import PopupWithImage from '../components/PopupWithImage.js';
import { initialCards, validationConfig } from '../utils/constants.js';

const container = document.querySelector('.elements__list');
const itemTemplate = document.querySelector('.template-elements');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__subtitle');
const addButton = profile.querySelector('.profile__add-button');

//popups
const popupEdit = document.querySelector('.popup_type_edit');

//popups input
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');

//формы для валидации
const formProfile = document.querySelector('.popup__form_type_edit');
const formCard = document.querySelector('.popup__form_type_create');

function createCard(data) {
  const card = new Card (data, itemTemplate, handleCardClick);
  return card.getCard();
}

//селекторы попапов
const popupPreview = '.popup_type_view';
const popupCard = '.popup_type_create';
const popupProfile = '.popup_type_edit';

//открытие попапа превью
const handleCardClick = (name, link) => {
  const popupWithImage = new PopupWithImage(popupPreview);
  popupWithImage.open(name, link);
}

//создание новой карточки
const popupAddCard = new PopupWithForm(popupCard, (data) => {
  const newCardElement = createCard(data);
  defaultCardList.prependItem(newCardElement);
  popupAddCard.close();
  formCard.reset();
});

//редактирование профиля
const userInfo = new UserInfo(profileName, profileJob);
const popupProfileForm = new PopupWithForm(popupProfile, (data) => {
    userInfo.setUserInfo(data);
    popupProfileForm.close();
});

//дефолтный набор карточек
const defaultCardList = new Section({
    items: initialCards,
    renderer: (data) => {
      const cardElement = createCard(data);
      defaultCardList.appendItem(cardElement);
    }
  },
  container
);

defaultCardList.renderItems();

//открытие попапа редактирования
editButton.addEventListener('click', () => {
  popupProfileForm.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validationFormProfile.resetValidation();
});

//открытие попапа с карточкой
addButton.addEventListener('click', () => {
  popupAddCard.open();
  validationFormCard.resetValidation();
});

const validationFormProfile = new FormValidator(validationConfig, formProfile);
const validationFormCard = new FormValidator(validationConfig, formCard);

//включение валидации при загрузке страницы
validationFormProfile.enableValidation();
validationFormCard.enableValidation();
