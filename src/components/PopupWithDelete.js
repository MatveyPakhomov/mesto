import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._handleFormSubmit = handleFormSubmit;
    // this._handleDeleteCard = handleDeleteCard;
    this._submitButton = this._popup.querySelector('.popup__submit-button');
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitTextBefore = this._submitButton.textContent;
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = this._submitTextBefore;
    }
  }

  // setNewHandler(handle) {
  //   this._handleDeleteCard = handle;
  // }

  _submit = (evt) => {
    evt.preventDefault();
    // this._handleFormSubmit();
    // this.setNewHandler();
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
