import Auth from '../models/Auth';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Users from '../models/Users';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
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

    Users.login(formData).then( (res) => {
      if (res.data.success === false) {
        this.setState({error: res.data.message})
      } else {
        Auth.authenticateUser(res.data.user._id)

        this.setState({
          user: res.data.user,
          shouldRedirect: true
        })
      }
    })
  };

  render(){
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const {shouldRedirect} = this.state
    const {error} = this.state

    return (
      <section className="login-section">

        <div className="columns is-centered">
          <div className="column is-half">
            <div className="form">
              <h1 className="login-title has-text-centered has-text-weight-bold">Login Page</h1>

              {error && <p className="has-text-danger has-text-centered">{error}</p>}

              <form onSubmit={e => this.onFormSubmit(e)}>
                <div className="field">
                  <label className="is-invisible">Username</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      className="input"
                      placeholder="username"
                      onChange={this.handleChange('username')} />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <label className="is-invisible">Password</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      className="input"
                      placeholder="password"
                      onChange={this.handleChange('password')} />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="button is-primary is-outlined">Log In!
                </button>
              </form>
            {shouldRedirect && (
              <Redirect to={from} />
            )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;
