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

  setUserInfo = (item) => {
    if (item.popup_input_title) {
      this._userName.textContent = item.popup_input_title;
    }
    if (item.popup_input_subtitle) {
      this._userJob.textContent = item.popup_input_subtitle;
    }
  }
}
