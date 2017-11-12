import React, { Component } from 'react';
import Users from '../models/Users'
import Auth from '../models/Auth'

export default class Login extends Component{
  constructor(){
    super();
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(field) {
    return (e) => {
      const user = this.state.user
      user[field] = e.target.value
      this.setState({
        user
      });
    }
  }

  onFormSubmit(e) {
    e.preventDefault()
    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `username=${username}&password=${password}`;

    Users.post(formData).then( (res) => {
      if (res.data.success === false) {
      } else {
        Auth.authenticateUser(res.data.user, res.data.user._id)
      }
      const user = res.data.user
      this.setState({
        user
      })
    })
  };

  render(){
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={ e => this.onFormSubmit(e) }>
          <label>Username</label>
          <input
            type='text'
            onChange={ this.handleChange('username') } />
          <label>Password</label>
          <input
            type='text'
            onChange={ this.handleChange('password') } />
          <button type='submit'>Log In!</button>
        </form>
        {Auth.isUserAuthenticated(this.state.user) ? (
          <p>Hello {this.state.user.name}</p>
        ) : (
          <p>Not Logged in.</p>
        )}
      </div>
    )
  }
};
