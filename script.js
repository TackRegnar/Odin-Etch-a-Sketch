let main = document.getElementById("main");
let block_container = document.createElement("div")

for (let i = 1; i <= 16; i++) {
  for (let k = 1; k <= 16; k++) {
    let block = document.createElement("div");
    block_container.appendChild(block).className = "block";
    console.log("k =" + k);
  }
}
main.appendChild(block_container).className = "block_container";
