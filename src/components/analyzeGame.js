export default (undercover, undercoverNumbers, players) => {
  if (undercoverNumbers  * 2 === players.length) {
    return {
      gameIsOver: true,
      whoWon: 'undercover'
    }
  }
  
  const withoutUndercover = players.filter(player => player.word !== undercover)
  
  const hasOnlyCivilians = withoutUndercover.length === players.length

  return {
      gameIsOver: hasOnlyCivilians,
      whoWon: hasOnlyCivilians ? 'civilians' : 'undercover'
    }
}