export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  //узнать про потерю контекста и уместное испольщование стрелочных функций
  close = () => {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    this._popupCloseButton.addEventListener('click', this.close);

    document.addEventListener('keyup', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
  }

  _removeEventListeners() {
    document.removeEventListener('keyup', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
  }
}
