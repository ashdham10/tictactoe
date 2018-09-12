document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

let boxes = document.querySelectorAll(".top, .bottom, .middle, .center");

console.log(boxes);

boxes.forEach(function(box) {
    box.addEventListener("click", boxClicked)
});

let currentPlay = 'X';
let playerOne = 'X';
let playerTwo = 'O';
let winningMoves = [
    ['.1', '.2', '.3'],
    ['.4', '.5', '.6'],
    ['.7', '.8', '.9'],
    ['.1', '.5', '.9'],
    ['.3', '.5', '.7'],
    ['.1', '.4', '.7'],
    ['.2', '.5', '.8'],
    ['.3', '.6', '.9']
];

function boxClicked(x){
if(currentPlay === 'X') {
    currentPlay = 'O';
    x.target.textContent = currentPlay;
    x.target.classList += 'O';
   
} else {
    currentPlay = 'X';
    x.target.textContent = currentPlay;
    x.target.classList += 'X';
} };

});