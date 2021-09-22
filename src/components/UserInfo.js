export default class UserInfo {
  constructor(usernameElement, userJobElement, userAvatarElement) {
    this._usernameElement = usernameElement;
    this._userJobElement = userJobElement;
    this._userAvatarElement = userAvatarElement;
  }

  getUserInfo() {
    this._profileData = {
      name: this._usernameElement.textContent,
      job: this._userJobElement.textContent,
    };
    return this._profileData;
  }

  setUserInfo(data) {
    if (data.name) {
      this._usernameElement.textContent = data.name;
    }
    if (data.link) {
      this._userJobElement.textContent = data.link;
    }
  }

  setUserAvatar(data) {
    if (data.avatar) {
      this._userAvatarElement.src = data.avatar;
    }
  }
}
