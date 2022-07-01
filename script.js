//makes the main grid by getting the grid size input and creating enough divs for each row and columns.
function make_grid() {
  let grid_size = document.getElementsByClassName("grid_size_num")[0].value;
  let main = document.getElementById("main");
  let block_container = document.createElement("div");

  //seting grid size ti min or max if its over or under
  if (grid_size > 100) {
    grid_size = 100;
  } else if (grid_size < 1) {
    grid_size = 1;
  }

  //sets the amount of columns in the grid css.
  block_container.style.gridTemplateColumns = "1fr ".repeat(grid_size);

  //creates the grid divs
  for (let i = 1; i <= grid_size; i++) {
    for (let k = 1; k <= grid_size; k++) {
      let block = document.createElement("div");
      block_container.appendChild(block).className = "block lightgrey";
    }
  }
  //adds the block container and all its child divs to the main div.
  main.appendChild(block_container).className = "block_container";
}

function start_brush(color) {
  let blocks = document.getElementsByClassName("block")
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('mouseover', () => {
      blocks[i].className = "block " + color;
    }, true);
  }
}

function enable_controls() {
  //crate new grid button
  const grid_size_btn = document.getElementsByClassName("grid_size_btn")[0];
  grid_size_btn.addEventListener('click', () => {
    remove_grid();
    make_grid();
    color_changer("red");
  });
  //erase button
  const erase_btn = document.getElementsByClassName("erase_btn")[0];
  erase_btn.addEventListener('click', () => {
    color_changer("lightgrey");
  });
  //Colour buttons
  const red_btn = document.getElementsByClassName("red_btn")[0];
  red_btn.addEventListener('click', () => {
    color_changer("red");
  });
  const green_btn = document.getElementsByClassName("green_btn")[0];
  green_btn.addEventListener('click', () => {
    color_changer("green");
  });
  const blue_btn = document.getElementsByClassName("blue_btn")[0];
  blue_btn.addEventListener('click', () => {
    color_changer("blue");
  });
  const orange_btn = document.getElementsByClassName("orange_btn")[0];
  orange_btn.addEventListener('click', () => {
    color_changer("orange");
  });
  const purple_btn = document.getElementsByClassName("purple_btn")[0];
  purple_btn.addEventListener('click', () => {
    color_changer("purple");
  });
}

//sets the colour preview and starts the "brush" with chosen colour.
function color_changer(color) {
  const chosen_color_preview = document.getElementsByClassName("chosen_color_preview")[0];
  chosen_color_preview.style.backgroundColor = color;
  start_brush(color);
}

//removes the old grid. called before making a new grid.
function remove_grid() {
  const old_grid = document.getElementsByClassName("block_container")[0];
  old_grid.remove();
}

make_grid()
enable_controls()
start_brush("red")
