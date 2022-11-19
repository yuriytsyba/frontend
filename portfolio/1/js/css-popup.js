/*

<div class="best__tabs">
<div class="best__tab-1 tab-act" id="tab-1">
	<a href="#popup-1" class="best__card"><img class="best__card-img" id="best-img-1" src="@img/slider-1.jpg" alt="home-1"></a>
	<a href="#popup-2" class="best__card"><img class="best__card-img-2" id="best-img-2"src="@img/info-2.jpg" alt="home-2"></a>
</div>
<div class="best__tab-2" id="tab-2">
  <h2>Sorry,content's not available.</h2>
</div>


</div>
</div>
<div class="popup" id="popup-1">
<a href="#best" class="popup__area"></a>
<div class="popup__body">
  <div class="popup__content">
	<a href="#best" class="popup__close"><img src="@img/x.svg" alt=""></a>
	<img class="best__card-img" id="best-img-1" src="@img/slider-1.jpg" alt="home-2">
  </div>
</div>
</div>
<div class="popup" id="popup-2">
<a href="#best" class="popup__area"></a>
<div class="popup__body">
  <div class="popup__content">
	<a href="#best" class="popup__close"><img src="@img/x.svg" alt=""></a>
	<img class="best__card-img" id="best-img-2" src="@img/info-2.jpg" alt="home-2">
  </div>
</div>
</div>


//--------------------------------------css------------------------------------------//
//------------popup-----------------------------------------//
 .best{
&__card-img,&__card-img-2,&__card-img-3{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }

@media(max-width:rem($md6)){
    .popup{
        display: none;
    }
}
@media(min-width:rem($md6)){

.popup{
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all .8s;
    z-index: 10;
}
.popup__body{
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
}
.popup__content{
    margin: 30px;
    max-width: 800px;
    height: 100%;
    transition: all .8s;
    position: relative;
    transition: all .8s;
    transform: perspective(600px) translate(0px,-100%) rotateX(45deg);
    background: #000;
}
.popup__close{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
}
.popup:target {
    opacity: 1;
    visibility: visible;
}
.popup__area{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.popup:target{
    .popup__content{
        opacity: 1;
        transform: perspective(600px) translate(0px,0%) rotateX(0deg);
    }
}
}

*/
