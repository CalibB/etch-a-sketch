const grid = document.querySelector(".grid");
let topDimension = 16;
let bottomDimension = 16;
let gridDimensions = topDimension * bottomDimension;

// Setting columns and rows for the grid

grid.style.gridTemplateColumns = `repeat(${topDimension}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${bottomDimension}, 1fr)`;

// Creating the grid

for (let i = 1; i <= gridDimensions; i++) {
    const square = document.createElement('div');
    square.classList.add("square");
    grid.appendChild(square);
}