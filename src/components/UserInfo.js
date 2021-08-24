export default class UserInfo {
  constructor({ usernameElement, userJobElement }) {
    this._usernameElement = usernameElement;
    this._userJobElement = userJobElement;
    this._userName = document.querySelector('.profile__title');
    this._userJob = document.querySelector('.profile__subtitle');
  }

  getUserInfo = () => {
    this._profileData = {};
    this._profileData.name = this._userName.textContent;
    this._profileData.job = this._userJob.textContent;
    return this._profileData;
  }

  setUserInfo = (data) => {
    if (data.name) {
      this._userName.textContent = data.name;
    }
    if (data.link) {
      this._userJob.textContent = data.link;
    }
  }
}
