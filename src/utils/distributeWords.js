import shuffle from './shuffle'
import pickupPair from './pickupPair'

export default (participants) => {
  const pair = pickupPair()

  if (participants.length < 2) {
    return participants
  }
  let shuffledPlayers = shuffle(participants)
  let isFirst = true

  const players = shuffledPlayers.map(player => {
    if (isFirst) {
      player.word = pair.undercover
      player.isUndercover = true
      isFirst = false
    } else {
      player.word = pair.civilians
      player.isUndercover = false
    }

    return player
  })

  return shuffle(players)
}