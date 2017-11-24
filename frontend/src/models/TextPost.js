import axios from 'axios'

export default class TextPostModel {

  static allUser(userId) {
    console.log(userId)
    let request = axios.get('/api/posts/' + userId)
    return request
  }
}
