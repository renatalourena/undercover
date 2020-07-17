export default (undercover, undercoverNumbers, players) => {
  if (undercoverNumbers  * 2 === players.length) {
    return true;
  }
  
  const withoutUndercover = players.filter(player => player.word !== undercover)

  return withoutUndercover.length === players.length
}