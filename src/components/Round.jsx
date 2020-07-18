
import React, { useState } from 'react'
import Board from './Board';
import distributeWords from '../utils/distributeWords'
import './Round.css'
import pairs from '../pairs'

export default (props) => {

  const [players, setPlayers] = useState(props.participants)
  
  const generateGame = () => {
    const game = distributeWords(props.participants)
    setPlayers(game)
  };

  return (
    <div>
      <div className="generate">
        <button onClick={generateGame}>Shuffle</button>
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