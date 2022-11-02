//-----------------------header---scroll------------------------------------//


document.addEventListener('DOMContentLoaded',() => {
	const header = document.querySelector('.header__container');
	const headerMenu = document.querySelector('.header__menu-block');
	
	window.addEventListener('scroll', () => {
		let scrollTop = window.scrollY;
		//let headerCenter = window.screen.height /2 - headerMenu.offsetHeight ;
	
		 var timeout = null;
		 if(!timeout){
			timeout = setTimeout(function(){
				let scrollTop2 = window.scrollY;
				if(scrollTop2 > scrollTop){
				
					headerMenu.classList.add('fixed');
					//header.style.marginTop = `${headerMenu.offsetHeight}px`;
					//scrollTop = scrollTop2;
				}else if(scrollTop2 < scrollTop){
					headerMenu.classList.remove('fixed');
		            //header.style.marginTop = `0px`;
					//scrollTop = scrollTop2;
				}
				clearTimeout(timeout);
				timeout = null;
			},30);	
			if(scrollTop < 0){
				headerMenu.classList.remove('fixed');
			}
		}
	});
});

/*-------------------scss--------------------------
.fixed{
    z-index: 20;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
}

----------------------------------------------------*/