window.onload = function () {
  setTimeout(makeGrid(16), 1000);
};
const drawBox = document.getElementById("drawBox");
const size = document.getElementById("size");
const reset = document.getElementById("reset");

let changeColor = function (e) {
  if ( document.getElementById("erase").clicked == true){
    e.target.style.backgroundColor = "white";
  } else if (document.getElementById("colorful").clicked == true){
    e.target.style.backgroundColor  = "pink";
  }else {
  e.target.style.backgroundColor = document.querySelector(
    "input[name='colorSelector']"
  ).value;
  }
};
// make the drawing grid
function makeGrid(grid) {
  for (let i = 0; i < grid; i++) {
    const row = document.createElement("div");
    row.style =
      "display:flex; flex-wrap: wrap; margin: 0px; padding: 0px; height: 100%; width: 100%;";
    row.className = "row";
    row.id = "row-" + (i + 1);
    drawBox.appendChild(row);
    for (let j = 0; j <= grid; j++) {
      const col = document.createElement("div");
      col.className = "col";
      col.addEventListener("mouseover", changeColor);
      col.style = "margin: 0px; padding: 0px; width: 100%;";
      row.appendChild(col);
    }
  }
}
const resetBoard = function () {
  // clear board
  drawBox.textContent = "";
  // loop through
  makeGrid(document.querySelector("input[name='sizeSelect']:checked").value);
};
