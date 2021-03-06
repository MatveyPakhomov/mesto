export default class Api {
  constructor(config) {
    this.url = config.baseUrl;
    this.headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  getProfileInfo() {
    return fetch(this.url + '/users/me', {
      headers: this.headers,
    })
      .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(this.url + '/cards', {
      headers: this.headers
    })
      .then(this._checkResponse)
  }

  editProfile(data) {
    return fetch(this.url + '/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse)
  }

  addNewCard(data) {
    return fetch(this.url + '/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse)
  }

  updateAvatar(data) {
    return fetch(this.url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(this.url + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(this._checkResponse)
  }

  likeCard(cardId) {
    return fetch(this.url + `/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers,
    })
      .then(this._checkResponse)
  }

  unlikeCard(cardId) {
    return fetch(this.url + `/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(this._checkResponse)
  }
}

