import React from 'react';
import './App.css';
import participants from './participants'
import Round from './components/Round';


function App() {

  return (
    <div className="app">
      <div>
        <center><h1>Welcome to Undercover!</h1></center>
      </div>
      <div>
        <Round participants={participants} />
      </div>
    </div>
  );
}

export default App;
