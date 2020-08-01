export default (undercoverNumbers, players) => {
  const withoutUndercover = players.filter(player => {
    // console.log(player.isUndercover)
    return !player.isUndercover
  })

  const hasOnlyCivilians = withoutUndercover.length === players.length

  if (undercoverNumbers * 2 === players.length && !hasOnlyCivilians) {
    return {
      gameIsOver: true,
      whoWon: 'undercover'
    }
  }

  return {
    gameIsOver: hasOnlyCivilians,
    whoWon: hasOnlyCivilians ? 'civilians' : 'undercover'
  }
}