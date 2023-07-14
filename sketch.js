const container = document.getElementById('container');
const newGridButton = document.getElementById('new-grid-btn');

function createGrid(size) {
  container.innerHTML = '';
  container.style.setProperty('--grid-size', size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

function handleSquareHover(event) {
  const square = event.target;
  square.classList.add('hovered');
}

function handleSquareLeave(event) {
  const square = event.target;
  square.classList.remove('hovered');
}

function generateNewGrid() {
  const gridSize = prompt('Enter the number of squares per side (maximum 100):');
  const parsedGridSize = parseInt(gridSize);

  if (isNaN(parsedGridSize) || parsedGridSize <= 0 || parsedGridSize > 100) {
    alert('Invalid input. Please enter a number between 1 and 100.');
    return;
  }

  createGrid(parsedGridSize);
}

newGridButton.addEventListener('click', generateNewGrid);
container.addEventListener('mouseover', handleSquareHover);
container.addEventListener('mouseout', handleSquareLeave);

createGrid(16);

  