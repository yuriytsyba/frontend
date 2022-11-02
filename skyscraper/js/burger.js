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
const menuBody = document.querySelector('.menu__body');
const Body = document.querySelector('body');

if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
       
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        Body.classList.toggle('_lock');
    });
}

// прокрутка по ------------------------------------------------------------кликy 

document.querySelectorAll('a.menu__link').forEach( link => {
    link.addEventListener('click', function(e) {
e.preventDefault()

const href = this.getAttribute('href').substring(1)


const scrollTarget = document.getElementById(href)
// растояние от вверха при прокрутке
const topOffset = 100

const elementPosition = scrollTarget.
getBoundingClientRect().top
const offsetPosition = elementPosition - topOffset

if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}

window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'

})

    })
})


/*

//--------бургер----html--------/

<div class="header__menu">
<div class="menu__icon-container">
   <div class="menu__icon"><span></span></div>
</div>
<nav class="menu__body">
    <ul class="menu__list">
        <li><a  href="#" class="menu__link">Бронирование</a></li>
        <li><a  href="#" class="menu__link"> Экскурсии</a></li>
        <li><a  href="#" class="menu__link">Туры</a></li>
        <li><a  href="#" class="menu__link">Об Африке</a></li>
        <li><a  href="#" class="menu__link">О нас</a></li>
    </ul>
</nav>
</div>

*/

////////////////////////////////////////////////////////////////////////////////////////////////////
  /*-------------бургер-----SCSS-------------------------------------------------------------------
  
  .menu__icon {
    display: none;
}
//-для бургера + js не скролл--------------------/
body._lock {
    overflow:hidden;
}
@media(max-width: 767px) {
.menu__icon-container{
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
}
.menu__icon {
    z-index: 5;
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
}
.menu__icon span,
.menu__icon::before,
.menu__icon::after{
    display: block;
    left: 0;
    position: absolute;
    height: 10%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background-color: #fff;
}
.menu__icon::before,
.menu__icon::after{
    content:"";
}
.menu__icon::before{
    top: 0;
}
.menu__icon::after{
    bottom: 0;
}
//-бургер в крeстик
.menu__icon span {
    top: 50%;
    transform:scale(1) translate(0px, -50%);
}
.menu__icon._active span {
    transform: scale(0) translate(0px, -50%);
}
.menu__icon._active::before {
    top: 50%;
    transform:rotate(-45deg) translate(0px,-50%);
}
.menu__icon._active::after {
    bottom: 50%;
    transform:rotate(45deg) translate(0px, 50%);
}
.menu__body{
position: fixed;
top: 0;
left:-100%;
width: 100%;
height: 100%;

background-color: rgba(0, 0, 0, 0.89);
padding: 120px 30px 30px 30px;
transition: all 0.3s ease 0s;
//-если меню длин то скролл/
overflow: auto;
}
.menu__body._active {
    left: 0;
}
/-планка -----------------------------
.menu__body::before{
content:"";
position: fixed;
width: 100%;
top: 0;
left: 0;
height: 70px;
background-color: none;
z-index: 2;
}


.menu__list {
  display: block;
  border:0px;
}
.menu__list > li {
    flex-wrap: wrap;
    margin: 30px 0px 30px 0px;
    text-align: center;
}
//---полед обьект ласт чаилд---/
.menu__list > li:last-child {
    margin-bottom: 0;
}
.menu__list > li._active .menu__sub-list {
display: block;
}
.menu__link {
    font-size: 24px;
}
.menu__sub-list {
    position: relative;
    background-color: #fff;
    flex: 1 1 100%;
    margin: 20px 0px 0px 0px;
    display:none;
}
.menu__sub-link {
    font-size: 20px;
    color: #000;
}
}
*/



