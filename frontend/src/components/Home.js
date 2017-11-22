import React, { Component } from 'react';
import Auth from '../models/Auth'

export default class Home extends Component{
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
