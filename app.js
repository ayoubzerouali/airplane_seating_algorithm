
const seatingArrangement = (seats, passengers) => {
  let seatedPassengers = 0;
  let rows = 0;
  let columns = 0;
  for (let i = 0; i < seats.length; i++) {
    columns = seats[i][0];
    rows = seats[i][1];
    for (let j = 0; j < rows; j++) {
      // create a row element
      const row = document.createElement('div');
      row.classList.add("row");
      for (let k = 0; k < columns; k++) {
        // create a cell element
        const cell = document.createElement('div');
        cell.classList.add("cell");
        if (seatedPassengers >= passengers) {
          break;
        }
        // add the cell to the row
        row.appendChild(cell);
        seatedPassengers++;
      }
      // add the row to the HTML document
      document.body.appendChild(row);
    } 
  }
};

seatingArrangement([[3, 2], [4, 3], [2, 3], [3, 4]], 30);