import shuffle from './shuffle'
import pairs from '../pairs'

export default (participants) => {
  if (participants.length < 2) {
    return participants
  }
  let shuffledPlayers = shuffle(participants)
  let isFirst = true

  const players = shuffledPlayers.map(player => {
    if (isFirst) {
      player.word = pairs[0].undercover
      isFirst = false
    } else {
      player.word = pairs[0].civilians
    }

    return player
  })

  return shuffle(players)
}