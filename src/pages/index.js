import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'; // добавьте импорт главного файла стилей
import PopupWithImage from '../components/PopupWithImage.js';
import {
  validationConfig,
  container,
  itemTemplate,
  editButton,
  profileName,
  profileJob,
  addButton,
  updateButton,
  profileAvatar,
  nameInput,
  jobInput,
  formProfile,
  formCard,
  formUpdateAvatar,
  popupPreview,
  popupCard,
  popupProfile,
  popupDelete,
  popupAvatar
} from '../utils/constants.js';
import Api from '../components/Api.js';
import PopupWithDelete from '../components/PopupWithDelete.js';

function createCard(data) {
  const card = new Card (data, itemTemplate, userId, { handleCardClick, handleDeleteClick, handleLikeClick });
  return card.getCard();
}

//карточки с сервера
const defaultCardList = new Section({
  renderer: (data) => {
    const cardElement = createCard(data);
    defaultCardList.appendItem(cardElement);
  }
}, container);

//создание новой карточки
const popupAddCard = new PopupWithForm(
  popupCard,
  (data) => {
    popupAddCard.renderLoading(true);
    api.addNewCard({
      name: data.name,
      link: data.link,
    })
      .then(res => {
        const newCardElement = createCard(res);
        defaultCardList.prependItem(newCardElement);
        popupAddCard.close();
        formCard.reset();
      })
      .catch(err => console.log(err))
      .finally(() => {
        popupAddCard.renderLoading(false);
      })
  }
);

//открытие попапа превью
const popupWithImage = new PopupWithImage(popupPreview);
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

//открытие попапа удаления
const popupWithDelete = new PopupWithDelete(popupDelete);
function handleDeleteClick(cardElement, cardId) {
  popupWithDelete.setDeleteHandler(()=> {
    popupWithDelete.renderLoading(true);
    api.deleteCard(cardId)
      .then(() => {
        cardElement.remove();
        popupWithDelete.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        popupWithDelete.renderLoading(false);
      })
  });
  popupWithDelete.open();
}

//постановка/снятие лайка
function handleLikeClick(cardId, thisCard) {
  if (thisCard.isLiked()) {
    api.unlikeCard(cardId)
      .then(res => {
        thisCard.removeLike(res);
      })
      .catch(err => console.log(err));
  } else {
    api.likeCard(cardId)
      .then(res => {
        thisCard.addLike(res);
      })
      .catch(err => console.log(err));
  }
}

//обновление аватара
const popupUpdateAvatar = new PopupWithForm(
  popupAvatar,
  (data) => {
    popupUpdateAvatar.renderLoading(true);
    api.updateAvatar({
      avatar: data.avatar
    })
      .then(res => {
        userInfo.setUserInfo(res);
        popupUpdateAvatar.close();
        formUpdateAvatar.reset();
      })
      .catch(err => console.log(err))
      .finally(() => {
        popupUpdateAvatar.renderLoading(false);
      });
  }
);

//редактирование профиля
const userInfo = new UserInfo(profileName, profileJob, profileAvatar);
const popupProfileForm = new PopupWithForm(
  popupProfile,
  (data) => {
    popupProfileForm.renderLoading(true);
    api.editProfile({
      name: data.name,
      about: data.link
    })
      .then(res => {
        userInfo.setUserInfo(res);
        popupProfileForm.close();
        formProfile.reset();
      })
      .catch(err => console.log(err))
      .finally(() => {
        popupProfileForm.renderLoading(false);
      });
  }
);

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

let userId;

api.getProfileInfo()
  .then(res => {
    userInfo.setUserInfo(res);
    userId = res._id
  })
  .then(() => {
    api.getInitialCards()
      .then(res => {
        defaultCardList.renderItems(res);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
