import axios from 'axios'

export default class TextPostModel {

  static allUserPosts(userId) {
    let request = axios.get('/api/posts/' + userId)
    return request
  }

  static delete(postId) {
    let request = axios.delete('api/posts/' + postId)
    return request
  }
}
