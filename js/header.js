import { capitalize } from "./capitalize.js";

function header() {

    const bodyDOM = document.body;

    const headerHTML = `
        <header>
            <nav class="navBar">
                <img src="../codingh.png" alt="logo">
                <a href="../index.html">Home</a>
                <a href="#" id="custom1">About</a>
                <a href="../services/index.html">Services</a>
                <a href="#" id="custom2">Testimonials</a>
                <a href="../team/index.html">Team</a>
                <a href="#" id="custom3">Get Free</a>
            </nav>
        </header>
        
        <audio id="info1" src="../custom/info1.mp3"></audio>
        <audio id="info2" src="../custom/info2.mp3"></audio>
        <audio id="info3" src="../custom/info3.mp3"></audio>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);


document.getElementById('custom1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('info1').play();
})

document.getElementById('custom2').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('info2').play();
})

document.getElementById('custom3').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('info3').play();
});
}

header();