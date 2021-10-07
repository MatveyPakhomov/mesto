import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues () {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitTextBefore = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._submitTextBefore;
    }
  }

  close() {
    super.close();
  }

  //в предыдущем потоке наставник топил за то чтобы делать ресет формы при сабмите,
  //а не при закрытии попапа, так как это не очень дружелюбно по отношению к пользователю,
  //если пользователь случайно закроет попап, например
  //мне эта позиция понравилась, я буду её придерижваться

  //к слову, ресет форм после получения ответа от сервера мне понравился больше
  //ресетить форму профиля я бы вообще не стал, как было до этого

  _submit = () => {
    this._handleFormSubmit(this._getInputValues());
    this._form.reset();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popup.addEventListener('submit', this._submit);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._popup.removeEventListener('submit', this._submit);
  }
}
