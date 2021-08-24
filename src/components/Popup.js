export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  _setEventListeners() {
    this._closeMethod = this.close.bind(this);
    this._popupCloseButton.addEventListener('click', this._closeMethod);
    document.addEventListener('keyup', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
  }

  _removeEventListeners() {
    this._popupCloseButton.removeEventListener('click', this._closeMethod);
    document.removeEventListener('keyup', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
  }
}
