import './main.css';

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navBarMenu = document.querySelector('.navBar-menu');

    if (hamburgerMenu && navBarMenu) {
        hamburgerMenu.addEventListener('click', function() {
            navBarMenu.classList.toggle('hide');
            navBarMenu.classList.toggle('show');
        });
    }

    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        const range = end - start;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) {
                startTime = timestamp;
                obj.classList.add("fade-in"); // Add fade-in class when animation starts
            }
            const progress = Math.min((timestamp - startTime) / duration, 1);
            obj.innerText = Math.floor(progress * range + start) + " +";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    animateValue("clients", 0, 300, 2000);
    animateValue("projects", 0, 900, 2000);
    animateValue("awards", 0, 20, 2000);

});
