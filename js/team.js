const mainListDOM = document.getElementsByTagName('main');

if (mainListDOM.length === 0) {
    console.error('Nepavyko rasti "main" elemento');
} else {
    const mainDOM = mainListDOM[0];
    const teamHTML = `
        <h1>Meet Our Team</h1>
        <div class="team">
            <div class="teamMember">
                <img src="https://techtrickseo.com/wp-content/uploads/2016/09/Funny-Avatar-Mr-Bean-Smiling-Photoshop-Image.jpg" alt="huh?">
                <h3>Avatar Bean</h3>
                <p>CEO</p>
            </div>
            <div class="teamMember">
                <img src="https://marmureanu.ro/wp-content/uploads/2020/10/programming-is-not-stressful-at-all-dave-26-years-old-60188433.png" alt="Easy">
                <h3>Mr. Dave</h3>
                <p>Developer</p>
            </div>
            <div class="teamMember">
                <img src="https://i.pinimg.com/originals/2f/54/a4/2f54a413b5a75142be15566f687d2381.jpg" alt="Will make it clean and tidy">
                <h3>Mr. Clean</h3>
                <p>Lead Designer</p>
            </div>
            <div class="teamMember">
                <img src="https://i1.sndcdn.com/artworks-TQhWAq8i3nEUml2S-sdvXNQ-t500x500.jpg" alt="what is marketing">
                <h3>Mr. Judesys</h3>
                <p>Marketing Manager</p>
            </div>
        </div>
    `;

    mainDOM.innerHTML = teamHTML;
}
