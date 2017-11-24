import Auth from '../models/Auth'
import React, { Component } from 'react'
import TextPost from '../models/TextPost'


export default class Home extends Component{
  constructor() {
    super();

    this.state = {
      textPosts: ""
    }
  }

  componentWillMount() {
    this.getPosts();
  }

  getPosts() {
    //get User by id
    var userId = Auth.getUser()
    //get posts by that user
    TextPost.allUser(userId).then( (res) => {
      console.log(res.data)
      this.setState({
        textPosts: res.data
      })
    })
  }

  render(){
    return (
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
    )
  }
};
