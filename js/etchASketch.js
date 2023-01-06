const grid = document.querySelector(".grid");
let width = 16;
let height = 16;
let gridDimensions = width * height;

// Setting columns and rows for the grid

grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;

// Creating the grid

for (let i = 1; i <= gridDimensions; i++) {
    const square = document.createElement('div');
    square.classList.add("square");
    grid.appendChild(square);
}