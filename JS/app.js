Splitting(); 

$(document).ready(function(){
	$(window).scroll(function(){
	
	if(this.scrollY > 500) {
		$('.scroll-up-btn').addClass("show");		
	}
	else {
		$('.scroll-up-btn').removeClass("show");	
	}
	});

	$(document).ready(function(){
        $('.button').click(function(){
          if($(this).hasClass('expand')){
            $('ul').slideUp(function(){
              $('.button').removeClass('expand');
              $('.fas').removeClass('expand')
            });
          }else{
            $(this).addClass('expand');
            setTimeout(function(){
              $('.fas').addClass('expand');
              $('ul').stop().slideDown();
            },200);
          }
        });
      });


//owl carousel script
$('.carousel').owlCarousel({
	margin: 20, 
	loop: true,
	autoplayTimeOut: 2000, 
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},

		600: {
			items: 2,
			nav: false
		},

		1000: {
			items: 3,
			nav: false
		}
	}
});
});
