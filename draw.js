window.onload = function () {
  setTimeout(makeGrid(16), 1000);
};
const drawBox = document.getElementById("drawBox");
const size = document.getElementById("size");
const reset = document.getElementById("reset");
const eraser = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");
let currentMode = "default";

let changeColor = function (e) {
  if (currentMode == "default") {
    e.target.style.backgroundColor = document.querySelector(
      "input[name='colorSelector']"
    ).value;
  } else if (currentMode == "erase") {
    e.target.style.backgroundColor = "white";
  } else if (currentMode == "rainbow") {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    e.target.style.background = rgb;
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
const currentErase = function () {
  currentMode = "erase";
  console.log(currentMode);
};
const currentRainbow = function () {
  currentMode = "rainbow";
  console.log(currentMode);
};
const currentDefault = function() {
  currentMode = "default"
}
