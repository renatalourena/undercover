
import React, { useState, useEffect } from 'react'
import Board from './Board';
import distributeWords from '../utils/distributeWords'
import './Round.css'

export default class Round extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      disableStartButton: false
    }
  }

  async componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('http://localhost:3030/players', requestOptions)

    this.setState({
      players: await response.json()
    })
  }

  startGame() {
    const game = distributeWords(this.state.players)
    this.setState({
      players: game,
      disableStartButton: true

    })
  };

  render() {
    return (
      <div className="board-game">
        <div className="generate">
          <button onClick={() => this.startGame()} disabled={this.state.disableStartButton} >Start</button>
        </div>
        <div>
          <Board
            participants={this.state.players}
            undercoverNumber={1} />
        </div>
      </div>
    )
  }
}

// export default Round