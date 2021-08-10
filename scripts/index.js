import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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

const container = document.querySelector('.elements__list');
const itemTemplate = document.querySelector('.template-elements');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__subtitle');
const addButton = profile.querySelector('.profile__add-button');

//popups
const popupEdit = document.querySelector('.popup_type_edit');
const popupCreate = document.querySelector('.popup_type_create');
const popupView = document.querySelector('.popup_type_view');

//popups buttons
const closeBtnEdit = popupEdit.querySelector('.popup__close-button');
const closeBtnCreate = popupCreate.querySelector('.popup__close-button');
const closeBtnView = popupView.querySelector('.popup__close-button');

//popups elements
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewCaption = popupView.querySelector('.popup__caption');


//popups inputs
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');
const placeInput = popupCreate.querySelector('.popup__input_value_place');
const linkInput = popupCreate.querySelector('.popup__input_value_link');

//объект со значениями инпутов
const itemData = {
  name: " ",
  link: " "
}

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

const validationFormProfile = new FormValidator(validationConfig, formProfile);
const validationFormCard = new FormValidator(validationConfig, formCard);

const disableSubmitButton = (form) => {
  const buttonElement = form.querySelector('.popup__submit-button');
  buttonElement.classList.add('popup__submit-button_inactive');
  buttonElement.setAttribute('disabled', 'disabled');
}

function renderCards(data) {
  const card = new Card(data, itemTemplate);
  container.prepend(card.getCard());
}

initialCards.forEach((data) => {
  const card = new Card(data, itemTemplate);
  container.append(card.getCard());
});

const handleEsc = (evt) => {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') {
    closePopup(activePopup);
  }
}

const overlayClose = (evt) => {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.target.classList.contains('popup')) {
    closePopup(activePopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEsc);
  popup.addEventListener('mousedown', overlayClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEsc);
  popup.removeEventListener('mousedown', overlayClose);
}
//самому смекалочки не хватило)
//благодарю за исчерпыващие комментарии! приятно иметь дело =)

function createCard() {
  itemData.name = placeInput.value;
  itemData.link = linkInput.value;
  renderCards(itemData);
  resetAddCardPopup();
  closePopup(popupCreate);
  disableSubmitButton(formCard);
}

function resetAddCardPopup() {
  formCard.reset();
}

function submitEditForm() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

editButton.addEventListener('click', () => {
  setInputsValue();
  openPopup(popupEdit);
});

function setInputsValue () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

setInputsValue();

addButton.addEventListener('click', () => {
  // resetAddCardPopup(popupCreate);
  openPopup(popupCreate);
});

closeBtnEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});

closeBtnCreate.addEventListener('click', () => {
  closePopup(popupCreate);
});

closeBtnView.addEventListener('click', () => {
  closePopup(popupView);
});

popupEdit.addEventListener('submit', submitEditForm);

popupCreate.addEventListener('submit', createCard);

validationFormProfile.enableValidation();
validationFormCard.enableValidation();

export { openPopup, popupView, popupViewImage, popupViewCaption };
