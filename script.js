function make_grid() {
  let main = document.getElementById("main");
  let block_container = document.createElement("div");

  for (let i = 1; i <= 16; i++) {
    for (let k = 1; k <= 16; k++) {
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
  const paint_btn = document.getElementsByClassName("paint_btn")[0];
  paint_btn.addEventListener('click', () => {
    start_brush("green");
  });
  const green_btn = document.getElementsByClassName("green_btn")[0];
  green_btn.addEventListener('click', () => {
    start_brush("green");
  });
  const erase_btn = document.getElementsByClassName("erase_btn")[0];
  erase_btn.addEventListener('click', () => {
    start_brush("lightgrey");
  });
}

make_grid()
enable_controls()
start_brush("red")
