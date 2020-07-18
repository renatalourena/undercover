import React from 'react';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login'


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div class="home">
            <h1><Link to="/login">Welcome to Undercover!</Link></h1>
        </div>
        <Switch>
          <Route exact from="/" to="/login" />
          <Route path="/login" component={Login} />
          {/* <Route path="/session" component={() => <Round participants={[]} />} /> */}
        </Switch>
      </div>
    )
  }
}

