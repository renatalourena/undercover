
import React, { useState } from 'react'
import Board from './Board';
import distributeWords from '../utils/distributeWords'
import './Round.css'
import pairs from '../pairs'

export default (props) => {

  const [players, setPlayers] = useState(props.participants)
  const [disableStartButton, setDisableStartButton] = useState(false)
  
  const generateGame = () => {
    const game = distributeWords(players)
    setPlayers(game)
    setDisableStartButton(true)
  };

  return (
    <div className="board-game">
      <div className="generate">
        <button onClick={generateGame} disabled={disableStartButton} >Start</button>
      </div>
      <div>
        <Board
          participants={players}
          undercover={pairs[0].undercover}
          undercoverNumber={1} />
      </div>
    </div>
  );
}

// export default Round