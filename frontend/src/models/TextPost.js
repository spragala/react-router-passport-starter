import axios from 'axios';

class TextPostModel {

  static allUserPosts(userId) {
    let request = axios.get('/api/posts/' + userId);
    return request;
  }

  static create(post) {
    let request = axios.post('/api/posts/', post);
    return request;
  }

  static delete(postId) {
    let request = axios.delete('api/posts/' + postId);
    return request;
  }

  static update(post, postId) {
    let request = axios.put('api/posts/' + postId, {content: post});
    return request;
  }
}

export default TextPostModel;
