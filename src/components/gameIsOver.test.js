// import eliminateAndCheck from './eliminateAndCheck'
import gameIsOver from './gameIsOver'

test('game is not over if undercover still among participants', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'undercover' },
    { id: 2, user: 'Felipe', word: 'civilian' },
    { id: 3, user: 'Vanessa', word: 'civilian' },
  ]

  expect(gameIsOver('undercover', 1, participants)).toBe(false)
});

test('game is over if no undercover', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'civilian' },
    { id: 2, user: 'Felipe', word: 'civilian' },
    { id: 3, user: 'Vanessa', word: 'civilian' },
  ]

  expect(gameIsOver('undercover', 1, participants)).toBe(true)
});

test('game is over if undercover are equal in number as participants', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'undercover' },
    { id: 2, user: 'Lourena', word: 'undercover' },
    { id: 3, user: 'Felipe', word: 'civilian' },
    { id: 4, user: 'Santiago', word: 'civilian' },
  ]

  expect(gameIsOver('undercover', 2, participants)).toBe(true)
});

