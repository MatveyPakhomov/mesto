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

const list = document.querySelector('.elements__list');
const itemTemplate = document.querySelector('.item_template').content;

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
const submitButton = popupCreate.querySelector('.popup__submit-button');
const popupViewImage = popupView.querySelector('.popup__image');

//popups inputs
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');
const placeInput = popupCreate.querySelector('.popup__input_value_place');
const linkInput = popupCreate.querySelector('.popup__input_value_link');

//popupView caption
const popupViewCaption = popupView.querySelector('.popup__caption');

initialCards.forEach(function (el) {
  const htmlElement = itemTemplate.querySelector('.element').cloneNode(true);

  htmlElement.querySelector('.element__title').textContent = el.name;
  htmlElement.querySelector('.element__image').src = el.link;
  htmlElement.querySelector('.element__image').alt = `Картинка: ${el.name}`;

  list.append(htmlElement);
  setEventListeners(htmlElement);
})

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function resetPopupFields() {
  nameInput.value = '';
  jobInput.value = '';
  placeInput.value = '';
  linkInput.value = '';
  popupViewImage.src = '';
  popupViewImage.alt = '';
  popupViewCaption.textContent = '';
}

function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  resetPopupFields();
  closePopup(popupEdit);
}

function renderCard(evt) {
  evt.preventDefault();

  const htmlElement = itemTemplate.querySelector('.element').cloneNode(true);

  htmlElement.querySelector('.element__title').textContent = placeInput.value;
  htmlElement.querySelector('.element__image').src = linkInput.value;
  htmlElement.querySelector('.element__image').alt = `Картинка: ${placeInput.value}`;

  list.prepend(htmlElement);
  resetPopupFields();
  setEventListeners(htmlElement);
  closePopup(popupCreate);
}

function handleDelete(el) {
  el.target.closest('.element').remove();
};

function toggleClass(el) {
  el.target.closest('.element__like-button').classList.toggle('element__like-button_active');
}

function setEventListeners(el) {
  el.querySelector('.element__garbage-button').addEventListener('click', handleDelete);
  el.querySelector('.element__like-button').addEventListener('click', toggleClass);
  el.querySelector('.element__image').addEventListener('click', function() {
    openPopup(popupView);
    popupView.querySelector('.popup__image').src = el.querySelector('.element__image').src;
    popupView.querySelector('.popup__caption').textContent = el.querySelector('.element__title').textContent;
    popupView.querySelector('.popup__image').alt = `Картинка: ${el.querySelector('.element__title').textContent}`;
  });
}

editButton.addEventListener('click', function() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addButton.addEventListener('click', function() {
  openPopup(popupCreate);
});

popupEdit.addEventListener('submit', submitEditForm);

popupCreate.addEventListener('submit', renderCard);

closeBtnEdit.addEventListener('click', function() {
  closePopup(popupEdit);
  resetPopupFields();
});

closeBtnCreate.addEventListener('click', function() {
  closePopup(popupCreate);
  resetPopupFields();
});

closeBtnView.addEventListener('click', function() {
  closePopup(popupView);
  resetPopupFields();
});
