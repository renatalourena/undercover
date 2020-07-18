import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login'


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div class="home">
            <h1>Welcome to Undercover!</h1>
            <Link to="/login">Click here to start the game</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

