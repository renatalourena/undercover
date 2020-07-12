import distributeWords from './distributeWords';


test('should return same list if less than 2 players', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'no-word' },
  ]
  const players = distributeWords(participants)
  
  expect(players).toEqual(participants)
});

test('should shuffle same and return similar list', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'no-word' },
    { id: 2, user: 'Felipe', word: 'no-word' },
    { id: 3, user: 'Vanessa', word: 'no-word' },
  ]
  const players = distributeWords(participants)
  // expect(players).toEqual({})
  expect(players.length).toBe(3)
  expect(players[0]).not.toBeUndefined()
});
