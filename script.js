const GRID_SIZE_SQ_PX = 16 * 50;
const DEF_SQ_PER_SIDE = 16;

const objContainer = document.querySelector('.container');
const objNewGridBtn = document.querySelector('button');

function calcCellSize(intPx) {
    return GRID_SIZE_SQ_PX / intPx;
}

function randNumFrom0to255() {
    return Math.floor(Math.random() * 256);
}

function isNumFrom1to100(intPrompt) {
    return intPrompt >= 1 && intPrompt <= 100;
}

function createGrid(intSqPerSide) {
    const intSidePx = calcCellSize(intSqPerSide);

    for(let intCell = 0; intCell < intSqPerSide ** 2; intCell++) {

        const objCell = document.createElement('div');

        objCell.classList.add('cell');
        objCell.style['min-width'] = `${intSidePx}px`;
        objCell.style['min-height'] = `${intSidePx}px`;

        objContainer.appendChild(objCell);
    }
}

function setHoverEffect() {
    const objCells = document.querySelectorAll('.cell');

    let intRedVal = 0;
    let intGreenVal = 0;
    let intBlueVal = 0;

    objCells.forEach(objCell => {
        objCell.addEventListener('mouseenter', (event) => {
            intRedVal = randNumFrom0to255();
            intGreenVal = randNumFrom0to255();
            intBlueVal = randNumFrom0to255();

            objCell.style['background-color'] = `rgb(${intRedVal}, ${intGreenVal}, ${intBlueVal})`;
        });
    });
}

function deleteGrid() {
    const objCells = document.querySelectorAll('.cell');
    objCells.forEach(objCell => {
        objCell.remove();
    });
}

objNewGridBtn.addEventListener('click', (event) => {
    let intSqPerSide = 0;

    while(!isNumFrom1to100(intSqPerSide)) {
        const strPrompt = prompt("Enter custom number of squares per side (MAX = 100):");

        if(strPrompt === null) {
            return;
        }

        intSqPerSide = parseInt(strPrompt);
    }

    deleteGrid();
    createGrid(intSqPerSide);
    setHoverEffect();
});

createGrid(DEF_SQ_PER_SIDE);
setHoverEffect();