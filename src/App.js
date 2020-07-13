import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import participants from './participants'
import Round from './components/Round';
import Login from './components/Login'


function App() {

  return (
    <div className="app">
      <div>
        <center><h1>Welcome to Undercover!</h1></center>
      </div>
      <div>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/session" component={ () => <Round participants={participants}/> } />
      </Switch>
       
      </div>
    </div>
  );
}

export default App;
