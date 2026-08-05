const MAX_CELLS = 16 * 16;

const objContainer = document.querySelector(".container");

for(let intCell = 0; intCell < MAX_CELLS; intCell++) {
    const objCell = document.createElement("div");
    objCell.classList.add("cell");
    objContainer.appendChild(objCell);
}

const objCells = document.querySelectorAll(".cell");

objCells.forEach(objCell => {
    objCell.addEventListener("mouseenter", (event) => {
        objCell.style["background-color"] = "yellow";
    });
});