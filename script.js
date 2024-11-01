const game = document.querySelector("#game");
const container = document.querySelector("#container");
const rightKnob = document.querySelector("#rightKnob");
const leftKnob = document.querySelector("#leftKnob");
let gridNum = 0;
let selectedColor = "black";
let backgroundColor = "#a7a7a7";
let cells = [];

// grid creation as well as adding every cell into an array and hover effect
function createGrid() {
  for (let i = 0; i < gridNum; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 1; j <= gridNum; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cells.push(cell);
      row.appendChild(cell);
    }
    game.appendChild(row);
  }
  // hover effect
  cells.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.backgroundColor = selectedColor;
    });
  });
};

// grid remove
function removeGrid() {
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }
};

// clear
rightKnob.addEventListener("click", clear);
function clear() {
  cells.forEach((element) => {
    element.style.backgroundColor = backgroundColor;
  });
}

// menu popup
let menu = document.createElement('div');
menu.classList.add('menu');

leftKnob.addEventListener("click", () => {
  container.style.opacity = ".3";
  selectedColor = backgroundColor;
  clear();
  showMenu();
  removeGrid();
});

function showMenu() {
    document.body.appendChild(menu);
};

// menu exit btn
let exitBtn = document.createElement('button');
exitBtn.classList.add('exitBtn');
exitBtn.addEventListener('click', hideMenu);

function hideMenu() {
    document.body.removeChild(menu);
    selectedColor = colorPicker.value;
    container.style.opacity = "1";
    container.style.backgroundColor = selectedColor;
    document.body.style.backgroundColor = selectedColor;
    menu.style.backgroundColor = selectedColor;
};
menu.appendChild(exitBtn);

// color picker
let colorPicker = document.createElement('input');
colorPicker.classList.add('colorPicker');
colorPicker.type = 'color';
menu.appendChild(colorPicker);

//menu select grid
let gridSelect = document.createElement('button');
gridSelect.classList.add('gridSelect');
gridSelect.textContent = 'select grid size';
gridSelect.addEventListener('click', gridSelectDropDown);
let gridSelectFlag = 1;
let option16, option32, option64, option128;

function gridSelectDropDown() {
  removeGrid()
  if (gridSelectFlag === 1) {
    option16 = document.createElement('button');
    option16.classList.add('gridOption');
    option16.textContent = '16 x 16';
    option16.addEventListener('click', () => {
      gridNum = 16;
      menuRemoveChild();
      createGrid();
      gridSelectFlag = 1;
    });

    option32 = document.createElement('button');
    option32.classList.add('gridOption');
    option32.textContent = '32 x 32';
    option32.addEventListener('click', () => {
      gridNum = 32;
      menuRemoveChild();
      createGrid();
      gridSelectFlag = 1;
    });

    option64 = document.createElement('button');
    option64.classList.add('gridOption');
    option64.textContent = '64 x 64';
    option64.addEventListener('click', () => {
      gridNum = 64;
      menuRemoveChild();
      createGrid();
      gridSelectFlag = 1;
    });

    option128 = document.createElement('button');
    option128.classList.add('gridOption');
    option128.textContent = '128 x 128';
    option128.addEventListener('click', () => {
      gridNum = 128;
      menuRemoveChild();
      createGrid();
      gridSelectFlag = 1;
    });

    menuAppendChild();
    gridSelectFlag = 0;

  } else if (gridSelectFlag === 0) {
    menuRemoveChild();
    gridSelectFlag = 1;
  };
};

function menuAppendChild() {
  menu.appendChild(option16);
  menu.appendChild(option32);
  menu.appendChild(option64);
  menu.appendChild(option128);
};
function menuRemoveChild() {
  menu.removeChild(option16);
  menu.removeChild(option32);
  menu.removeChild(option64);
  menu.removeChild(option128);
}

menu.appendChild(gridSelect);