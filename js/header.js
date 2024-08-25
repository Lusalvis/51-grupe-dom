function header() {
    const headerNav = `
        <header>
            <nav class="navBar">
                <a href="../index.html">Home</a>
                <a href="../services/index.html">Home</a>
                <a href="../team/index.html">Home</a>
            </nav>
        </header>
    `;
    // vieta kur iterpsime headeri
    document.body.insertAdjacentHTML('afterbegin', headerNav);
}

header();