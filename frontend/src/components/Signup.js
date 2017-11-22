import React, { Component } from 'react';
import Users from '../models/Users'

import { Link, Redirect } from 'react-router-dom'

export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      errors: {},
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
    const email = encodeURIComponent(this.state.email);
    const name = encodeURIComponent(this.state.name);
    const password = encodeURIComponent(this.state.password);
    const password2 = encodeURIComponent(this.state.password2);
    const formData = `username=${username}&name=${name}&email=${email}&password=${password}&password2=${password2}`;

    Users.signup(formData).then( (res) => {
      if (res.data.success === false) {
        console.log(res.data.errors)
        this.setState({
          errors: res.data.errors,
          shouldRedirect: false
        })
      } else {
        this.setState({
          shouldRedirect: true
        })
      }
    })
  }

  render() {
    const { from } = { from: { pathname: '/login' } }
    const { shouldRedirect } = this.state

    return(
      <section className="signup-section">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="form">
              <h1 className="login-title has-text-centered has-text-weight-bold">Signup</h1>
              <form onSubmit={ e => this.onFormSubmit(e) }>
                <div className="field">
                  <label className="is-invisible">Username</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      placeholder="username"
                      className="input"
                      onChange={ this.handleChange('username') } />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <label className="is-invisible">Email</label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      placeholder="email"
                      className="input"
                      onChange={ this.handleChange('email') } />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <label className="is-invisible">Name</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      placeholder="full name"
                      className="input"
                      onChange={ this.handleChange('name') } />
                    <span className="icon is-small is-left">
                      <i className="fa fa-address-card"></i>
                    </span>
                  </div>
                  <label className="is-invisible">Password</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      placeholder="password"
                      className="input"
                      onChange={ this.handleChange('password') } />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <label className="is-invisible">Password Confirmation</label>
                  <div className="control has-icons-left">
                    <input
                      type='text'
                      placeholder="Please re-enter your password."
                      className="input"
                      onChange={ this.handleChange('password2') } />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <button type="submit" className="button is-primary is-outlined">Signup!</button>
                    </div>
                    <div className="level-item">
                      <Link to="/login">Already a User? Login</Link>
                    </div>
                  </div>
                </div>


              </form>
            {shouldRedirect && (
              <Redirect to={ from } />
            )}
            </div>
          </div>
        </div>
      </section>

    )
  }

}
