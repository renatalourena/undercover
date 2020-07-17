
import React from 'react'
import Board from './Board';
import distributeWords from '../utils/distributeWords'
import './Round.css'
import pairs from '../pairs'

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: props.participants,
    }
  }

  generateGame = () => {
    const game = distributeWords(this.props.participants)
    this.setState({
      players: game
    });
  };

  render() {
    return (
      <div>
        <div className="generate">
          <button onClick={this.generateGame}>Generate</button>
        </div>
        <div>
          <Board
            participants={this.state.players}
            undercover={pairs[0].undercover}
            undercoverNumber={1} />
        </div>
      </div>
    );
  }
}

export default Round