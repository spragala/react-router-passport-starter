export default class Auth {

  static authenticateUser(user) {
    console.log('storing this user: ', user)
    localStorage.setItem('user', user);
  }

  static isUserAuthenticated() {
    const id = localStorage.getItem('user')
    console.log("Authed user: ", id)
    return localStorage.getItem('user') !== null;
  }

  static getUser() {
    return localStorage.getItem('user');
  }

  static logout() {
    localStorage.removeItem('user')
  }

}
