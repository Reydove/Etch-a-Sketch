const container = document.getElementById('container');
const newGridButton = document.getElementById('new-grid-btn');
let darkeningLevel = 0;

function createGrid(size) {
  container.innerHTML = '';
  container.style.setProperty('--grid-size', size);

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', handleSquareHover);
    container.appendChild(square);
  }
}

function handleSquareHover(event) {
  const square = event.target;
  const currentColor = square.style.backgroundColor;

  if (currentColor === 'black') {
    return;
  }

  if (darkeningLevel < 10) {
    darkenSquare(square);
  }

  randomizeColor(square);
}

function darkenSquare(square) {
  const currentColor = square.style.backgroundColor;
  const colorValue = getColorValue(currentColor);
  const darkenedColorValue = Math.floor(colorValue - (colorValue * 0.1));
  square.style.backgroundColor = `rgb(${darkenedColorValue}, ${darkenedColorValue}, ${darkenedColorValue})`;
  darkeningLevel++;
}

function randomizeColor(square) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function getColorValue(color) {
  const rgbValues = color.substring(4, color.length - 1).replace(/ /g, '').split(',');
  return parseInt(rgbValues[0]);
}

function generateNewGrid() {
  const gridSize = prompt('Enter the number of squares per side (maximum 100):');
  const parsedGridSize = parseInt(gridSize);

  if (isNaN(parsedGridSize) || parsedGridSize <= 0 || parsedGridSize > 100) {
    alert('Invalid input. Please enter a number between 1 and 100.');
    return;
  }

  darkeningLevel = 0;
  createGrid(parsedGridSize);
}

newGridButton.addEventListener('click', generateNewGrid);
createGrid(16);
