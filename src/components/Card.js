export default class Card {
  constructor(data, template, { handleCardClick, handleDeleteClick, handleLikeClick }) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    // this._userId = data.owner._id;
    // this._ownerId = '08852f457253849f20e2988e';
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    // this._likesCounter = data.likes;
    // this._likeCounter = this._card.querySelector('.element__like-counter');
  }

  _getTemplate() {
    const templateElement = this._template.content.querySelector('.element').cloneNode(true);
    return templateElement;
  }

  _handleLikeCard() {
    this._cardLikeBtn.classList.toggle('element__like-button_active');
  }

  _setDeleteButton() {
    // console.log(this._userId)
    if(!(this._userId === this._ownerId)) {
      this._cardDeleteBtn.hidden = true;
    }
  }

  // _setLikeCounter() {
  //   console.log(this._likesCounter.length)
  //   // likeCounter.textContent = this._likesCounter.length;
  // }

  _setEventListeners() {
    this._cardDeleteBtn.addEventListener('click', this._handleDeleteClick);
    this._cardLikeSection.addEventListener('click', this._handleLikeCard.bind(this));
    this._cardViewBtn.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  getCard() {
    this._card = this._getTemplate();
    this._cardLikeSection = this._card.querySelector('.element__like-section');
    this._cardLikeBtn = this._card.querySelector('.element__like-button');
    this._cardLikeCounter = this._card.querySelector('.element__like-counter')
    this._cardDeleteBtn = this._card.querySelector('.element__garbage-button');
    this._cardViewBtn = this._card.querySelector('.element__image');
    this._cardTitle = this._card.querySelector('.element__title');
    this._cardTitle.textContent = this._name;
    this._cardViewBtn.src = this._link;
    this._cardViewBtn.alt = this._name;
    // this._setLikeCounter();
    // this._setDeleteButton();
    this._setEventListeners();
    return this._card;
  }
}
