
//    https://air-datepicker.com/ru/docs

/*-------------------------------1------------------------------------------
        <div class="date-start">
            <input class="date-start__input" type="text" id="airdatepicker">
        </div>
 
//--------------------------------2----------------------------------------
   <link rel="stylesheet" type="text/css" href="css/air-datepicker.css"></link>
    <script src="js/air-datepicker.js"></script>                             
      
//--------------------------------3-----------------------------------------*/
new AirDatepicker('#airdatepicker',{
	isMobile: true,//мобил устройств
	autoClose: true,
	//position: 'right center',
	//range: true,//несколько дат 
	//multipleDatesSeparator: ' - ',//разделитель
	timepicker: true, //время
	timeFormat:'hh:mm AA',
	//Локализация или или
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'Today',
		clear: 'Clear',
		dateFormat: 'MM/dd/yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0
	  }
	  /*---ИЛИ-----
	  locale :{
		days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
		daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		today: 'Сегодня',
		clear: 'Очистить',
		dateFormat: 'dd.MM.yyyy',
		timeFormat: 'HH:mm',
		firstDay: 1
	  }
	  */
});
  