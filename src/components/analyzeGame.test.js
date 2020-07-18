// import eliminateAndCheck from './eliminateAndCheck'
import analyzeGame from './analyzeGame'

test('game is not over if undercover still among participants', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'undercover', isUndercover: true },
    { id: 2, user: 'Felipe', word: 'civilian', isUndercover: false },
    { id: 3, user: 'Vanessa', word: 'civilian', isUndercover: false },
  ]

  expect(analyzeGame(1, participants).gameIsOver).toBe(false)
});

test('game is over if no undercover and only 2 players', () => {
  let participants = [
    { id: 4, user: "c", word: "cloud", "isUndercover": false },
    { id: 5, user: "d", word: "cloud", "isUndercover": false }]

  expect(analyzeGame(1, participants).gameIsOver).toBe(true)
  expect(analyzeGame(1, participants).whoWon).toBe('civilians')
});

test('game is over if no undercover', () => {

  let participants = [
    { id: 1, user: 'Renata', word: 'undercover', isUndercover: false },
    { id: 2, user: 'Felipe', word: 'civilian', isUndercover: false },
    { id: 3, user: 'Vanessa', word: 'civilian', isUndercover: false },
  ]

  expect(analyzeGame(1, participants).gameIsOver).toBe(true)
  expect(analyzeGame(1, participants).whoWon).toBe('civilians')
});



test('game is over if is a tie', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'undercover', isUndercover: true },
    { id: 3, user: 'Felipe', word: 'civilian', isUndercover: false },
  ]

  expect(analyzeGame(1, participants).gameIsOver).toBe(true)
  expect(analyzeGame(1, participants).whoWon).toBe('undercover')
});


test('game is over if undercover are equal in number as participants', () => {
  let participants = [
    { id: 1, user: 'Renata', word: 'undercover', isUndercover: true },
    { id: 2, user: 'Lourena', word: 'undercover', isUndercover: true },
    { id: 3, user: 'Felipe', word: 'civilian', isUndercover: false },
    { id: 4, user: 'Santiago', word: 'civilian', isUndercover: false },
  ]

  expect(analyzeGame(2, participants).gameIsOver).toBe(true)
  expect(analyzeGame(2, participants).whoWon).toBe('undercover')
});

