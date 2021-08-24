import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues () {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
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
