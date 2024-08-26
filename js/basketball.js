import { header } from './header.js';
header('basketball');

const calcSectionDOM = document.getElementById('calc');

let homeScore = 0;
let guestScore = 0;
let quarter = 1;
const quartersScores = [];

function updateScoreBoard() {
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
    document.getElementById('quarter').textContent = 'Kelinys: ${quarter}';
}

function addHomePoints(points) {
    homeScore += points;
    updateScoreBoard();
}

function addHomePoints(points) {
    guestScore += points;
    updateScoreBoard();
}

