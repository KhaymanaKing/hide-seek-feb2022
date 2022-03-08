// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const shedEl = document.getElementById('shed-guesses');
const shedCorrectEl = document.getElementById('shed-correct');


const treeButton = document.getElementById('tree-button');
const treeEl = document.getElementById('tree-guesses');
const treeCorrectEl = document.getElementById('tree-correct');

const boulderButton = document.getElementById('boulder-button');
const boulderEl = document.getElementById('boulder-guesses');
const boulderCorrectEl = document.getElementById('boulder-correct');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// console.log(shedCorrectEl, boulderCorrectEl, treeCorrectEl);


let correctGuesses = 0;
let totalGuesses = 0;

let treeHistory = 0; 
let shedHistory = 0; 
let boulderHistory = 0;

let treeCorrectHistory = 0;
let shedCorrectHistory = 0;
let boulderCorrectHistory = 0;

shedButton.addEventListener('click', () => {
    shedHistory ++;
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('shed', correctSpot);
});
treeButton.addEventListener('click', () => {
    treeHistory ++;
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot();

    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('tree', correctSpot);
});

boulderButton.addEventListener('click', () => {
    boulderHistory ++;
    // get a random item to call the 'correct spot'
    const correctSpot = getRandomHidingSpot();

    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
    handleGuess('boulder', correctSpot);
});


function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);
    // use the random index above and the array of hidingPlaces to get a random hiding place string
   
    // return that random hiding place string
    return hidingPlaces[index];
}

function handleGuess(userGuess, correctSpot) {
    // first, right after clicking, we need to remove the emoji face from the previous hiding place that way we don't end up with more than one emoji face
    // we can do that by removing the .face class from all containers
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // then increment the guesses
    totalGuesses ++;
    // then use getElementById and the correctSpot string to grab the appropriate container from the DOM
    const hidingFace = document.getElementById(`${correctSpot}-container`);    
    // then add the .face css class to that element so that the face shows up
    hidingFace.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot){
        correctGuesses ++;
    }
    if (correctSpot === 'shed'){
        shedCorrectHistory ++;
    } else if (correctSpot === 'tree'){
        treeCorrectHistory ++;
    } else if (correctSpot === 'boulder'){
        boulderCorrectHistory ++;
    }

    // update the DOM to show the new value of wins, losses and total guesses to the user
    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    //count of buttons presses
    shedEl.textContent = shedHistory;
    treeEl.textContent = treeHistory;
    boulderEl.textContent = boulderHistory;
    //count of correct guesses 
    shedCorrectEl.textContent = shedCorrectHistory;
    treeCorrectEl.textContent = treeCorrectHistory;
    boulderCorrectEl.textContent = boulderCorrectHistory;
}