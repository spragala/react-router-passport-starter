import React, { Component } from 'react';
import Users from '../models/Users'
import Auth from '../models/Auth'

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      user: {},
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
      if (res.data.success === false) {
        console.log(res.data.message)

      }
      
      this.setState({
        user: res.data.user
      })
      console.log(this.state)
      console.log(this.props)
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
          <p>Hello {this.state.user.name}</p>
      </div>
    )
  }
};
