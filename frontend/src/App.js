import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React App</h1>
        </header>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
