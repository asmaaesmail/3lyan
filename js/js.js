$(document).ready(function(){
    /* ----------- loader --------------- */

    $(".loaader").fadeOut(300);
	
    
    

         
  
    /* ------------------------top---------------------------*/
    
	
/* ----------------------------------------------------- */

/******** toggle navbar **************/

    
	var scroltopbtn = $("#top");
	$(window).scroll(function () {

        if ($(this).scrollTop() > 320) {
			
            $("header.codrops-header").addClass("fixed-nav");
            $(".fixed-nav").css("animation-name","flipInX");
            console.log("aa")
           
		} else if($(this).scrollTop() < 320) {
		
		 $("header.codrops-header").removeClass("fixed-nav");
         // $(".fixed-nav").css("animation-name","flipInX");
		}
	});
     
    /*------------wow init ----------------*/
    
     wow = new WOW(
                      {
                      boxClass:     'wow',      
                      animateClass: 'animated', 
                      offset:       0,          
                      mobile:       false,      
                      live:         true        
                    }
                    )
                    wow.init();
    
    
    /* -------------------------------------*/
    
    
    /*-----------------------search------------------------------------*/
    
    

(function ($) {	

	$.fn.searchBox = function(ev) {

		var $searchEl = $('.search-elem');
		var $placeHolder = $('.placeholder');
		var $sField = $('#search-field');

		if ( ev === "open") {
			$searchEl.addClass('search-open')
		};

		if ( ev === 'close') {
			$searchEl.removeClass('search-open'),
			$placeHolder.removeClass('move-up'),
			$sField.val(''); 
		};

		var moveText = function() {
			$placeHolder.addClass('move-up');
		}

		$sField.focus(moveText);
		$placeHolder.on('click', moveText);
		
		$('.submit').prop('disabled', true);
		$('#search-field').keyup(function() {
	        if($(this).val() != '') {
	           $('.submit').prop('disabled', false);
	        }
	    });
	}	

}(jQuery));

$('#search-btn').on('click', function(e) {
	$(this).searchBox('open');
	e.preventDefault();
});

$('.close').on('click', function() {
	$(this).searchBox('close');
});
});
