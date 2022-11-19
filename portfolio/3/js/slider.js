$(function(){
$('._slider').slick({
arrows:true,
dots:true
//    fade:true,             ===при переключении появлялась ,а не скролилась  
//    autoplay:true,         ===автообновл
//    autoplaySpeed:2000     ===каждые 2 сек обновл
});

});

//-0------ в----app.min.js  скопировать код сверху
 
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

