export default class Auth {

  static authenticateUser(user, id) {
    localStorage.setItem('user',user);
    localStorage.setItem('id', id)
    console.log(user.username + ' is authenticaed.')
  }

  static isUserAuthenticated() {
    return localStorage.getItem('id') !== null;
  }

}
