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

function addGuestPoints(points) {
    guestScore += points;
    updateScoreBoard();
}

function nextQuarter() {
    quartersScores.push({
        quarter: quarter,
        home: homeScore,
        guest: guestScore,
    });


}


document.getElementById('home-1pt').addEventListener('click', () => addHomePoints(1));
document.getElementById('home-2pt').addEventListener('click', () => addHomePoints(2));
document.getElementById('home-3pt').addEventListener('click', () => addHomePoints(3));


document.getElementById('guest-1pt').addEventListener('click', () => addGuestPoints(1));
document.getElementById('guest-2pt').addEventListener('click', () => addGuestPoints(2));
document.getElementById('guest-3pt').addEventListener('click', () => addGuestPoints(3));