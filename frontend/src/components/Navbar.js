import React from 'react'
import Auth from '../models/Auth'
import { Link, withRouter } from 'react-router-dom'

const Navbar = withRouter(({ history }) => (
  <nav className="navbar" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item app-title" href="/">React App</a>
    </div>

    <div className="navbar-end">
      {Auth.isUserAuthenticated() ? (
        <a
          className="navbar-item"
          onClick={() => {
            Auth.logout(() => history.push('/login'))
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

  </nav>
))

export default Navbar;
