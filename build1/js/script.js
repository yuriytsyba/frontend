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
if (iconMenu) {
    
    iconMenu.addEventListener("click", function(e) {
       
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}












$(function(){
$('._slider').slick({
arrows:false,
dots:true
//    fade:true,             ===при переключении появлялась ,а не скролилась  
//    autoplay:true,         ===автообновл
//    autoplaySpeed:2000     ===каждые 2 сек обновл
});

});

//-1------slider----файлы скопировать в папки ../build/css/slick.css ../build/js/slick.min.js


//-2------ а если нужны стили слфйдера еще и  ../build/css/slick-theme.css


//-3-------slider--head.html====================================

//      <link rel="stylesheet" type="text/css" href="../build/css/slick.css">
//      <link rel="stylesheet" type="text/css" href="../build/css/style.css">

//-4-------slider--index.html====================================

//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//     <script src="../build/js/slick.min.js"></script>
//     <script src="../build/js/script.js"></script>



//-5-------slider--html===========================================

// <div class="header__foto">
//<div class="header__foto-picture">
//<img src="../build/img/bickle1.jpg" alt="">
//<img src="../build/img/bickle2.jpg" alt="">
//<img src="../build/img/bickle3.jpg" alt="">
//<img src="../build/img/bickle4.jpg" alt="">
//</div>



//-6-------slider--scss=========================================
 
//    .header__foto-picture .slick-dots {
 //     right: 0;
   //   top: 50px;
    //   }
    //  .slick-dots{
    //   ==relative avto for slider=
    //    position: absolute;
     //   }
     //   .slick-dots li + li {
      //  padding-top: 10px;
     //    }
     //   .slick-dots button {
    //       font-size: 0;
    //       padding: 0px 0px 0px 0px;
    //       border: none;
    //       background-color: #131313;
    //       width: 2px;
    //       height: 25px;
    //       background-repeat: 7px;
    //       cursor: pointer;
    //       transition: all 0.3s ease 0s;
     //      }
     //   .slick-active button{
      //    background-color: #ff4040;
    //     }
     //  .slick-dots button:hover {
      //    background-color: #ff4040;
     //   }

