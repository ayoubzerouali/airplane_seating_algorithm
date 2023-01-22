const seatingArrangement = (seats, passengers) => {
  let row = 0;
  let column = 0;
  let aisle = true;
  let window = false;
  let center = false;
  let seatedPassengers = 0;

  while (seatedPassengers < passengers) {
    if (aisle) {
      if (seats[row][column] === 0) {
        seats[row][column] = 1;
        seatedPassengers++;
      }
      column++;
      if (column === seats[row].length) {
        column = 0;
        aisle = false;
        window = true;
      }
    } 
    if (row === seats.length) {
      break;
    }
  }
  return seats;
};

console.log(seatingArrangement([[3, 4], [4, 5], [2, 3], [3, 4]], 20));