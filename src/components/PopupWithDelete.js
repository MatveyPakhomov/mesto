import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
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
