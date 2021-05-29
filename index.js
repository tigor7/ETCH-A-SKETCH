createGrid()
function createGrid(size = 16) {
    for (let i = 0; i < size * size ; i++){
        const container = document.querySelector('.container')
        container.setAttribute('style', `--size: ${size}`);
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.addEventListener('mouseover', (e) => {
            colorRed = Math.floor(Math.random() * 256)
            colorGreen = Math.floor(Math.random() * 256)
            colorBlue = Math.floor(Math.random() * 256)
            cell.style.background = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
        })
        container.appendChild(cell)
    }
}
const clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener('click', () => {
    const container = document.querySelector('.container')
    //gets the size of the grid from the atribute of the container which is passed at the start of the page or when is changed by the sizeBtn 
    string = container.getAttribute('style')
    size = parseInt(string.slice(-2))
    
    container.innerHTML = ''
       
    createGrid(size)
})
const sizeBtn = document.querySelector('#size-btn')
sizeBtn.addEventListener('click', ()=>{
    let size
    do {
        size = prompt('Insert the size of the grid (number max 64)')
    } while (typeof size == 'number' || size > 64)
    document.querySelector('.container').innerHTML = ''
    createGrid(size)
})
