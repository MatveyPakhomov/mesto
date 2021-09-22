import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'; // добавьте импорт главного файла стилей
import PopupWithImage from '../components/PopupWithImage.js';
import { validationConfig } from '../utils/constants.js';
import Api from '../components/Api.js';
import PopupWithDelete from '../components/PopupWithDelete.js';

const container = document.querySelector('.elements__list');
const itemTemplate = document.querySelector('.template-elements');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__subtitle');
const addButton = profile.querySelector('.profile__add-button');
const deleteButton = document.querySelector('.element__garbage-button');
const updateButton = profile.querySelector('.profile__avatar_edit-button');
const profileAvatar = profile.querySelector('.profile__avatar');

//popups
const popupEdit = document.querySelector('.popup_type_edit');

//popups input
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');

//формы для валидации
const formProfile = document.querySelector('.popup__form_type_edit');
const formCard = document.querySelector('.popup__form_type_create');
const formUpdateAvatar = document.querySelector('.popup__form_type_update-avatar');

function createCard(data) {
  const card = new Card (data, itemTemplate, { handleCardClick, handleDeleteClick, handleLikeClick });
  return card.getCard();
}

//селекторы попапов
const popupPreview = '.popup_type_view';
const popupCard = '.popup_type_create';
const popupProfile = '.popup_type_edit';
const popupDelete = '.popup_type_delete';
const popupAvatar = '.popup_type_update-avatar';

//открытие попапа превью
const handleCardClick = (name, link) => {
  const popupWithImage = new PopupWithImage(popupPreview);
  popupWithImage.open(name, link);
}

//открытие попапа удаления
const handleDeleteClick = () => {
  const popupWithDelete = new PopupWithDelete(popupDelete);
    popupWithDelete.open();
}

//постановка/снятие лайка
const handleLikeClick = () => {

}

//карточки с сервера
const defaultCardList = new Section({
  renderer: (data) => {
    const cardElement = createCard(data);
    const likeCounter = cardElement.querySelector('.element__like-counter');
    defaultCardList.appendItem(cardElement);
    likeCounter.textContent = data.likes.length;
  }
}, container);

//создание новой карточки
const popupAddCard = new PopupWithForm(popupCard, (data) => {
  const newCardElement = createCard(data);
  api.addNewCard({
    name: data.name,
    link: data.link
  })
    .catch(result => console.log(result));
  defaultCardList.prependItem(newCardElement);
  popupAddCard.close();
  formCard.reset();
});

//обновление аватара
const popupUpdateAvatar = new PopupWithForm(popupAvatar, (data) => {
  userInfo.setUserAvatar(data);
  api.updateAvatar({
    avatar: data.avatar
  })
    .catch(result => console.log(result));
  popupUpdateAvatar.close();
  formUpdateAvatar.reset();
});

//редактирование профиля
const userInfo = new UserInfo(profileName, profileJob, profileAvatar);
const popupProfileForm = new PopupWithForm(
  popupProfile,
  (data) => {
    userInfo.setUserInfo(data);
    api.editProfile({
      name: data.name,
      about: data.link
    })
      .catch(result => console.log(result));
    popupProfileForm.close();
});

//открытие попапа редактирования
editButton.addEventListener('click', () => {
  popupProfileForm.open();
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;
  validationFormProfile.resetValidation();
});

//открытие попапа с карточкой
addButton.addEventListener('click', () => {
  popupAddCard.open();
  validationFormCard.resetValidation();
});

//открытие попапа обновления аватара
updateButton.addEventListener('click', () => {
  popupUpdateAvatar.open();
  validationFormAvatar.resetValidation();
})

const validationFormProfile = new FormValidator(validationConfig, formProfile);
const validationFormCard = new FormValidator(validationConfig, formCard);
const validationFormAvatar = new FormValidator(validationConfig, formUpdateAvatar);

//включение валидации при загрузке страницы
validationFormProfile.enableValidation();
validationFormCard.enableValidation();
validationFormAvatar.enableValidation();

//работа с API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: 'df65ab57-8f59-4984-a17c-2f08d584d2db',
    'Content-Type': 'application/json'
  }
});

api.getProfileInfo()
  .then(data => {
    console.log(data)
    profileName.textContent = data.name;
    profileJob.textContent = data.about;
    profileAvatar.src = data.avatar;
  })
  .catch(result => console.log(result));

api.getInitialCards()
  .then(result => {
    defaultCardList.renderItems(result);
    console.log(result)
  })
  .catch(result => console.log(result));
