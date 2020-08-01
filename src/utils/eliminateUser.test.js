import eliminateUser from './eliminateUser'


test('should  eliminate one user from list if exist', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'no-word' },
    { id: 2, user: 'Felipe', word: 'no-word' },
    { id: 3, user: 'Vanessa', word: 'no-word' },
  ]
  const players = eliminateUser('Renata', participants)
  
  expect(players).toEqual([
    { id: 2, user: 'Felipe', word: 'no-word' },
    { id: 3, user: 'Vanessa', word: 'no-word' },
  ])
});


test('should  not eliminate if does not exist', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'no-word' },
    { id: 2, user: 'Felipe', word: 'no-word' },
    { id: 3, user: 'Vanessa', word: 'no-word' },
  ]
  const players = eliminateUser('Rodrigo', participants)
  
  expect(players).toEqual(participants)
});

