import Auth from '../models/Auth';
import CreatePostForm from './CreatePostForm';
import PostModel from '../models/TextPost';
import React, {Component} from 'react';
import TextPost from './TextPost';


class Home extends Component{
  constructor() {
    super();

    this.state = {
      textPosts: []
    };
    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editFormSubmit = this.editFormSubmit.bind(this);
  }

  componentWillMount() {
    this.getPosts();
  }

  getPosts() {
    //get User by id saved in localStorage
    var userId = Auth.getUser();
    //get posts by that user
    PostModel.allUserPosts(userId).then((res) => {
      this.setState({
        textPosts: res.data
      });
    });
  }

  createPost(post) {
    PostModel.create(post).then((res) => {
      let posts = this.state.textPosts;
      let newPosts = posts.push(res.data);
      this.setState({newPosts});
    });
  }

  deletePost(post) {
    PostModel.delete(post).then((res) => {
      let posts = this.state.textPosts.filter(function(post) {
        return post._id !== res.data._id;
      })
      this.setState({
        textPosts: posts
      });
    });
  }

  editFormSubmit(content, postId) {
    // callback to find the updated post in posts array
    function isUpdatedPost(post) {
      return post._id === postId;
    };
    PostModel.update(content, postId).then((res) => {
      let posts = this.state.textPosts;
      // find the updated post and set its content to the updated content
        posts.find(isUpdatedPost).content = content;
        this.setState({
          textPosts: posts
        });
    });
  }

  render(){
    if(this.state.textPosts.length > 0) {
      var posts = this.state.textPosts.map((post) => {
        return (
          <TextPost
            key={post._id}
            post={post}
            onDeletePost={this.deletePost}
            onFormSubmit={this.editFormSubmit}
          />
        )
      });
    }

    return (
      <div className="home-page-wrapper">
        <section className="home hero is-bold is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Home</h1>
              {Auth.isUserAuthenticated() ? (
                <div className="subtitle">
                  <h2 className="logged-in-subtitle">Welcome, here's your content.</h2>
                  <CreatePostForm createPost={this.createPost}/>
                </div>
              ) : (
                <h2 className="subtitle">You must be logged in to see the content below.
                </h2>
              )}
            </div>
          </div>
        </section>
        {Auth.isUserAuthenticated() &&
        <div className ="column is-10 is-offset-1 text-posts">
          {posts || <p>Write some posts!</p>}
          <hr />
        </div> }
      </div>

    )
  }
}

export default Home;
