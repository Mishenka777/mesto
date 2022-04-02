export default class UserInfo {
  constructor({ profileName, profileJob, profileAvatar}) {
    this._profileName = profileName;
    this._profileJob = profileJob;
    this._profileAvatar = profileAvatar
  };

  getUserInfo() {
    return {
      human: this._profileName.textContent,
      job: this._profileJob.textContent,
      avatar: this._profileAvatar.src
    };
  };

  setUserInfo(name, about) {
    this._profileName.textContent = name,
    this._profileJob.textContent = about
  };

  setAvatar(avatar) {
    this._profileAvatar.src = avatar
  }
};