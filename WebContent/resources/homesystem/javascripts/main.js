$(document).ready(function() {

	//------------------------------------//
	//Navbar//
	//------------------------------------//
	var menu = $('.navbar');
	$(window).bind('scroll', function(e) {
		if ($(window).scrollTop() > 140) {
			if (!menu.hasClass('open')) {
				menu.addClass('open');
			}
		} else {
			if (menu.hasClass('open')) {
				menu.removeClass('open');
			}
		}
	});

	//------------------------------------//
	//Scroll To//
	//------------------------------------//
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop : $(this.hash).offset().top
		}, 800);

	});

	//------------------------------------//
	//Wow Animation//
	//------------------------------------// 
	wow = new WOW({
		boxClass : 'wow', // animated element css class (default is wow)
		animateClass : 'animated', // animation css class (default is animated)
		offset : 0, // distance to the element when triggering the animation (default is 0)
		mobile : false
	// trigger animations on mobile devices (true is default)
	});
	wow.init();

});

jQuery(document).ready(function($) {
	$(".all-portfolios").isotope({
		itemSelector : '.single-portfolio',

		layoutMode : 'fitRows',
	});
	$('ul.filter li').click(function() {
		$("ul.filter li").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr('data-filter');
		$(".all-portfolios").isotope({

			filter : selector,
			animationOptions : {
				duration : 750,
				easing : 'linear',
				queue : false,
			}
		});
		return false;
	});
});
