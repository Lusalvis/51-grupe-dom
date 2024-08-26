

document.addEventListener('DOMContentLoaded', () => {

    const mainContent = document.getElementById('main-content');

    const calcElement = document.createElement('div');
    calcElement.id = 'calc';

    const scoreboardElement = document.createElement('div');
    scoreboardElement.className = 'scoreboard';

    const homeTeamElement = document.createElement('div');
    homeTeamElement.className = 'team';
    homeTeamElement.innerHTML = `
        <img src="https://logowik.com/content/uploads/images/zalgiris-kaunas-new1981.logowik.com.webp" alt="Home Team Logo" class="teamLogo">
        <h2>Home</h2>
        <div id="homeScore">0</div>
        <button id="home-1pt">+1</button>
        <button id="home-2pt">+2</button>
        <button id="home-3pt">+3</button>
        
    `;

    const guestTeamElement = document.createElement('div');
    guestTeamElement.className = 'team';
    guestTeamElement.innerHTML = `
        <img src="https://th.bing.com/th/id/OIP.k7eGrqINrtd4P2Ox_Yp5FQHaFS?rs=1&pid=ImgDetMain" alt="Guest Team Logo" class="teamLogo">
        <h2>Guest</h2>
        <div id="guestScore">0</div>
        <button id="guest-1pt">+1</button>
        <button id="guest-2pt">+2</button>
        <button id="guest-3pt">+3</button>
    `;

    scoreboardElement.appendChild(homeTeamElement);
    scoreboardElement.appendChild(guestTeamElement);

    const controlsElement = document.createElement('div');
    controlsElement.className = 'controls';
    controlsElement.innerHTML = `
        <div id="quarter">Kėlinys 1</div>
        <button id="nextQuarter">KK</button>
    `;

    const scoresTableElement = document.createElement('table');
    scoresTableElement.id = 'scoresTable';
    scoresTableElement.innerHTML = `
        <tr>
            <th>Kėlinys</th>
            <th>Žalgiris</th>
            <th>Rytas</th>
        </tr>
    `;

    calcElement.appendChild(scoreboardElement);
    calcElement.appendChild(controlsElement);
    calcElement.appendChild(scoresTableElement);

    mainContent.appendChild(calcElement);


    let homeScore = 0;
    let guestScore = 0;
    let quarter = 1;

    const homeScoreElement = document.getElementById('homeScore');
    const guestScoreElement = document.getElementById('guestScore');
    const quarterElement = document.getElementById('quarter');
    const scoresTable = document.getElementById('scoresTable');

    const sounds = {
        home1: new Audio('../custom/h1.mp3'),
        home2: new Audio('../custom/h2.mp3'),
        home3: new Audio('../custom/trys.mp3'),
        guest1: new Audio('../custom/g1.mp3'),
        guest2: new Audio('../custom/g2.mp3'),
        guest3: new Audio('../custom/g3.mp3'),
        nextQuarter: new Audio('../custom/svilpukas.mp3'),
    }

    function updateScoreBoard() {
        homeScoreElement.textContent = homeScore;
        guestScoreElement.textContent = guestScore;
        quarterElement.textContent = `Kėlinys ${quarter}`;
    }

    function addHomePoints(points, sound) {
        homeScore += points;
        sound.play()
        updateScoreBoard();
    }

    function addGuestPoints(points, sound) {
        guestScore += points;
        sound.play();
        updateScoreBoard();
    }

    function nextQuarter() {
        sounds.nextQuarter.play();

        const row = scoresTable.insertRow();
        const cellQuarter = row.insertCell(0);
        const cellHome = row.insertCell(1);
        const cellGuest = row.insertCell(2);

        cellQuarter.textContent = `Kėlinys ${quarter}`;
        cellHome.textContent = homeScore;
        cellGuest.textContent = guestScore;

        quarter++;
        homeScore = 0;
        guestScore = 0;
        updateScoreBoard();
    }

    document.getElementById('home-1pt').addEventListener('click', () => addHomePoints(1, sounds.home1));
    document.getElementById('home-2pt').addEventListener('click', () => addHomePoints(2, sounds.home2));
    document.getElementById('home-3pt').addEventListener('click', () => addHomePoints(3, sounds.home3));

    document.getElementById('guest-1pt').addEventListener('click', () => addGuestPoints(1, sounds.guest1));
    document.getElementById('guest-2pt').addEventListener('click', () => addGuestPoints(2, sounds.guest2));
    document.getElementById('guest-3pt').addEventListener('click', () => addGuestPoints(3, sounds.guest3));

    document.getElementById('nextQuarter').addEventListener('click', nextQuarter);

    updateScoreBoard();
});