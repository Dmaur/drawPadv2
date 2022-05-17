window.onload(makeGrid(16));
// make the drawing grid
function makeGrid(size) {
  const drawBox = document.getElementById("drawBox");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.style =
      "display:flex; flex-wrap: wrap; margin: 0px; padding: 0px; height: 100%; width: 100%;";
    row.className = "row";
    row.id = "row-" + (i + 1);
    drawBox.appendChild(row);
    for (let j = 0; j <= size; j++) {
      const col = document.createElement("div");
      col.className = "col";
      col.style = "margin: 0px; padding: 0px; width: 100%;";
      //col.innerText = 0 + j;
      row.appendChild(col);
    }
  }
}
