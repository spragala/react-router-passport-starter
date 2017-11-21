import React, { Component } from 'react';
import Users from '../models/Users'
import Auth from '../models/Auth'

import { Redirect } from 'react-router-dom'

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      user: {},
      shouldRedirect: false
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
      Auth.authenticateUser(res.data.user._id)

      this.setState({
        user: res.data.user,
        shouldRedirect: true
      })
      console.log(this.state)
      console.log(this.props)
    })
  };

  render(){
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { shouldRedirect } = this.state

    return (
      <section className="login-section">
        <h1 className="login-title">Login Page</h1>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="columns">
              <div class="column is-8 is-offset-2 login-form">
                <form onSubmit={ e => this.onFormSubmit(e) }>
                  <div className="field">
                    <label>Username</label>
                    <div className="control has-icons-left">
                      <input
                        type='text'
                        className="input"
                        onChange={ this.handleChange('username') } />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <label>Password</label>
                    <div className="control has-icons-left">
                      <input
                        type='text'
                        className="input"
                        onChange={ this.handleChange('password') } />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <button type='submit' className="button is-primary is-outlined">Log In!</button>
                </form>
              {shouldRedirect && (
                <Redirect to={ from } />
              )}
              </div>
            </div>
          </div>
        </div>
      </section>


    )
  }
};
