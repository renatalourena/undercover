import pairs from '../pairs'

export default () => {
  const id = parseInt(Math.random() * pairs.length)

  return pairs[id]
}