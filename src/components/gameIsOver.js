export default (undercover, undercoverNumbers, players) => {
  if (undercoverNumbers  * 2 === players.length) {
    return true;
  }
  
  const withoutUndercover = players.filter(player => player.word !== undercover)
  
  const hasOnlyCivilians = withoutUndercover.length === players.length

  return hasOnlyCivilians
}