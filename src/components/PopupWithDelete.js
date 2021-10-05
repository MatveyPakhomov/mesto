import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  renderLoading(isLoading) {
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    if (isLoading) {
      this._submitTextBefore = this._submitButton.textContent;
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = this._submitTextBefore;
    }
  }

  _submit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit();
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
