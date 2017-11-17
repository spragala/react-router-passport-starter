import React, { Component } from 'react';
import Auth from '../models/Auth'

export default class Home extends Component{
  render(){
    return (
      <div>
        <h1>Home</h1>
        {Auth.isUserAuthenticated() ? (
          <p>You are logged in
          <button onClick={() => {
            Auth.logout(() => this.history.replace('/'))
          }}>Sign out</button></p>
        ) : (
          <p>You are logged out</p>
        )}
      </div>
    )
  }
};
