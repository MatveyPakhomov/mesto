export default class Api {
  constructor(config) {
    this.url = config.baseUrl;
    this.headers = config.headers;
  }

  getProfileInfo() {
    return fetch(this.url + '/users/me', {
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  getInitialCards() {
    return fetch(this.url + '/cards', {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  editProfile(data) {
    return fetch(this.url + '/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  addNewCard(data) {
    return fetch(this.url + '/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  updateAvatar(data) {
    return fetch(this.url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  deleteCard(cardId) {
    return fetch(this.url + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
      // body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  likeCard(cardId) {
    return fetch(this.url + `/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  unlikeCard(cardId) {
    return fetch(this.url + `/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  // getLikesCount(userId) {
  //   return fetch(this.url + `/cards/likes/${userId}`, {
  //     headers: this.headers,
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     // если ошибка, отклоняем промис
  //       return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  //     })
  // }

  // другие методы работы с API
}

