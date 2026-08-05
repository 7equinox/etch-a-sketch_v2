const DEF_SQ_PER_SIDE = 16;

const objContainer = document.querySelector('.container');
const objNewGridBtn = document.querySelector('button');

function createGrid(intSqPerSide) {
    for(let intCell = 0; intCell < intSqPerSide ** 2; intCell++) {
        const objCell = document.createElement('div');
        objCell.classList.add('cell');
        objContainer.appendChild(objCell);
    }
}

function setHoverEffect() {
    const objCells = document.querySelectorAll('.cell');

    objCells.forEach(objCell => {
        objCell.addEventListener('mouseenter', (event) => {
            objCell.style['background-color'] = 'yellow';
        });
    });
}

function deleteGrid() {
    const objCells = document.querySelectorAll('.cell');
    objCells.forEach(objCell => {
        objCell.remove();
    });
}

function isNumFrom1to100(intNum) {
    return intNum >= 1 && intNum <= 100;
}

objNewGridBtn.addEventListener('click', (event) => {
    let intSqPerSide = 0;
    while(!isNumFrom1to100(intSqPerSide)) {
        intSqPerSide = parseInt(prompt("Enter custom number of squares per side (MAX = 100):"));
    }
    deleteGrid();
    createGrid(intSqPerSide);
    setHoverEffect();
});

createGrid(DEF_SQ_PER_SIDE);
setHoverEffect();