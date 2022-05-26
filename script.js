window.onload = () => {
    makeSelected()
    generateColors()
    createGrid(5)
    generateEvents()

    const generateBtn = document.querySelector('#generate-board');
    generateBtn.addEventListener('click', () => {
        const size = document.querySelector('#board-size').value;
        if(size <= 0 || size === '') {
            alert('Board inválido!')
        } else if(size > 50) {
            createGrid(50)
        } else if(size < 5) {
            createGrid(5)
        }else{
            createGrid(size)
        }
    })
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateColors(){
    const allColors = document.querySelectorAll('.color')
    allColors[0].style.backgroundColor = 'black'
    allColors[1].style.backgroundColor = getRandomColor();
    allColors[2].style.backgroundColor = getRandomColor();
    allColors[3].style.backgroundColor = getRandomColor();
    allColors[4].style.backgroundColor = getRandomColor();
}

function generateEvents(){
    let colors = document.querySelectorAll('.color')
    let colorPallet = document.querySelector('#pixel-board')
    let clearBtn = document.querySelector('#clear-board')

    colors.forEach(color => {color.addEventListener('click', changeColor)})
    colorPallet.addEventListener('click', paintPixel)
    clearBtn.addEventListener('click', clearBoard)
}

function makeSelected(){
    const colors = document.querySelectorAll('.color');
    colors[0].classList.add('selected');
}

function createGrid(params){
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';
    for(let i = 0; i < params * params; i++){
        const makePixel = document.createElement('div');
        makePixel.classList.add('pixel');
        pixelBoard.appendChild(makePixel);
    }
    pixelBoard.style.gridTemplateColumns = `repeat(${params}, 1fr)`;
}

function changeColor(event){
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

function paintPixel(event){
    if(event.target.classList.contains('pixel')){
        const colorSelected = document.querySelector('.selected');
        event.target.style.backgroundColor = colorSelected.style.backgroundColor;
    }
}

function clearBoard(){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    })
}
