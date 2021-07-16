const list = document.querySelector('.elements__list');
const itemTemplate = document.querySelector('.template-elements').content;

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
const popupViewImage = popupView.querySelector('.popup__image');

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

//popupView caption
const popupViewCaption = popupView.querySelector('.popup__caption');

function getCards(itemData) {
  const htmlElement = itemTemplate.querySelector('.element').cloneNode(true);
  const elementTitle = htmlElement.querySelector('.element__title');
  const elementImage = htmlElement.querySelector('.element__image');

  elementTitle.textContent = itemData.name;
  elementImage.src = itemData.link;
  elementImage.alt = `Картинка: ${itemData.link}`;

  setListeners(htmlElement);

  return htmlElement;
}

function renderCards(itemData) {
  list.prepend(getCards(itemData));
}

initialCards.forEach((el) => {
  renderCards(el);
});

handleEsc = (evt) => {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') {
    closePopup(activePopup);
  }
}

overlayClose = (evt) => {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.target.classList.contains('popup')) {
    closePopup(activePopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEsc);
  popup.addEventListener('click', overlayClose);
  // clearErrors(formElement);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEsc);
  popup.removeEventListener('click', overlayClose);
  resetAddCardPopup();
}

function createCard() {
  itemData.name = placeInput.value;
  itemData.link = linkInput.value;
  renderCards(itemData);
  resetAddCardPopup();
  closePopup(popupCreate);
}

function resetAddCardPopup() {
  const formCreate = popupCreate.querySelector('.form-create');
  formCreate.reset();
}

function submitEditForm() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleDelete(el) {
  el.target.closest('.element').remove();
};

function toggleClass(el) {
  el.target.closest('.element__like-button').classList.toggle('element__like-button_active');
}

function setListeners(el) {
  el.querySelector('.element__garbage-button').addEventListener('click', handleDelete);
  el.querySelector('.element__like-button').addEventListener('click', toggleClass);
  el.querySelector('.element__image').addEventListener('click', function() {
    openPopup(popupView);
    popupViewImage.src = el.querySelector('.element__image').src;
    popupViewCaption.textContent = el.querySelector('.element__title').textContent;
    popupViewImage.alt = `Картинка: ${el.querySelector('.element__title').textContent}`;
  });
}

editButton.addEventListener('click', () => {
  setInputsValue();
  enableValidation();
  openPopup(popupEdit);
});

function setInputsValue () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

addButton.addEventListener('click', () => {
  enableValidation();
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
