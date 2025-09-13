    const burger = document.querySelector('.burger');
    const nav = document.querySelector('header nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

function toggleDarkMode() {
    const toggle = document.querySelector('.dark-mode-switch');
    toggle.classList.toggle('active'); // fait bouger le cercle
    document.body.classList.toggle('dark-mode'); // change le thème
}