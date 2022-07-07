"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
any: function () {
    return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows());
}
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
let menuArrows = document.querySelectorAll('.menu__arrow');

if (menuArrows.length>0){
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function(e) {
menuArrow.parentElement.classList.toggle('_active');
        });
    }
}


} else {
    document.body.classList.add('_pc');
}

// Meню бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
//  Тач: Выкл меню влево при нажатии на ссылку
const Menusublink = document.querySelector('.menu__sub-list');
if (Menusublink) {
    const menuBody = document.querySelector('.menu__body');
    Menusublink.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



// Прокрутка

document.querySelectorAll('a.menu__sub-link').forEach( link => {
    link.addEventListener('click', function(e) {
e.preventDefault()

const href = this.getAttribute('href').substring(1)


const scrollTarget = document.getElementById(href)
// растояние от вверха при прокрутке
const topOffset = 100

const elementPosition = scrollTarget.
getBoundingClientRect().top
const offsetPosition = elementPosition - topOffset

window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'

})

    })
})


    
















