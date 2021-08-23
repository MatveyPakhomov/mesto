import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'; // добавьте импорт главного файла стилей
import PopupWithImage from '../components/PopupWithImage.js';


//я не очень понимаю, как избавиться от колхоза с переименованием этого массива =(
//нужен совет
const initialCards = [
  {
    popup_input_title: 'Архыз',
    popup_input_subtitle: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    popup_input_title: 'Челябинская область',
    popup_input_subtitle: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    popup_input_title: 'Иваново',
    popup_input_subtitle: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    popup_input_title: 'Камчатка',
    popup_input_subtitle: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    popup_input_title: 'Холмогорский район',
    popup_input_subtitle: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    popup_input_title: 'Байкал',
    popup_input_subtitle: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const container = document.querySelector('.elements__list');
const itemTemplate = document.querySelector('.template-elements');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__subtitle');
const addButton = profile.querySelector('.profile__add-button');

//popups
const popupEdit = document.querySelector('.popup_type_edit');

//popups inputs
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');

//формы для валидации
const formProfile = document.querySelector('.popup__form_type_edit');
const formCard = document.querySelector('.popup__form_type_create');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

function createCard(data) {
  const card = new Card (data, itemTemplate, handleCardClick);
  return card.getCard();
}

//селекторы попапов
const popupPreview = '.popup_type_view';
const popupCard = '.popup_type_create';
const popupProfile = '.popup_type_edit';

const handleCardClick = (name, link) => {
  const popupWithImage = new PopupWithImage(popupPreview);
  popupWithImage.open(name, link);
}

//создание новой карточки
const newCard = new PopupWithForm(popupCard, (data) => {
  const newCardElement = createCard(data);
  defaultCardList.addItemPrepend(newCardElement);
  newCard.close();
  formCard.reset();
  disableSubmitButton(formCard);
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
      defaultCardList.addItem(cardElement);
    }
  },
  container
);

defaultCardList.renderItems();

const disableSubmitButton = (form) => {
  const buttonElement = form.querySelector('.popup__submit-button');
  buttonElement.classList.add('popup__submit-button_inactive');
  buttonElement.setAttribute('disabled', 'disabled');
}

editButton.addEventListener('click', () => {
  popupProfileForm.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addButton.addEventListener('click', () => {
  newCard.open();
});

const validationFormProfile = new FormValidator(validationConfig, formProfile);
const validationFormCard = new FormValidator(validationConfig, formCard);

validationFormProfile.enableValidation();
validationFormCard.enableValidation();
