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

  _submit = () => {
    this._handleFormSubmit(this._getInputValues());
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
