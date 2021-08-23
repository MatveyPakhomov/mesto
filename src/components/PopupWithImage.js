import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._name = document.querySelector('.popup__caption');
    this._link = document.querySelector('.popup__image');
  }

  open (name, link) {
    super.open();
    this._name.textContent = name;
    this._link.src = link;
    this._link.alt = name;
  }
}
