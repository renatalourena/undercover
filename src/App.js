import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import AddParticipants from './components/AddParticipants'


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="home">
            <h1>Welcome to Undercover!</h1>
        </div>
        <Switch>
          <Route exact path="/" component={AddParticipants} />
          <Route path="/home" component={AddParticipants} />
        </Switch>
      </div>
    )
  }
}

