export default class Card {
  constructor(data, template, userId, ownerId, likeCounter, { handleCardClick, handleDeleteClick, handleLikeClick }) {
    this._name = data.name;
    this._link = data.link;
    this._likeCounter = likeCounter;
    this._template = template;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = ownerId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const templateElement = this._template.content.querySelector('.element').cloneNode(true);
    return templateElement;
  }

//черновик
  // _setDeleteButton() {
  //   if(this._userId !== this._ownerId) {
  //     this._cardDeleteBtn.hidden = true;
  //   }
  // }

  _delete = () => {
    this._handleDeleteClick(this._cardId, this._card);
  }

  _like = () => {
    this._handleLikeClick(this._cardId, this._card, this._userId);
  }

  _setLikeCounter() {
    this._cardLikeCounter.textContent = this._likeCounter;
  }

  _setEventListeners() {
    this._cardDeleteBtn.addEventListener('click', this._delete);
    this._cardLikeSection.addEventListener('click', this._like);
    this._cardViewBtn.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  getCard() {
    this._card = this._getTemplate();
    this._cardLikeSection = this._card.querySelector('.element__like-section');
    this._cardLikeCounter = this._card.querySelector('.element__like-counter');
    this._cardDeleteBtn = this._card.querySelector('.element__garbage-button');
    this._cardViewBtn = this._card.querySelector('.element__image');
    this._cardTitle = this._card.querySelector('.element__title');
    this._cardTitle.textContent = this._name;
    this._cardViewBtn.src = this._link;
    this._cardViewBtn.alt = this._name;
    this._setLikeCounter();
    // this._setDeleteButton();
    this._setEventListeners();
    return this._card;
  }
}
