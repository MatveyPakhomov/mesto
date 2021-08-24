export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setEventListeners();
  }

  close = () => {
    this._removeEventListeners();
    this._popup.classList.remove('popup_opened');
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
    this._popupCloseButton.addEventListener('click', this.close);
    document.addEventListener('keyup', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
  }

  _removeEventListeners() {
    this._popupCloseButton.removeEventListener('click', this.close);
    document.removeEventListener('keyup', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
  }
}
