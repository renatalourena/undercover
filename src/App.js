import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import AddParticipants from './components/AddParticipants'
import Header from './components/Header';
import Round from './components/Round';


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={AddParticipants} />
          <Route path="/home" component={AddParticipants} />
          <Route path="/board" component={() => <Round/>} />
        </Switch>
      </div>
    )
  }
}

