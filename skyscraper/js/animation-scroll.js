//-----------------animation-----scroll-------------------------//

document.addEventListener('DOMContentLoaded',() => {
	const animItems = document.querySelectorAll('._anim-items');

	if(animItems.length > 0){
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0 ; index < animItems.length ; index++ ){
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.ItemHeight / animStart;
				}
				if ((scrollY > animItemOffset - animItemPoint ) && scrollY < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active-anim');
				} else{
					if(!animItem.classList.contains('_anim-no-hide')){
						animItem.classList.remove('_active-anim');
					}
				}

			}
		}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.scrollX || document.documentElement.scrollLeft,
		scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	},300);
	
	}

});

/*------------------------animation-----scroll-----scss--------------------------------------------------------------//

-------для анимации добавить                          ._anim-items 

------убрать анимацию при обратном скролле добавить  ._anim-no-hide

-------для анимации нескольких <p> они должны быть в отдельном блоке  ._anim-items ,а для <p>  ._anim-show(напимер) 
----    и стили:

 ._anim-show {
	transform: translate(0px,120%);
	opacity: 0;
	transition: all 2s ease .5s;
}
._anim-show._active-anim ,
._active-anim ._anim-show{
	opacity: 1;
	transform: translate(0px,0px);
}

//-----------------------------------------------------

.header__title-desc-container{
overflow: hidden;
}
.header__title {
transform: translate(-120%,0px);
opacity: 0;
transition: all 3s;

}

.header__title._active-anim {
transform: translate(0%,0px);
opacity: 1;
}

.header__desc {
transform: translate(-180%,0px);
opacity: 0;
transition: all 3s ease .5s;
}
.header__desc._active-anim {
	transform: translate(0%,0px);
	opacity: 1;
   }
.how__logo-container-1,.how__logo-container-2,.how__logo-container-3{
transform: scale(0);
transition: all 1.6s;
}
.how__logo-container-1._active-anim,
.how__logo-container-2._active-anim,
.how__logo-container-3._active-anim{
transform: scale(1);
}

.best__card {
transform: scale(0);
opacity: 0;
transition: all 2s ease 0s;

}
.best__card._active-anim {
opacity: 1;
transform: scale(1);
}


*/