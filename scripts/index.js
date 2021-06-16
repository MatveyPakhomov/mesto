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

//значения инпутов
const formItemName = placeInput.value;
const formItemLink = linkInput.value;

//объект со значениями инпутов
const itemData = {
  name: formItemName,
  link: formItemLink
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

  setEventListeners(htmlElement);

  return htmlElement;
}

function renderCards(itemData) {
  list.prepend(getCards(itemData));
}

initialCards.forEach(function(el) {
  renderCards(el);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function createCard(evt) {
  evt.preventDefault();
  itemData.name = placeInput.value;
  itemData.link = linkInput.value;
  renderCards(itemData);
  resetPopupFields();
  closePopup(popupCreate);
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

popupCreate.addEventListener('submit', createCard);

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
