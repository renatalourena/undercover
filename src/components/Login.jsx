import React, { useState } from "react";
import './Login.css'
import AddParticipants from "./AddParticipants";

export default (props) => {


  const [playerName, setPlayerName] = useState('')
  let playersList = []

  const updatePlayerInput = (e) => {
    setPlayerName(e.target.value)
  }

  const addParticipants = () => {
   
  }

  return (
    <div >
      <div className="login">
        <div>
          <AddParticipants></AddParticipants>
        </div>
        
      </div>

    </div>
  );
}