import React, { useState } from 'react'
import Card from './Card'
import './Board.css'
import eliminateUser from './eliminateUser'
import analyzeGame from './analyzeGame'
import Modal from './Modal'

export default props => {

  const [players, setPlayers] = useState(props.participants)
  const [showCivilianModal, setShowCivilianModal] = useState(false)
  const [showUndercoverModal, setShowUndercoverModal] = useState(false)
  const [winner, setWinner] = useState('undefined')

  const checkGameStatus = (user) => {
    const updatedPlayers = eliminateUser(user, players)
    setPlayers(updatedPlayers)

    const gameStatus = analyzeGame(props.undercover, props.undercoverNumber, updatedPlayers)
    if (!gameStatus.gameIsOver) {
      setShowCivilianModal(true)
    } else {
      setWinner(gameStatus.whoWon)
      setShowUndercoverModal(true)

    }
  }

  const closeCivilianModal = () => {
    setShowCivilianModal(false)
  }

  const closeUndercoverModal = () => {
    setShowUndercoverModal(false)
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
        <Modal show={showUndercoverModal} handleClose={closeUndercoverModal}>
          <p>Game is over: <h1><strong>{winner} won!</strong></h1></p>
        </Modal>
      </div>
      <div className='cards'>
        {composedCards}
      </div>
    </div>
  )
}