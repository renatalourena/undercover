
import React, { useState } from 'react'
import Board from './Board';
import distributeWords from '../utils/distributeWords'
import './Round.css'

export default (props) => {

  const [players, setPlayers] = useState(props.participants)
  const [disableStartButton, setDisableStartButton] = useState(false)
  
  const startGame = () => {
    const game = distributeWords(players)
    game.map(p => console.log(p.user, p.word))
    setPlayers(game)
    setDisableStartButton(true)
  };

  return (
    <div className="board-game">
      <div className="generate">
        <button onClick={startGame} disabled={disableStartButton} >Start</button>
      </div>
      <div>
        <Board
          participants={players}
          undercoverNumber={1} />
      </div>
    </div>
  );
}

// export default Round