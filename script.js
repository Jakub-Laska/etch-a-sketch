const game = document.querySelector('#game');
let gridNum = 10;

function createGrid() {
    for (let i = 0; i < gridNum; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

            for (let j = 1; j <= gridNum; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
            };
        game.appendChild(row);
    };
};
createGrid();

