const navSlide = () => {
    var menu = document.querySelector('.menu');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelectorAll('.nav-links li')
    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        menu.classList.toggle('close');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

}

navSlide();