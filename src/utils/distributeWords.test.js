import distributeWords from './distributeWords';


test('should return same list if less than 2 players', () => {
  let participants = [
    { id: 1, user: 'Renata'},
  ]

  const players = distributeWords(participants)
  
  expect(players).toEqual(participants)
});

test('should shuffle same and return similar list', () => {
  let participants = [
    { id: 1, user: 'Renata'},
    { id: 2, user: 'Felipe'},
    { id: 3, user: 'Vanessa'},
  ]

  const players = distributeWords(participants)

  expect(players.length).toBe(3)
  expect(players[0]).not.toBeUndefined()
});
