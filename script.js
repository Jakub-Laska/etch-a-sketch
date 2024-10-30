const game = document.querySelector('#game');
const rightKnob = document.querySelector('#rightKnob');
let gridNum = 2;
let selectedColor = 'red';
let backgroundColor = '#a7a7a7';
const cells = [];

// grid creation as well as adding every cell into an array
    function createGrid() {
        for (let i = 0; i < gridNum; i++) {
            let row = document.createElement('div');
            row.classList.add('row');

                for (let j = 1; j <= gridNum; j++) {
                    let cell = document.createElement('div');
                    cell.classList.add('cell');
                    cells.push(cell);
                    row.appendChild(cell);
                };
            game.appendChild(row);
        };
    };
createGrid();

// hover effect
    cells.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = selectedColor;
        });
    });  


// clear
rightKnob.addEventListener('click', () => {
    cells.forEach(element => {
        element.style.backgroundColor = backgroundColor;
    })
});