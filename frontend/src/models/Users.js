import axios from 'axios'

export default class UserModel {

  static post(user) {
    console.log('The object I am sending', user)
    let request = axios.post(`http://localhost:8080/login`, user)
    return request
  }

}
