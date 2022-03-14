export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._profileName = profileName;
    this._profileJob = profileJob;
  };

  getUserInfo() {
    return {
      human: this._profileName.textContent,
      job: this._profileJob.textContent
    };
  };

  setUserInfo({human, job}) {
    this._profileName.textContent = human,
    this._profileJob.textContent = job
  };
};