const container = document.querySelector('#container');
const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']


for (let i = 0; i < 500; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    container.appendChild(square);

    square.addEventListener('mouseover', function () {
        mouseOn(square);
    })

    square.addEventListener('mouseout', function () {
        square.style.background = "#1d1d1d";
    })

}

function mouseOn(e) {
    let randomColor = Math.floor(Math.random() * color.length);
    const colors = color[randomColor];
    e.style.background = colors;
}