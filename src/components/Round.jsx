
import React from 'react'
import Board from './Board';
import distributeWords from '../utils/distributeWords'

class Round extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: localStorage.getItem('@game') ? JSON.parse(localStorage.getItem('@game')).game : props.participants,
    }
  }

  generateGame = () => {
    const game = distributeWords(this.props.participants)
    localStorage.setItem('@game', JSON.stringify({ game }))
    this.setState({
      players: game
    });
  };

  render() {
    return (
      <div>
        <div>
          <center>
            <button onClick={this.generateGame}>Generate</button>
          </center>
        </div>
        <div>
          <Board participants={this.state.players} />
        </div>
      </div>
    );
  }
}

export default Round