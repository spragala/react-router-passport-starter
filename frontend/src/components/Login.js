import React, { Component } from 'react';
import Users from '../models/Users'

export default class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }



  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  onFormSubmit(e) {
    e.preventDefault()
    const username = encodeURIComponent(this.state.username);
    const password = encodeURIComponent(this.state.password);
    const formData = `username=${username}&password=${password}`;

    Users.post(formData).then( (res) => {
      if (res.status === 400) {
        console.log(res.data.message)
      }
      console.log(res.data.message)
    })

    this.setState({
      username: '',
      password: ''
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
      </div>
    )
  }
};
