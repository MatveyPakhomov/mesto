export default class Card {
  constructor(data, template, userId, { handleCardClick, handleDeleteClick, handleLikeClick }) {
    this._name = data.name;
    this._link = data.link;
    this._likeCounter = data.likes;
    this._template = template;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._likesId = data.likes;
    this._popupDelete = document.querySelector('.popup_type_delete');
  }

  isLiked() {
    if (this._cardLikeBtn.classList.contains('element__like-button_active')) {
      return true;
    }
  }

  _setDeleteButton() {
    if (this._userId !== this._ownerId) {
      this._cardDeleteBtn.hidden = true;
    }
  }

  _getTemplate() {
    const templateElement = this._template.content.querySelector('.element').cloneNode(true);
    return templateElement;
  }

  _openDeletePopup = () => {
    this._handleDeleteClick(this._card, this._cardId);
  }

  _like = () => {
    this._handleLikeClick(this._cardId, this);
  }

  addLike(data) {
    this._cardLikeCounter.textContent = data.likes.length;
    this._cardLikeBtn.classList.add('element__like-button_active');
  }

  removeLike(data) {
    this._cardLikeCounter.textContent = data.likes.length;
    this._cardLikeBtn.classList.remove('element__like-button_active');
  }

  _setLikeCounter() {
    if (this._likesId.find((element) => {return element._id === this._userId})) {
      this._cardLikeBtn.classList.add('element__like-button_active')
    }

    this._cardLikeCounter.textContent = this._likeCounter.length;
  }

  _setEventListeners() {
    this._cardDeleteBtn.addEventListener('click', this._openDeletePopup);
    this._cardLikeSection.addEventListener('click', this._like);
    this._cardViewBtn.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  getCard() {
    this._card = this._getTemplate();
    this._cardLikeSection = this._card.querySelector('.element__like-section');
    this._cardLikeCounter = this._card.querySelector('.element__like-counter');
    this._cardLikeBtn = this._card.querySelector('.element__like-button');
    this._cardDeleteBtn = this._card.querySelector('.element__garbage-button');
    this._cardViewBtn = this._card.querySelector('.element__image');
    this._cardTitle = this._card.querySelector('.element__title');
    this._cardTitle.textContent = this._name;
    this._cardViewBtn.src = this._link;
    this._cardViewBtn.alt = this._name;
    this._setLikeCounter();
    this._setDeleteButton();
    this._setEventListeners();
    return this._card;
  }
}
