(function ($) {
	"use strict";

	// add your custom functions
	function clientCarosule () {
		if ($('#partner-list').length) {
			$("#partner-list").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 5,
      itemsDesktop : [1170,4],
      itemsDesktopSmall : [979,2]

  });
		}
	}
	// blog slider functions
	function BlogCarousel () {
		if ($('#blog-slider').length) {

      $("#blog-slider").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  navigation:true,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ],
	  pagination:false


  });
			};
 };

 // blog slider functions
	function BlogCarousel2 () {
		if ($('#blog-slider2, #blog-slider3').length) {

      $("#blog-slider2, #blog-slider3").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  navigation:false,
	  pagination:true


  });
			};
 };

	// Gallery masonary style
	function galleryMasonaryLayout () {
		if ($('.masonary-gallery').length) {
			$('.masonary-gallery').isotope({
				layoutMode:'masonry'
			});
		}
	}
	/* Pretty Photo  */
	function prettyPhoto () {
		if ($("a[data-gal^='prettyPhoto'").length) {
  $("a[data-gal^='prettyPhoto'").prettyPhoto({hook: 'data-gal'});
		}
	}
	/* header Search (Search Form) */
	function Search_close () {
		if ($('.search-button').length) {
  $( ".search-button" ).click(function() {
		$( ".header-search-content" ).show( "fast", function() {});

		$(".close").click(function() {
		  $(".header-search-content").hide("fast", function() {});
		})
	   });
		}
	}
	// Google Map
	function gMap () {
	if ($('#map').length) {

				var mapMarkers = {
					"markers": [
						{
							"latitude": "48.85661",
							"longitude":"2.35222",
							"icon": "assets/img/pin.png",
							"baloon_text": 'This is <strong>Texas</strong>'
						}
					]
				};

				$("#map").mapmarker({
					zoom : 16,
					center: "48.85661, 2.35222",
					dragging:1,
					mousewheel:0,
					markers: mapMarkers,
					featureType:"all",
					visibility: "on",
					elementType:"geometry"

				});

}
	}

	// Adding hover effect to gallery
	function galleryHover () {
		// hover effect for masonary gallery
		if ($('.masonary-gallery').length) {
			$('.masonary-gallery .content-wrap').each(function () {
				$(this).addClass('hvr-shutter-in-vertical');
			});
		};
		// hover effect for normal gallery
		if ($('.normal-gallery').length) {
			$('.normal-gallery .content-wrap').each(function () {
				//$(this).addClass('hvr-rectangle-out');
				$(this).parent().parent().addClass('mix');
			});
		};

	}

    // custom tab for Service section
    function customTabServiceTab () {
        if ($('#service-we-provide .service-tab-title').length) {
            var tabWrap = $('#service-we-provide .col-lg-9 .service-tab-content');
            var tabClicker = $('#service-we-provide .service-tab-title ul li');

            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('500');
                return false;
            });
        }
    }
	// gallery filter activation
    function GalleryFilter () {

    	if ($('#image-gallery-mix').length) {
    		$('.gallery-filter').find('li').each(function () {
    			$(this).addClass('filter');
    		});
    		$('#image-gallery-mix').mixItUp();
    	};
    	if($('.gallery-filter.masonary').length){
			$('.gallery-filter.masonary span').on('click', function(){
				var selector = $(this).parent().attr('data-filter');
				$('.gallery-filter.masonary span').parent().removeClass('active');
				$(this).parent().addClass('active');
				$('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
    	}
    }
	// Drop Down Menu
    function dropdownMenu () {
    	if ($('.nav').length) {
    		$('ul.nav li.dropdown').hover(function() {
  			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
			}, function() {
  			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
			});

    	}
    }
    // Mobile Navigation
    function mobileNavToggler () {
    	if ($('.mainmenu').length) {
    		$('button.navigation-toggler').on('click', function () {
    			$(this).parent().children('ul.navigation').slideToggle();
    			return false;
    		});

    	}
    }
    // mainmenu hover
    function mainmenuHover () {
    	if ($('.mainmenu').length) {
    		$('.mainmenu ul.navigation').children('li').find('a').each(function () {
    			$(this).addClass('hvr-overline-from-left');
    		});
    		$('.mainmenu ul ul li a').each(function () {
    			$(this).removeClass('hvr-overline-from-left');
    			$(this).addClass('hvr-bounce-to-right');
    		});
    		$('.mainmenu ul li').has('li').children('a').append(function () {
    			return '<i class="fa fa-plus"></i>';
    		});
    		$('.mainmenu ul li a').find('.fa').on('click', function () {
    			var dropMenu = $(this).parent().parent().find('ul');
    			dropMenu.slideToggle();
    			return false;
    		});
    	}
    }
    // wow activator
    function wowActivator () {
    	new WOW().init();
    }
	//Contact Form Validation
	// Contact Form
function contactFormValidation () {
if ($('#form').length) {
$('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            adult: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "plese enter your name",
            },
            email: {
                required: "plese enter your email"
            },
            subject: {
                required: "please enter your subject",
                minlength: "10"
            }

        },
        submitHandler: function(form) {
            $('#form').ajaxSubmit({
                type:"POST",
                data: $('#form').serialize(),
                url:"process.php",
                success: function() {
                    //$('#form :input').attr('disabled', 'disabled');
					//this.reset();
                    $('#form').fadeTo( "slow", 1, function() {
                       // $(this).find(':input').attr('disabled', 'disabled');
                       // $(this).find('label').css('cursor','default');
					   this.reset();
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#form').fadeTo( "slow", 1, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
}
}

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
			// revolution slider
	function revolutionSliderActiver () {
		if ($('#banner').length) {
			$('.banner').revolution({
				delay:9000,
				startwidth:1170,
				startheight:700,
				startWithSlide:0,

				fullScreenAlignForce:"off",
				autoHeight:"off",
				minHeight:"off",

				shuffle:"off",

				onHoverStop:"on",

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,

				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResoluition:0,

				hideThumbs:0,
				hideTimerBar:"on",

				keyboardNavigation:"on",

				navigationType:"bullet",
				navigationArrows: "nexttobullets",
				navigationStyle:"preview4",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:30,
				navigationVOffset:30,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,


				touchenabled:"on",
				swipe_velocity:"0.7",
				swipe_max_touches:"1",
				swipe_min_touches:"1",
				drag_block_vertical:"false",

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
				parallaxDisableOnMobile:"off",

				stopAtSlide:-1,
				stopAfterLoops:-1,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				hideSliderAtLimit:0,

				dottedOverlay:"none",

				spinned:"spinner4",

				fullWidth:"on",
				forceFullWidth:"on",
				fullScreen:"off",
				fullScreenOffsetContainer:"#banner",
				fullScreenOffset:"0px",

				panZoomDisableOnMobile:"off",

				simplifyAll:"off",

				shadow:0

			});
		}
	}
	// Dom Ready Function
	$(document).on('ready', function () {
		// add your functions
		clientCarosule();
		galleryMasonaryLayout();
		gMap();
		galleryHover();
		GalleryFilter();
		mobileNavToggler();
		mainmenuHover();
		customTabServiceTab();
		wowActivator();
		contactFormValidation();
		handlePreloader();
		Search_close();
		prettyPhoto ();
		BlogCarousel ();
		BlogCarousel2 ();
		dropdownMenu ();
		revolutionSliderActiver ();
	});
	// window on load functino
	$(window).on('load', function () {
		// add your functions
	});

})(jQuery);
