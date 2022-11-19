/*--
      <div class="dropdown">
            <button class="dropdown__button">Select City</button>
            <ul class="dropdown__list">
                <li class="dropdown__list-item" data-value="Pa">Paris</li>
                <li class="dropdown__list-item" data-value="L">Lisabon</li>
                <li class="dropdown__list-item" data-value="T">Tokyo</li>
                <li class="dropdown__list-item" data-value="Pr">Praga</li>
            </ul>
            <input class="dropdown__input-hidden" type="text" value="" name="select-category" id="">
        </div>

        --*/

        //------------------------------------------------

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
  
  // клик по кнопке.открыть/закрыть select
  dropDownBtn.addEventListener('click',function () {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button-active');
  });
  // выбор элемента списка.Запомнить выбранное значение.Закрыть дропдаун
  dropDownListItems.forEach(function(listItem){
    listItem.addEventListener('click',function(e){
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });
  //клик снаружи дропдауна.Закрыть дропдаун
  document.addEventListener('click',function(e){
    if(e.target !== document.querySelector('.dropdown__button')){
      dropDownBtn.classList.remove('dropdown__button-active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  
  })
  //закрытие по tab или Esc
  document.addEventListener('keydown',function(e){
    if(e.key === 'Tab' || e.key === 'Escape'){
      dropDownBtn.classList.remove('dropdown__button-active');
      dropDownList.classList.remove('dropdown__list--visible');
  
    }
  })
  })
  