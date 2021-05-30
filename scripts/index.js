let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__title');
let profileJob = profile.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
let nameInput = popup.querySelector('.popup__profile_name');
let jobInput = popup.querySelector('.popup__profile_job');
let formElement = popup.querySelector('.popup__form');

function popupOpened() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClosed() {
  popup.classList.remove('popup_opened');
}

// попытка сделать закрытие попапа по щелчку на свободное пространство, надо доработать

// popup.addEventListener('click', function(event) {
//   if (event.target === event.currentTarget) {
//     toggleClass(event);
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileJob.textContent;
//   }
// })

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClosed();
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', popupOpened);

closeButton.addEventListener('click', popupClosed);
