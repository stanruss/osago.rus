$('body').scrollspy({ target: '#navbar' })
$(function(){ 
     var navMain = $(".navbar-collapse"); 
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
$(window).scroll(function () {

	if ($(this).scrollTop() > 100) {
		$('.nav-top').addClass('fixed-top border-bottom animated fadeInDown');
		
	} else {
		$('.nav-top').removeClass('fixed-top border-bottom animated fadeInDown');
		
	}

});
//  $(window).load(function() {

// $(" .cnr     ").animated("fadeInUp ", "fadeOutDown");

// });
$('.equal .equal-items').equalHeights();
$(function(){
  $("#phone1").mask("+7(999) 999-99-99");
});
$(document).ready(function(){   
    $("#contactsForm").inputmask("email");
  });