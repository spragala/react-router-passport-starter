import Auth from '../models/Auth'
import PostModel from '../models/TextPost'
import React, { Component } from 'react'
import TextPost from './TextPost'



export default class Home extends Component{
  constructor() {
    super();

    this.state = {
      textPosts: []
    }
  }

  componentWillMount() {
    this.getPosts();
  }

  getPosts() {
    //get User by id
    var userId = Auth.getUser()
    //get posts by that user
    PostModel.allUserPosts(userId).then( (res) => {
      this.setState({
        textPosts: res.data
      })
    })
  }

  deletePost(post) {
    PostModel.delete(post).then((res) => {
      let posts = this.state.textPosts.filter(function(post) {
        return post._id !== res.data._id
      })
      this.setState({ 
        textPosts: posts
      })
    })
  }

  render(){
    if(this.state.textPosts.length > 0) {
      var posts = this.state.textPosts.map( (post) => {
        return (
          <TextPost
            key={ post._id }
            post={ post }
            onDeletePost={this.deletePost.bind(this)}/>
        )
      })
    }

    return (
      <div className="home-page-wrapper">
        <section className="home hero is-bold is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Home</h1>
              {Auth.isUserAuthenticated() ? (
                <h2 className="subtitle">Welcome, you have successfully logged in.</h2>
              ) : (
                <h2 className="subtitle">You must be logged in to see this content.
                </h2>
              )}
            </div>
          </div>
        </section>
        {Auth.isUserAuthenticated() &&
        <div className ="column is-10 is-offset-1 text-posts">
          { posts }
          <hr />
        </div> }
      </div>

    )
  }
};
