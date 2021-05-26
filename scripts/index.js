let popup =  document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let submitButton = document.querySelector('.popup__save-button');

function toggleClass() {
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', toggleClass);

submitButton.addEventListener('click', toggleClass);

closeButton.addEventListener('click', function () {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
})

popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    toggleClass(event);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
})

let formElement = document.querySelector('.popup');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profile = document.querySelector('.profile');
let profileName = profile.querySelector('#profile_name');
let profileJob = profile.querySelector('#profile_job');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
