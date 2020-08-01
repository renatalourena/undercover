export default (username, players) => {
  return players.filter(player => player.user !== username)
}