export default (listOfItems) => {
  let numberOfItems = listOfItems.length, temp, index;

  while (numberOfItems > 0) {
    index = Math.floor(Math.random() * numberOfItems);
    numberOfItems--;
    temp = listOfItems[numberOfItems];
    listOfItems[numberOfItems] = listOfItems[index];
    listOfItems[index] = temp;
  }
  return listOfItems;
}