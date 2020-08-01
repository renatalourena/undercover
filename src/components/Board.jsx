import React, { useState } from 'react'
import Card from './Card'
import './Board.css'
import eliminateUser from '../utils/eliminateUser'
import analyzeGame from '../utils/analyzeGame'
import Modal from './Modal'

export default props => {

  const [players, setPlayers] = useState(props.participants)
  const [showCivilianModal, setShowCivilianModal] = useState(false)
  const [showGameOverModal, setShowGameOverModal] = useState(false)
  const [winner, setWinner] = useState('undefined')

  const checkGameStatus = (user) => {
    const updatedPlayers = eliminateUser(user, players)
    setPlayers(updatedPlayers)
    
    const gameStatus = analyzeGame(props.undercoverNumber, updatedPlayers)

    if (!gameStatus.gameIsOver) {
      setShowCivilianModal(true)
    } else {
      setWinner(gameStatus.whoWon)
      setShowGameOverModal(true)

    }
  }

  const closeCivilianModal = () => {
    setShowCivilianModal(false)
  }

  const closeGameOverModal = () => {
    setShowGameOverModal(false)
    // window.location.reload(false);
  }

  let composedCards = props.participants.map(participant => {
    return (
      <div key={participant.id}>
        <Card user={participant.user} word={participant.word} check={checkGameStatus} />
      </div>
    )
  })

  return (
    <div className='board'>
      <div>
        <Modal show={showCivilianModal} handleClose={closeCivilianModal}>
          <p>Oh no! You eliminated a civilian!</p>
        </Modal>
        <Modal show={showGameOverModal} handleClose={closeGameOverModal}>
          <p>Game is over: <strong>{winner} won!</strong></p>
        </Modal>
      </div>
      <div className='cards'>
        {composedCards}
      </div>
    </div>
  )
}