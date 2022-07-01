function make_grid() {
  // remove_grid();
  let grid_size = document.getElementsByClassName("grid_size_num")[0].value;
  let main = document.getElementById("main");
  let block_container = document.createElement("div");

  for (let i = 1; i <= grid_size; i++) {
    for (let k = 1; k <= grid_size; k++) {
      let block = document.createElement("div");
      block_container.appendChild(block).className = "block lightgrey";
    }
  }
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
}

function color_changer(color) {
  const chosen_color_preview = document.getElementsByClassName("chosen_color_preview")[0];
  chosen_color_preview.style.backgroundColor = color;
  start_brush(color);
}

function remove_grid() {
  const old_grid = document.getElementsByClassName("block_container")[0];
  old_grid.remove();
  // let y = old_grid.length;
  // for (let i = 0; i < y; i++) {
  //   old_grid[0].remove();
  // }
}

make_grid()
enable_controls()
start_brush("red")
