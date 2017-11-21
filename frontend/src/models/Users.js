import axios from 'axios'



export default class UserModel {

  static login(user) {
    let request = axios.post(`/login/?${user}`)
    return request
  }

  static signup(newUser) {
    console.log(newUser)
    let request = axios.post(`/signup`, newUser,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
       withCredentials: true }, )
    return request
  }

}
