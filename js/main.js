

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu__list'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__list--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu__list--active'))  { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
		
  });


	document.addEventListener('click', function (e) {
		if (e.target !== burger && e.target !== mobileMenu) {
			burger.classList.remove('burger--active');
			mobileMenu.classList.remove('menu__list--active');
			bodyLock.classList.remove('lock');
		}
	});


		const headerContent = document.querySelector('.header__content');
		const header = document.querySelector('.menu');
		
				window.addEventListener('scroll', () => {
			// menuFixed();
			let scrollButton = window.scrollY;
			let headerButton = headerContent.offsetHeight / 8.5;				

			if (scrollButton >= headerButton) {
				header.classList.add('menu__fixed')
				headerContent.style.top = `128px`;
					} else {
						header.classList.remove('menu__fixed')
						headerContent.style.top = `0px`;
					}
				});
		
			
		


		document.querySelectorAll('a[href*="#"]').forEach (link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();

				const href = this.getAttribute('href').substring(1);

				const scrollTarget = document.getElementById(href);
				const topOffset = document.querySelector('.menu').offsetHeight;
				const elemntPosition = scrollTarget.getBoundingClientRect().top;
				const offsetPosition = elemntPosition - topOffset;

				window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth',
				})

			})
		});


});

$(function(){	

  var mixer = mixitup(".works__list");

	Fancybox.bind("[data-fancybox]", {
		
	});

});