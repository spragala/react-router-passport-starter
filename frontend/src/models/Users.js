import axios from 'axios'



export default class UserModel {

  static post(user) {
    let request = axios.post(`/login/?${user}`, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, withCredentials: true } )
    return request
  }

}
