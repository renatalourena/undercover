import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './AddParticipants.css'

export default () => {
  const [playerName, setPlayerName] = useState('')
  const [playersList, setPlayersList] = useState([{id: 1, name: "renata"}]);
  const [index, setIndex] = useState(2)

  const updatePlayerInput = (e) => {
    setPlayerName(e.target.value)
  }

  function handleAdd() {
    const newplayersList = playersList.concat({ id: index, name: playerName });
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
        <div>Players</div>
        <table>
          <tbody>
            {playersList.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <button key={item.id} onClick={() => handleRemove(item.id)}>-</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
      <div>
        <Link to="/session">Join!</Link>
        {/* <button className="join-button">
          Join!
        </button> */}
      </div>
    </div>
  );
};

