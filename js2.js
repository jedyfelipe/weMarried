//Efeito rolragem suave//
jQuery(document).ready(function($) { 
    	$("nav").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
   	});
});
