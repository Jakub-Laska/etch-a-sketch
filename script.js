const game = document.querySelector("#game");
const container = document.querySelector("#container");
const rightKnob = document.querySelector("#rightKnob");
const leftKnob = document.querySelector("#leftKnob");
let gridNum = 4;
let selectedColor = "black";
let backgroundColor = "#a7a7a7";
const cells = [];

// grid creation as well as adding every cell into an array
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
};
menu.appendChild(exitBtn);

// color picker
let colorPicker = document.createElement('input');
colorPicker.type = 'color';
menu.appendChild(colorPicker);