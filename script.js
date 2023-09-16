//container for the divs
const container = document.querySelector('body');
const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
container.appendChild(containerDiv);

var numberOfSquares = parseInt(window.prompt("How big should it be?"));

//variable for color of every square
let color = '#000000'


//clear button 
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clear)

//color buttons

const blackButton = document.getElementById('black')
blackButton.addEventListener('click', () => {
    color = 'black'
})

const redButton = document.getElementById('red')
redButton.addEventListener('click', () => {
    color = 'red'
})

const blueButton = document.getElementById('blue')
blueButton.addEventListener('click', () => {
    color = 'blue'
})

const yellowButton = document.getElementById('yellow')
yellowButton.addEventListener('click', () => {
    color = 'yellow'
})

const whiteButton = document.getElementById('eraser')
whiteButton.addEventListener('click', () => {
    color = 'white'
})



//creating divs 
if(numberOfSquares <= 100){
for (let i = 0; i !== numberOfSquares; i++) {
  const contentColumn = document.createElement('div');
  contentColumn.classList.add('contentColumn');
  containerDiv.appendChild(contentColumn);
  

  for (let j = 0; j !== numberOfSquares; j++) {
    const contentRow = document.createElement('div');
    contentRow.classList.add('contentRow');
    contentColumn.appendChild(contentRow);


    
    contentRow.addEventListener('mouseover', () => {
        contentRow.style.backgroundColor = color;
        console.log(contentRow.style.backgroundColor)
    })

    }
}
}
else {window.alert("Number cant be higher than 100")}


function clear(){
    const toBeCleared = document.querySelectorAll('.contentRow')
    toBeCleared.forEach((contentRow) => {
        contentRow.style.backgroundColor = 'white';
    })
    
}
