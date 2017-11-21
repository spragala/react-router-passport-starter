import React, { Component } from 'react';
import Auth from '../models/Auth'

import { Link } from 'react-router-dom'

export default class Home extends Component{
  render(){
    return (
      <section className="home">
        <h1>Home</h1>
        {Auth.isUserAuthenticated() ? (
          <p>Welcome, you have successfully logged in.</p>
        ) : (
          <p>You must be logged in to see this content.
          </p>
        )}
      </section>
    )
  }
};
