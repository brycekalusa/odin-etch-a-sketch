const gridContainer = document.querySelector('#grid-container');
const submitBtn = document.querySelector('#submit-btn');
const resetBtn = document.querySelector('#reset-btn');

submitBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    let gridSize = document.querySelector('input').value;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');

        gridContainer.appendChild(gridCell);

        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 2fr)`;
    
        gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
        })
    }
})

resetBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
})



