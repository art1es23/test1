'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const themes = document.querySelector('.themes');

    themes.addEventListener('change', (e) => {
        if (e.target.nodeName === 'INPUT') {
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(e.target.value);
        }
    })

    const menuToggle = document.querySelector('.menu-toggle'),
        menuNav = document.querySelector('.navigation');

    function toggleMenu() {
        menuToggle.classList.remove('menu-toggle--active');
        menuNav.classList.remove('navigation--active');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('menu-toggle--active');
            menuNav.classList.toggle('navigation--active');
        })
    }

    const btnCreateElem = document.querySelector('.hero-description__btn');

    btnCreateElem.addEventListener('click', () => {
        let span = document.createElement('span');
        span.innerText = `IT'S IMPOSSIBLE, I'M GOD!`;
        span.classList.add('createElem')
        document.querySelector('.hero-description').append(span);
    })

    const f1 = document.querySelector('.form');
    const nameUser = f1.name,
        emailUser = f1.email,
        phoneUser = f1.phone;

    function validateInputs() {

        f1.addEventListener('submit', (e) => {
            e.preventDefault();

            let nameUserValue = nameUser.value,
                emailUserValue = emailUser.value,
                phoneUserValue = phoneUser.value;

            const regExp = '/^[а-яa-z]+$/i';

            if (!nameUserValue || !emailUserValue || !phoneUserValue) {
                alert("Empty input");
            } else {

                if (nameUserValue.match(regExp)) {
                    alert("Name has a numbers!")
                }

                if (isNaN(phoneUserValue)) {
                    alert("Input phone not a number!")
                } else {
                    alert("Its your email " + emailUserValue + " ?");
                    alert("Its your phone " + phoneUserValue + " ?");
                }
            }

            f1.reset();
        })
    }

    validateInputs();
    toggleMenu();
})