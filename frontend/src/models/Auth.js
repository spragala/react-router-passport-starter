export default class Auth {

  static authenticateUser(user, id) {
    localStorage.setItem('user',user);
    localStorage.setItem('id', user._id)
    console.log(id + ' is the id.')
  }

  static isUserAuthenticated(user) {
    if (localStorage.getItem('id') === user._id) {
      console.log(user._id)
      return true
    } else
    return false

  }

  static getUser() {
    return localStorage.getItem('id');
  }

}
