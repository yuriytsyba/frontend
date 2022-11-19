

//------copy this in yours file app.js-----------------------------

	
	$(function(){

		$('.info__href').on('click',function(e){
			e.preventDefault();

			
			$('.info__href').removeClass('act');
			$(this).addClass('act');

			
			$('.info__tab-1').removeClass('tab-act');
			$($(this).attr('href')).addClass('tab-act');

			$('.info__tab-2').removeClass('tab-act');
			$($(this).attr('href')).addClass('tab-act');
	
		});
			
	});

    /*-----------------------------html------------------------------------------
    ----Напоминание для первых элеметов классы изначально!!!---------------------



    <div class="info__hrefs">
    <a href="#tab-1" class="info__href act ">продажа</a>
    <a href="#tab-2" class="info__href ">закрепление</a>
  </div>
  

  <div class="info__tabs">
    <div class="info__tab-1 tab-act" id="tab-1">
   <h2>Приносим извинения.<br>В настоящее время доступен раздел "Продажа".</h2>
    </div>

    <div class="info__tab-2" id="tab-2">
      <h2>Приносим извинения.<br>В настоящее время доступен раздел "Продажа".</h2>
    </div>
/*-----------------------------scss------------------------------------------
.act{
    border-bottom: 1px solid $ColorDark;
}

.tab-act{
    display: flex;
}
 
&__tab-1 , &__tab-2{
        display: none;       
}
*/
    