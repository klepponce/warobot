//var requestedHeight = 600; //LeadPages Screen Capture preview fix
//Global variables go here. Such as var requestedHeight = xxx;


// (function($) {
	// $(window).on('load', function () {
var templateReactor = templateReactor || {};

(function($){

	// Beautiful functions stack by Aminul Islam
	// Lead Web Developer @templateReactor

	// USE STRICT
	"use strict";

	templateReactor.initialize = {

		init: function(){
			// templateReactor.initialize.defaults();
			// templateReactor.initialize.sectionsImageBackground();
			// templateReactor.initialize.sectionsVideoBackground();
			// templateReactor.initialize.heroFullScreen();
			// templateReactor.initialize.bannerHeightFix();
			// templateReactor.initialize.testimonialCarousel();
			// templateReactor.initialize.testimonialToggler();
			templateReactor.initialize.screenshotCarousel();
			// templateReactor.initialize.sectionsIntroBackground();
			// templateReactor.initialize.fitVideo();

	 

		},
		defaults: function() {
			    // Light Box
			    $('[data-lightbox="yes"]').lightbox();

				// Site Preloader
				$(window).load(function () {
					$(".loader").fadeOut();
					$("#preloader").delay(350).fadeOut("slow");
				});
		},

		updateImageBackground: function(section) {
				var bgImage=$(section).find('.section-bg').attr("src");
		    	if (bgImage) {
			    	$(this).css({
			    		backgroundImage: 'url(' + bgImage + ')',
			    		backgroundPosition: '50% ' + posValue,
			    	});
			   } 	
		},

		sectionsImageBackground: function() {
		    // Make Parallax Image Background
		    $('[dt="background"]').each(function() {
		    	console.log($(this));
		    	var bgImage=$(this).find('.section-bg').attr("src");
		    	var display=$(this).css( 'display' );
 			    // Either run the DOM update functions once for a published page or continuously for within the builder. 
			    if ( typeof window.top.App === 'undefined' ) {
			        // Published page    
			        $(window).on('load', function(){
			        		// console.log('load');
			        		templateReactor.initialize.updateImageBackground($(this));	
			        });
			    } else {
			        // within the builder
			        setInterval( function(){
			            if ( display == "none" ) {
			                $(this).css( 'background-image' , 'none' );
			            }
			            else {
				             templateReactor.initialize.updateImageBackground(bgImage);
			            }
			        }, 500);
			    }

		     });
		},		

		sectionsImageBackground2: function() {
		    $('[dt="background"]').each(function() {

		    	var actualHeight = $(this).position().top;
		    	var reSize = actualHeight - $(window).scrollTop();
		    	var makeParallax = -(reSize/15);
		    	var posValue = makeParallax + "px";
		    	var bgImage=$(this).find('.section-bg').attr("src");
		       // Set background Image postion
		    	if (bgImage) {
			    	$(this).css({
			    		backgroundImage: 'url(' + bgImage + ')',
			    		backgroundPosition: '50% ' + posValue,
			    	});
			   } 	

		     });
		},		
		updateIntroBackground: function(){
				$('#intro').css('background-image', 'url('+$("#intro_bg").attr("src")+')').css('background-size' , 'cover').css('background-position' , 'top center');
		},

		sectionsIntroBackground:function(){
		    if ( typeof window.top.App === 'undefined' ) {
		        // Published page    
		        $(window).on('load', function(){
		           templateReactor.initialize.updateIntroBackground();
		        });
		    } else {
		        // within the builder
		        setInterval( function(){
		            if ( $( '#intro_bg' ).css( 'display' ) == "none" ) {
		                $( '#intro_wrapper' ).css( 'background-image' , 'none' );
		            }
		            else {
		                templateReactor.initialize.updateIntroBackground();
		            }
		        }, 500);
		    }

		},

		sectionsVideoBackground: function() {

			$('[data-type="videbg"]').each(function() {

		    	var actualHeight = $(this).position().top;
		    	var reSize = actualHeight-$(window).scrollTop();
		    	var makeParallax = -(reSize/2.5);
		    	var posValue = makeParallax+"px";

		       	// Set background div ID or class
		    	$(this).find('.video-container').css({
		    		top:posValue,
		    	});

		    });
		},


		heroFullScreen: function() {

			// Make The Section Full Screen
			$('.full-screen').css('height', window.innerHeight );

			// Overlay Div Full Screen
			$('.full-screen .overlay').css('height', window.innerHeight );
			
		},

		bannerHeightFix: function() {

			$(".banner-section > div > .container").css("height", $(".banner-section").height());
			$(".banner-section .application-mockup").css("height", $(".banner-section").height());
			
		},

		testimonialCarousel: function() {


			$('[data-testimonial="carousel"]').each( function() {

				var carouselInt = $(this).find('[data-carousel="content"]').attr('id');
				var carouselNav = $(this).find('[data-carousel="nav"]').attr('id');
				var carouselPrev = $(this).find('[data-carousel="prev"]').attr('id');
				var carouselNext = $(this).find('[data-carousel="next"]').attr('id');

				// Carousel Contents
				var tCarousels = new Swiper('#' + carouselInt, {
					effect: 'fade',
					fade: {
						crossFade: true
					},
					initialSlide: 2
				});

				// Navigation Config
				var navConf = {
					centeredSlides: true,
					slidesPerView: 3,
					initialSlide: 2,
					slideToClickedSlide: true,
					nextButton: '#' + carouselNext,
					prevButton: '#' + carouselPrev,
				};

				if (window.innerWidth > 992 ) {
					navConf.direction = 'vertical';
				}

				var tNavigation = new Swiper('#' + carouselNav, navConf);

				// Merge
				tCarousels.params.control = tNavigation;
				tNavigation.params.control = tCarousels;

			});
			
		},

		testimonialToggler: function() {


			$('.overflow-testimonials > .item').each( function() {

				$(this).hover(function(){
					$(this).toggleClass('active');
					
				});

			});
			
		},

		screenshotCarousel: function() {

			$('[data-screenshot="carousel"]').each( function() {

				var slidesPerViewVar = 4;

				ssrFix();

				function ssrFix() {
					var iW = window.innerWidth;
					if (iW > 992) slidesPerViewVar = 4;
					if (iW > 768 && iW <= 992) slidesPerViewVar = 3;
					if (iW > 480 && iW <= 768) slidesPerViewVar = 2;
					if (iW <= 480) slidesPerViewVar = 1;
				}

				var carouselInt = $(this).find('[data-carousel="content"]').attr('id');
				var carouselPag = $(this).find('[data-carousel="pagination"]').attr('id');
				var carouselNex = $(this).find('[data-carousel="next"]').attr('id');
				var carouselPre = $(this).find('[data-carousel="prev"]').attr('id');

				// Carousel Contents

				var items = 4;

				var swiper = new Swiper( '#' + carouselInt, {
					pagination: '#' + carouselPag,
					paginationClickable: '#' + carouselPag,
					nextButton: '#' + carouselNex,
					prevButton: '#' + carouselPre,
					spaceBetween: 30,
					slidesPerView: slidesPerViewVar,
				});

			});
			
		},

		fitVideo: function() {
			$(".video-box").fitVids();
		},

	};

	templateReactor.documentOnReady = {
		init: function(){
			templateReactor.initialize.init();
			 
		},

	};

	templateReactor.documentOnResize = {

		init: function(){
			// templateReactor.initialize.heroFullScreen();
			// templateReactor.initialize.testimonialCarousel();
			templateReactor.initialize.screenshotCarousel();
		},

	};

	templateReactor.documentOnScroll = {
		init: function(){
		//	templateReactor.initialize.sectionsImageBackground();
		},

	};

	// Variables
	var $window = $(window),
		$body = $('body'),
		$banner = $('#banner');

	// Initialize Functions
	$(document).ready( templateReactor.documentOnReady.init );
	$(window).on( 'resize', templateReactor.documentOnResize.init );
	$(document).on( 'scroll', templateReactor.documentOnScroll.init );

})(jQuery); 

var leadpages_input_data = {};

(function($){
    function updateSectionBg(){ 
			$('[dt="background"]').each(function() { 
		    	var bgImage=$(this).find('.section-bg').attr("src");
		       // Set background Image postion
		    	if (bgImage) {
			    	$(this).css({
			    		backgroundImage: 'url(' + bgImage + ')',
			    		backgroundPosition: 'top center',
			    		backgroundSize :'cover',
			    	});
			   } 	
		     });
    }
  

    if ( typeof window.top.App === 'undefined' ) {
        $(window).on('load', function(){
           updateSectionBg();
        });
    } else {
        setInterval( function(){
        			$('[dt="background"]').each(function() {
        				var bgImage=$(this).find('.section-bg');
        				if ( $(bgImage).css( 'display' ) == "none" ) {
		                $( this).css( 'background-image' , 'none' );
		            }else {
		  			    	$(this).css({
					    		backgroundImage: 'url(' + $(bgImage).attr("src") + ')',
					    		backgroundPosition: 'top center',
					    		backgroundSize :'cover',
					    	});
		            }
        			});
        }, 100);
 
    }

    $('[data-icon]').each(function() {
    	icon=$(this).attr('data-icon');
    	$(this).html('<i class="fa fa-'+icon+'"></i>');
 
    });
    

})(jQuery); 

	// }); //Window.load
// })(jQuery);
