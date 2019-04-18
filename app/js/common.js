$('body').scrollspy({ target: '#navbar' })
$(function(){ 
     var navMain = $(".navbar-collapse"); 
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
$(window).scroll(function () {

	if ($(this).scrollTop() > 174) {
		$('.nav-top').addClass('fixed-top border-bottom animated fadeInDown');
		
	} else {
		$('.nav-top').removeClass('fixed-top border-bottom animated fadeInDown');
		
	}

});
 