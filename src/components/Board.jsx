import React from 'react'
import Card from './Card'
import './Board.css'

export default props => {
    let composedCards = props.participants.map(participant => {
      return (
        <div key={participant.id}>
          <Card user={participant.user} word={participant.word} />
        </div>
      )
    })


    return (
      <div className='board'>
        <div className='cards'>
          {composedCards}
        </div>
      </div>
    )
}