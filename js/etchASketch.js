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

function randomNum() {
    return (Math.floor(Math.random() * 100));
};

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        let randoNum1 = randomNum();
        let randoNum2 = randomNum();
        let randoNum3 = randomNum();

        if (e.ctrlKey) {
            // Do nothing as a way for better improvement on the grid
        } else {
            e.target.style.backgroundColor = `rgb(${randoNum1}, ${randoNum2}, ${randoNum3})`;
        }  
    })
});