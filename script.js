const tableElement = document.getElementById('table');
const table = document.createElement('table');

for (let i = 0; i < 8; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement('td');
    if ((i + j)%2 === 0) {
        row.appendChild(cell).classList.add('black');
    } else {
        row.appendChild(cell).classList.add('white');
    }
  }
  table.appendChild(row);
}

tableElement.appendChild(table);