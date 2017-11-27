import Auth from '../models/Auth'
import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Navbar = withRouter(({history}) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item app-title">React App</Link>
      <div
        className="navbar-burger burger"
        data-target="nav-content"
        onClick={() => {
          let burger = document.querySelector(".navbar-burger")
          let menu = document.querySelector(".navbar-menu")
          burger.classList.toggle("is-active")
          menu.classList.toggle("is-active") }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="nav-content" className="navbar-menu">
      <div className="navbar-end">
        {Auth.isUserAuthenticated() ? (
          <a
            className="navbar-item"
            onClick={() => {
              Auth.logout(() => history.push('/'))
            }}>Sign-out
          </a>
      ) : (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link to="/login" className="button is-inverted is-primary">Log in</Link>
              </p>
              <p className="control">
                <Link to="/signup" className="button is-primary">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  </nav>
))

export default Navbar;
