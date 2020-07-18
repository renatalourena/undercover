import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import Round from './Round'
import './AddParticipants.css'



export default () => {
  const [playerName, setPlayerName] = useState('')
  const [playersList, setPlayersList] = useState([]);
  const [index, setIndex] = useState(2)

  const updatePlayerInput = (e) => {
    setPlayerName(e.target.value)
  }

  function handleAdd() {
    const newplayersList = playersList.concat({ id: index, user: playerName });
    setPlayersList(newplayersList);
    setPlayerName('')
    setIndex(index + 1)
  }

  function handleRemove(id) {
    const newplayersList = playersList.filter(player => player.id !== id)
    setPlayersList(newplayersList);
  }


  return (
    <div className="add-participants">
      <div>
        <div>Add new participant:</div>
        <input value={playerName} type="text" onChange={updatePlayerInput} />
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="players-table">
        <div>List of players in the game</div>
        <table>
          <tbody>
            {playersList.length === 0 ?
              <tr><td>'No players yet!'</td></tr>
              : playersList.map((item) => (
                <tr key={item.id}>
                  <td>{item.user}</td>
                  <td>
                    <button key={item.id} onClick={() => handleRemove(item.id)}>-</button>
                  </td>
                </tr>
              ))}
          </tbody>

        </table>
      </div>
      <div className="generate-board">
        <Link to="/home/session">Generate board!</Link>
      </div>
      <Route path="/home/session" component={() => <Round participants={playersList} />} />
    </div>
  );
};

