import pickupPair from './pickupPair';


test('should pickup a different pair', () => {
  const pair1 = pickupPair()
  const pair2 = pickupPair()
  
  expect(pair1).not.toEqual(pair2)
});
