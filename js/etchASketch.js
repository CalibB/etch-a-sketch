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

const clearBtn = document.querySelector('.clear__btn');

clearBtn.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = '#EAFDFC';
    })
});

// Change Grid functionality

const changeGridBtn = document.querySelector('.custom__btn');

changeGridBtn.addEventListener('click', () => {
    let newDimensions = Number(prompt("Enter a number for your new dimensions up to 100."));

    if (newDimensions > 100) {
        newDimensions = Number(prompt('Please enter a number less than 100.'));
    } else {

        // Remove existing grid

        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        };

        // Set new grid

        gridDimensions = newDimensions * newDimensions;

        grid.style.gridTemplateColumns = `repeat(${newDimensions}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${newDimensions}, 1fr)`;

        for (let i = 1; i <= gridDimensions; i++) {
            const square = document.createElement('div');
            square.classList.add("square");
            grid.appendChild(square);
        }

        // Adding event listeners again for colour change
        
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
    }
})