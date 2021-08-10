import { openPopup, popupView, popupViewImage, popupViewCaption } from './index.js'

export class Card {
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }

  _getTemplate = () => {
    const templateElement = this._template.content.querySelector('.element').cloneNode(true);
    return templateElement;
  }

  _handleDeleteCard = (evt) => {
    evt.target.closest('.element').remove();
  }

  _handleLikeCard = () => {
    this._cardLikeBtn.classList.toggle('element__like-button_active');
  }
  _handlePreviewPicture = () => {
    this._popupViewImage = popupViewImage;
    this._popupViewCaption = popupViewCaption;
    openPopup(popupView);
    this._popupViewImage.src = this._cardViewBtn.src;
    this._popupViewCaption.textContent = this._name;
    this._popupViewImage.alt = `Картинка: ${this._name}`;
  }

  _setEventListeners = () => {
    this._cardDeleteBtn.addEventListener('click', this._handleDeleteCard);
    this._cardLikeBtn.addEventListener('click', this._handleLikeCard);
    this._cardViewBtn.addEventListener('click', this._handlePreviewPicture);
  }

  getCard = () => {
    this._card = this._getTemplate();
    this._card.querySelector('.element__title').textContent = this._name;
    this._card.querySelector('.element__image').src = this._link;
    this._card.querySelector('.element__image').alt = this._name;
    this._cardLikeBtn = this._card.querySelector('.element__like-button');
    this._cardDeleteBtn = this._card.querySelector('.element__garbage-button');
    this._cardViewBtn = this._card.querySelector('.element__image');
    this._setEventListeners();
    return this._card;
  }
}
