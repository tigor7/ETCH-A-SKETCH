for (let i = 0; i < 256 ; i++){
    const container = document.querySelector('.container')
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

