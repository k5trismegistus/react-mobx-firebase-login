import { observable, computed } from 'mobx';
import firebase from 'firebase';

export class AuthStore {
  @observable uid = '';
  @observable displayName = '';

  @computed get isLoggedin() {
    return !!this.uid;
  }

  doLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  doLogout() {
    firebase.auth().signOut()
  }

  refLogin() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.clearUserInfo();
        return;
      }
      this.setUserInfo(user);
    });
  }

  setUserInfo(user) {
    this.uid = user.uid;
    this.displayName = user.displayName;
  }

  clearUserInfo() {
    this.uid = '';
    this.displayName = '';
  }
}
