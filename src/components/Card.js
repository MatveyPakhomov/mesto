export default class Card {
  constructor(data, template, handleCardClick) {
    this._name = data.popup_input_title;
    this._link = data.popup_input_subtitle;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const templateElement = this._template.content.querySelector('.element').cloneNode(true);
    return templateElement;
  }

  _handleDeleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  _handleLikeCard() {
    this._cardLikeBtn.classList.toggle('element__like-button_active');
  }

  _setEventListeners() {
    this._cardDeleteBtn.addEventListener('click', this._handleDeleteCard.bind(this));
    this._cardLikeBtn.addEventListener('click', this._handleLikeCard.bind(this));
    this._cardViewBtn.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  getCard() {
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
