$(document).ready(function() {
 
	var owl = $("#header-slider");

	owl.owlCarousel({
		singleItem : true,
		navigation : true,
		navigationText : ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
		transitionStyle : "fade",
		pagination: true,
	});

	$("#Client_Logo").owlCarousel({
		autoPlay : 5000,
	    items : 6,
	    responsiveClass:true,
	    responsive: {
            0:{
                items : 1
            },
            480:{
                items : 1
            },
            768:{
                items : 3
            },
            1200:{
                items: 3
            }
        }
	});

    $("#blog-post").owlCarousel({
        autoPlay : 5000,
        items : 3,
        responsiveClass:true,
        responsive: {
            0:{
                items : 1
            },
            480:{
                items : 1
            },
            768:{
                items : 3
            },
            1200:{
                items: 3
            }
        }
    });


	$(function(){
	    $('#mixed-items').mixItUp();
	});


	new WOW().init();

	// DOM Content Load Event Actions;
	$( window ).load(function() {
		$('div#loading').remove();
		$('body').removeClass('loading');
	});


     $('.menu').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200,
         top : 0
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });





	  $('.carousel').carousel();


    /**
     * Google Map
     */
    if ( $('#googleMap').length ) {
        var mapProp = {
            center: new google.maps.LatLng(51.508742,-0.120850),
            zoom:9,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    }



	/**
     * Google Map
     */
    if ( $('#googleMap').length ) {
        var mapProp = {
            center: new google.maps.LatLng(93.878114, -77.629798),
            zoom:9,
            scrollwheel: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    }

    // Animated Scrolling
    (function(){
        var topoffset = 0;
          $('#scroll').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
              } // target.length
            } //location hostname
          }); //on click

          $.scrollUp({
            scrollDistance: 2000,
            scrollSpeed: 1200,
          });
      }());

    $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

    var firedz = 0;
        if ($('#counter').isOnScreen()) {
            if(firedz == 0) {
                var options = {
                    useEasing : true,
                    useGrouping : true,
                    separator : ' ',
                    decimal : '.',
                    prefix : '',
                    suffix : ''
                };
                var demo1 = new CountUp("projects", 0, $('#projects').attr('data-val'), 0, 3, options);
                var demo2 = new CountUp("clients", 0, $('#clients').attr('data-val'), 0, 3, options);
                var demo3 = new CountUp("consultions", 0, $('#consultions').attr('data-val'), 0, 3, options);
                var demo4 = new CountUp("testimonials", 0, $('#testimonials').attr('data-val'), 0, 3, options);
                demo1.start();
                demo2.start();
                demo3.start();
                demo4.start();
            }
            firedz = 1;
        }



    var fired = 0;
    $(window).scroll(function(){
            if ($('#counter').isOnScreen()) {
                if(fired == 0) {
                    var options = {
                        useEasing : true,
                        useGrouping : true,
                        separator : ' ',
                        decimal : '.',
                        prefix : '',
                        suffix : ''
                    };
                    var demo1z = new CountUp("projects", 0, $('#projects').attr('data-val'), 0, 5, options);
                    var demo2z = new CountUp("clients", 0, $('#clients').attr('data-val'), 0, 8, options);
                    var demo3z = new CountUp("consultions", 0, $('#consultions').attr('data-val'), 0, 10, options);
                    var demo4z = new CountUp("testimonials", 0, $('#testimonials').attr('data-val'), 0, 13, options);
                    demo1z.start();
                    demo2z.start();
                    demo3z.start();
                    demo4z.start();
                }
                fired = 1;
        }
    });





});
