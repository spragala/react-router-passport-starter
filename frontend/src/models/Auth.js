class Auth {

  static authenticateUser(user) {
    localStorage.setItem('user', user);
  }

  static isUserAuthenticated() {
    return localStorage.getItem('user') !== null;
  }

  static getUser() {
    return localStorage.getItem('user');
  }

  static logout(callback) {
    localStorage.removeItem('user')
    setTimeout(callback, 100);
  }

}

export default Auth;
