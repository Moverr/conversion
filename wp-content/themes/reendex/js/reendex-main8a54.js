/**
 *
 * 1. Page Loader
 * 2. FitVids Setting
 * 3. Flexslider
 * 4. Parallax
 * 5. Sidebar Newsfeed-1
 * 6. Sidebar Newsfeed-2
 * 7. Sidebar Newsfeed-3
 * 8. Sidebar Newsfeed-4
 * 9. Sidebar Newsfeed-5
 * 10. Sidebar Newsfeed-6
 * 11. News Ticker
 * 12. News Ticker RSS Feed
 * 13. RSS Feed
 * 14. To Top Button
 * 15. Owl Carousel - News Slider
 * 16. Owl Carousel - Schedule Slider
 * 17. Owl Carousel - Mega Menu slider
 * 18. Owl Carousel - Big Gallery Slider-1
 * 19. Owl Carousel - Big Gallery Slider-2
 * 20. Owl Carousel - Big Gallery Slider-3
 * 21. Owl Carousel - Small Gallery Slider
 * 22. Owl Carousel - News Gallery Slider
 * 23. Owl Carousel - Logo Gallery Slider
 * 24. Owl Carousel
 * 25. Currency Converter
 * 26. Sidebar Weather
 * 27. About Us Page
 * 28. Countdown
 * 29. Fix jumping on top
 * 30. Mobile Menu
 * 31. Search box
 * 32. Hide empty tags
 * 33. Prevent menu from closing
 * 34. Magnific popup
 * 35. Sticky Module
 * 36. Masonry Gallery
 * 37. Google Ads
 * 38. Vimeo video
 * 39. Hide iframe if empty
 * 40. Facebook video
 * 41. Clock
 *
 * @package Reendex
 */

(function($) {
	"use strict";

	/* 1. Page Loader */
	// Wait for window load.
	$( window ).on('load', function() {
		$( '.pageloader' ).fadeOut( 'slow' );
		$( 'body' ).removeClass( 'loading' );
	});

	/*
	 * 2. FitVids Setting
	 */
	jQuery( '.fitvids-video' ).fitVids();

	/* 3. Flexslider */
	$( '.flexslider' ).flexslider( {
		animation: "fade",
		controlNav: false
	} );

	/* 4. Parallax */
	function parallaxInit() {
		$( '.img-overlay1', '#parallax-section' ).parallax( "100%", 0.5 );
		$( '.img-overlay3', '#parallax-section3' ).parallax( "100%", 0.5 );
	}
	parallaxInit();

	/* 5. Sidebar Newsfeed-1 */
	$( '.newsfeed-1' ).easyTicker( {
		direction: 'up',
		easing: 'easeOutSine',
		speed: 'slow',
		interval: 5000,
		height: 'auto',
		visible: 3,
		mousePause: 1,
	} );

	/* 6. Sidebar Newsfeed-2 */
	$( '.newsfeed-2' ).easyTicker( {
		direction: 'up',
		easing: 'easeOutSine',
		speed: 'slow',
		interval: 5000,
		height: 'auto',
		visible: 4,
		mousePause: 1,
	} );

	/* 7. Sidebar Newsfeed-3 */
	$( '.newsfeed-3' ).easyTicker( {
		direction: 'up',
		easing: 'easeInOutSine',
		speed: 'slow',
		interval: 5000,
		height: 'auto',
		visible: 5,
		mousePause: 1,
	} );

	/* 8. Sidebar Newsfeed-4 */
	$( '.newsfeed-4' ).easyTicker( {
		direction: 'up',
		easing: 'easeOutSine',
		speed: 'slow',
		interval: 5000,
		height: 'auto',
		visible: 6,
		mousePause: 1,
	} );

	/* 9. Sidebar Newsfeed-5 */
	$( '.newsfeed-5' ).easyTicker( {
		direction: 'up',
		easing: 'easeOutSine',
		speed: 'slow',
		interval: 5000,
		height: 'auto',
		visible: 7,
		mousePause: 1,
	} );

	/* 10. Sidebar Newsfeed-6 */
	$( '.newsfeed-6' ).easyTicker( {
		direction: 'up',
		easing: 'easeOutSine',
		speed: 'slow',
		interval: 5000,
		height: 'auto',
		visible: 8,
		mousePause: 1,
	} );

	/* 11. News Ticker */
	$( '.newsticker' ).easyTicker( {
		direction: 'up',
		easing: 'easeOutSine',
		speed: 'slow',
		interval: 7000,
		height: 'auto',
		visible: 1,
		mousePause: 1,
		controls: {
			up: '.up',
			down: '.down'
		}
	} );

	/* 12.  News Ticker RSS Feed */
	var widget = $( '.news-ticker-rss' );
	$( '.news-ticker-rss .ticker-vticker' ).each(function() {
		var visible = $( this ).attr( 'data-visible' );
		var interval = $( this ).attr( 'data-speed' );
		var height = ( parseInt( visible ) <= 20 ? 'auto' : visible );
		var ticker = $( this ).easyTicker( {
			'visible': visible,
			'easing': 'easeOutSine',
			'height': height,
			'interval': interval,
			'mousePause': 1,
			'controls': {
				up: '.up',
				down: '.down'
			}
		});
	});

	/* 13.  RSS Feed */
	var widget = $( '.news-ticker-rss-widget' );
	$( '.ticker-vticker' ).each(function() {
		var visible = $( this ).attr( 'data-visible' );
		var interval = $( this ).attr( 'data-speed' );
		var ticker = $( this ).easyTicker( {
			'visible': visible,
			'easing': 'easeOutSine',
			'height': 'auto',
			'interval': interval,
			'mousePause': 1,
		});
	});

	/* 14. To Top Button */
	$().UItoTop( {
		easingType: 'easeOutQuart'
	} );

	/* 15. Owl Carousel - News Slider */
	$( "#news-slider" ).owlCarousel( {
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoHeight:false,
		items : 1,
		center: true,
		loop  : false,
		smartSpeed :900,
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],

	} );

	/* 16. Owl Carousel - Schedule Slider */
	$( "#sidebar-schedule-slider" ).owlCarousel( {
		autoPlay: false,
		autoHeight:false,
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		loop  : false,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			320:{
				items:1,
				nav:true
			},
			667:{
				items:2,
				nav:true
			},
			980:{
				items:2,
				nav:true
			},
			1024:{
				items:3,
				nav:true,
				loop:false
			},
			1183:{
				items:1,
				nav:true,
				loop:false
			},
			1400:{
				items:1,
				nav:true,
				loop:false
			}
		}
	} );

	/* 17. Owl Carousel - Mega Menu slider */
	$( ".menu-carousel-inner" ).owlCarousel( {
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items:1,
		loop:true,
		autoHeight:true,
	} );

	/* 18. Owl Carousel - Big Gallery Slider-1 */
	$( "#big-gallery-slider-1" ).owlCarousel( {
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		items: 3,
		margin: 2,
		responsive:{
			0: {
				items:1,
				nav:true
			},
			479:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:true,
				loop:true
			},
		}
	} );

	/* 19. Owl Carousel - Big Gallery Slider-2 */
	$( "#big-gallery-slider-2" ).owlCarousel( {
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		items: 4,
		margin: 2,
		responsive:{
			0: {
				items:1,
				nav:true
			},
			479:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:true,
				loop:true
			},
			1000:{
				items:4,
				nav:true,
				loop:true
			}
		}
	} );

	/* 20. Owl Carousel - Big Gallery Slider-3 */
	$( "#big-gallery-slider-3" ).owlCarousel( {
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		items: 5,
		margin: 2,
		responsive:{
			0: {
				items:1,
				nav:true
			},
			479:{
				items:2,
				nav:true
			},
			768:{
				items:3,
				nav:true,
				loop:true
			},
			1000:{
				items:5,
				nav:true,
				loop:true
			}
		}
	} );

	/* 21. Owl Carousel - Small Gallery Slider */
	$( "#small-gallery-slider" ).owlCarousel( {
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		items: 4,
		autoHeight:false,
		loop:true,
		responsive:{
			0: {
				items:1,
				nav:true,
			},
			568: {
				items:2,
				nav:true,
			},
			767:{
				items:2,
				nav:true,
			},
			900:{
				items:3,
				nav:true,
			},
			1400:{
				items:4,
				nav:true,
			}
		}
	} );

	/* 22. Owl Carousel - News Gallery Slider */
	$( "#news-gallery-slider" ).owlCarousel( {
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		items: 4,
		autoHeight:false,
		loop:false,
		smartSpeed :900,
		margin: 30,
		responsive:{
			0: {
				items:1,
				nav:true,
			},
			479:{
				items:2,
				nav:true,
			},
			767:{
				items:3,
				nav:true,
				loop:false
			},
			1280:{
				items:4,
				nav:true,
				loop:false
			},
		},
	} );

	/* 23. Owl Carousel - Logo Gallery Slider */
	$( "#logo-gallery-slider" ).owlCarousel( {
		nav    : true,
		navText : ["<i class='pe-7s-angle-left'></i>","<i class='pe-7s-angle-right'></i>"],
		autoHeight:false,
		margin: 40,
		loop:true,
		stagePadding: 41,
		smartSpeed :900,
		responsive:{
			0: {
				items:1,
				nav:true,
			},
			320:{
				items:2,
				nav:true,
			},
			479:{
				items:3,
				nav:true,
			},
			767:{
				items:4,
				nav:true,
				loop:false
			},
			980:{
				items:5,
				nav:true,
				loop:false
			},
			1400:{
				items:6,
				nav:true,
				loop:false
			}
		},
	} );

	/* 24. Owl Carousel */
	$( '.owl-carousel' ).find( '.owl-nav' ).removeClass( 'disabled' );
	$( '.owl-carousel' ).on( 'changed.owl.carousel', function(event ) {
		$( this ).find( '.owl-nav' ).removeClass( 'disabled' );
	} );

	/* 26. Currency Converter */
	function convertCurrency() {
		let fromCurrency = encodeURIComponent( $( '#from' ).val() );
		let toCurrency = encodeURIComponent( $( '#to' ).val() );
		let fromAmount = $( '#fromAmount' ).val();
		let query = fromCurrency + '_' + toCurrency;
		/** Looping through currency **/
		let currenciesUrl  = 'https://free.currencyconverterapi.com/api/v5/currencies';
			$.ajax({
				url: currenciesUrl,
				type:"GET",
				success: (result) => {
					result = result.results;
					for (const props in result) {
						console.log( props );
						let html = ` <option value = "${props}"> ${result[props]["currencyName"]}(${props}) </option> `;
						$( ".currency" ).append( html );
					}
				},
				error: ( xhr,status,error ) => {console.log( status )},
				dataType: 'jsonp',
			});
		let url = 'https://free.currencyconverterapi.com/api/v5/convert?q=' + query + '&compact=ultra&apiKey=';
		var result = $.ajax({
			url: url,
			type:"GET",
			success: (data) => {
				let val = data[query];
				if (val) {
					let total = val * fromAmount;
					let toAmount = Math.round( total * 100 ) / 100;
					$( '#toAmount' ).val( toAmount );
				} else {
					var err = new Error( "Value not found for " + query );
				}
			},
			error: function(xhr,status,error) {
				console.log( status );
			}, dataType: 'jsonp',
		});
		return result;
	}
	$( "#fromAmount" ).keyup( convertCurrency );
	$( "#from" ).change( convertCurrency );
	$( "#to" ).change( convertCurrency );
	convertCurrency();

	/* 26. Sidebar Weather */
	function titleCase(str) {
		str = str.split( ' ' );
		var length = str.length;
		for (var i = 0; i < length; i++) {
			str[i] = str[i][0].toUpperCase() + str[i].substring( 1 );
		}
		return str.join( ' ' );
	}

	function fullDay(str) {
		if (str === 'Tue') {
			str = 'Tuesday';
		} else if (str === 'Wed') {
			str = 'Wednesday';
		} else if (str === 'Thu') {
			str = 'Thursday';
		} else if (str === 'Sat') {
			str = 'Saturday';
		} else {
			str = str + 'day';
		}
		return str;
	}

	$(function() {

		var $wrapper = $( '.sidebar-weather' ),
			$panel = $wrapper.find( '.panel' ),
			$city = $panel.find( '#city' ),
			$weather = $panel.find( '.weather' ),
			$group = $panel.find( '.group' ),
			$dt = $group.find( '#dt' ),
			$description = $group.find( '#haze' ),
			$wind = $group.find( '#wind' ),
			$humidity = $group.find( '#humidity' ),
			$temperature = $weather.find( '#temperature' ),
			$temp = $temperature.find( '#temp' ),
			$icon = $temp.find( '#condition' ),
			$tempNumber = $temp.find( '#num' ),
			$celsius = $temp.find( '#celsius' ),
			$fahrenheit = $temp.find( '#fahrenheit' ),
			$forecast = $weather.find( '#forecast' ),
			$search = $wrapper.find( '.search' ),
			$form = $search.find( 'form' ),
			$button = $form.find( '#button' );
		var access_key = reendex_weather_settings.reendex_weather_access_key;
		$.ajax({
			dataType: 'json',
			url: 'http://api.ipstack.com/check?access_key=access_key'
		})
			.then(function(data) {
				var yourLocation = data.city + ',' + data.zip + ',' + data.countryCode;
				getWeather( yourLocation );
			});

		function getWeather(input) {

			var appid = reendex_weather_settings.reendex_wea_api;
			var input = reendex_weather_settings.reendex_weather_location;
			var weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
			var data = {
				q: input,
				units: 'imperial',
				appid: appid
			};
			var requestWeather = $.getJSON( weatherURL, data );

			var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
			var data = {
				q: input,
				units: 'imperial',
				cnt: '6',
				appid: appid
			};
			var requestForecast = $.getJSON( forecastURL, data );

			$fahrenheit.addClass( 'active' ).removeAttr( 'href' );
			$celsius.removeClass( 'active' ).attr( "href", '#' );
			$icon.removeClass();
			$button.removeClass().addClass( 'button transparent' );

			requestWeather.done(function(data) {

				var weather = document.getElementById( 'weather' );
				if (data.cod === '404') {
					$city.html( 'city not found' );
					setBackground( 'color404', 'button404' );
					weather.style.display = 'none';
				}

				var dt = new Date( data.dt * 1000 ).toString().split( ' ' );

				$city.html( data.name + ', ' + data.sys.country );
				$tempNumber.html( Math.round( data.main.temp ) );
				$description.html( titleCase( data.weather[0].description ) );
				$wind.html( 'Wind: ' + data.wind.speed + ' mph' );
				$humidity.html( 'Humidity ' + data.main.humidity + '%' );
				$dt.html( fullDay( dt[0] ) + ' ' + dt[4].substring( 0, 5 ) );

				$celsius.on( 'click', toCelsius );
				$fahrenheit.on( 'click', toFahrenheit );

				function toCelsius() {
					$( this ).addClass( 'active' ).removeAttr( 'href' );
					$fahrenheit.removeClass( 'active' ).attr( 'href', '#' );
					$tempNumber.html( Math.round( (data.main.temp - 32) * (5 / 9) ) );
				}

				function toFahrenheit() {
					$( this ).addClass( 'active' ).removeAttr( 'href' );
					$celsius.removeClass( 'active' ).attr( "href", '#' );
					$tempNumber.html( Math.round( data.main.temp ) );
				}

				switch (data.weather[0].icon) {
					case '01d':
						$icon.addClass( 'wi wi-day-sunny' );
						break;
					case '02d':
						$icon.addClass( 'wi wi-day-sunny-overcast' );
						break;
					case '01n':
						$icon.addClass( 'wi wi-night-clear' );
						break;
					case '02n':
						$icon.addClass( 'wi wi-night-partly-cloudy' );
						break;
				}

				switch (data.weather[0].icon.substr( 0, 2 )) {
					case '03':
						$icon.addClass( 'wi wi-cloud' );
						break;
					case '04':
						$icon.addClass( 'wi wi-cloudy' );
						break;
					case '09':
						$icon.addClass( 'wi wi-showers' );
						break;
					case '10':
						$icon.addClass( 'wi wi-rain' );
						break;
					case '11':
						$icon.addClass( 'wi wi-thunderstorm' );
						break;
					case '13':
						$icon.addClass( 'wi wi-snow' );
						break;
					case '50':
						$icon.addClass( 'wi wi-fog' );
						break;
				}
			});

			requestForecast.done(function(data) {

				$celsius.on( 'click', toCelsius );
				$fahrenheit.on( 'click', toFahrenheit );

				var forecast = [];
				var length = data.list.length;
				for (var i = 1; i < length; i++) {
					forecast.push({
						date: new Date( data.list[i].dt * 1000 ).toString().split( ' ' )[0],
						fahrenheit: {
							high: Math.round( data.list[i].temp.max ),
							low: Math.round( data.list[i].temp.min ),
						},
						celsius: {
							high: Math.round( (data.list[i].temp.max - 32) * (5 / 9) ),
							low: Math.round( (data.list[i].temp.min - 32) * (5 / 9) )
						}
					});
				}

				function toCelsius() {
					doForecast( 'celsius' );
				}

				function toFahrenheit() {
					doForecast( 'fahrenheit' );
				}

				function doForecast(unit) {
					var arr = [];
					var length = forecast.length;
					for (var i = 0; i < length; i++) {
						arr[i] = ("<div class='block'><h3 class='secondary'>" + forecast[i].date + "</h3><h2 class='high'>" + forecast[i][unit].high + "</h2><h4 class='secondary'>" + forecast[i][unit].low + "</h4></div>");
					}
					$forecast.html( arr.join( '' ) );
				}

				doForecast( 'fahrenheit' );
			});
		}
	});

	/* 27. About Us Page */

	$( 'body' ).scrollspy({
		target: '.editorial-section',
		offset: 200
	});
	// Animate The Scroll.
	$( '.menuitem a' ).on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$( 'html, body' ).animate({
				scrollTop: $( hash ).offset().top - 160
			}, 600);
		}
	});

	/* 28. Countdown */
	$( '[data-countdown]' ).each(function() {
		var $this = $( this ),
			finalDate = $( this ).data( 'countdown' );
		$this.countdown(finalDate, function(event) {
			$this.html( event.strftime( '<div>%-D <span>days</span></div> <div>%-H <span>hrs</span></div> <div>%M <span>min</span></div> <div> %S <span>sec</span></div>' ) );
		});
	});

	/* 29. Fix jumping on top */
	$( 'a[href="#"]' ).live('click', function(e) {
		 e.preventDefault();
	});

	 /* 30. Mobile menu */
    $( '#wprmenu_menu_ul [class$="_sub-menu"]' ).hide();
    $( '#wprmenu_menu_ul li' ).on('click', function() {
    $( this ).siblings( 'li' ).find( 'ul' ).slideUp();
    $( '[class$="_sub-menu"]', this ).slideToggle();
    $( this ).siblings( 'li' ).find( 'span' ).removeClass( 'wprmenu_par_opened' );
    });
    
    if($('#wprmenu_menu').css('display') === 'block') {
            $('body').addClass("nav-open");
        } else {
            $('body').removeClass("nav-open");
    }

	/* 31. Search box */
	if ( $( '.search-icon' ).length > 0 ) {
		$( '.search-icon' ).on('click', function(e) {
			e.preventDefault();
			$( '.search-box-wrap' ).slideToggle();
		});
	}
	$( '.search-close-btn' ).on('click', function(e){
		e.preventDefault();
		$( '.search-box-wrap' ).slideToggle();
	});

	/* 32. Hide empty tags */
	$( "a:empty" ).parent().hide();
	$( "a:empty" ).remove();
	$( "a.external-link:empty" ).hide();

	/* 33. Prevent Menu from closing when click inside */
	$( 'ul.dropdown-menu' ).on('click', function(event) {
		event.stopPropagation();
	} );

	$( document ).ready( function() {
		/* 34. Magnific popup */
		$( 'a[href*=".jpg"]:not(.rollover-thumbnail a), a[href*=".jpeg"]:not(.rollover-thumbnail a), a[href*=".png"]:not(.rollover-thumbnail a), a[href*=".gif"]:not(.rollover-thumbnail a)' ).each(function() {
			if ($( this ).parents( '.gallery' ).length == 0) {
				$( this ).magnificPopup({
					type:'image',
					closeOnContentClick: true,
					image: {
						titleSrc: function(item) {
							return item.el.parents( 'article' ).find( 'figcaption' ).html();
						},
						verticalFit: true,
					}
				});
			}
		});
		$( '.gallery' ).each(function() {
			$( this ).magnificPopup({
				delegate: 'a',
				type: 'image',
				image: {
					titleSrc: function(item) {
						return item.el.parents( '.gallery-item' ).find( '.gallery-caption' ).text();
					},
					verticalFit: true,
				},
				gallery: {enabled: true}
			});
		});

		/* 35. Sticky Module */
		$( '.sticky-module' ).theiaStickySidebar( {
			// or 'stick-to-top', 'stick-to-bottom'.
			'sidebarBehavior': 'modern',
			'updateSidebarHeight': true,
		});
		$( '.editorial-sticky' ).theiaStickySidebar( {
			// or 'stick-to-top', 'stick-to-bottom'.
			'sidebarBehavior': 'modern',
			'updateSidebarHeight': true,
			'additionalMarginTop': 50,
		});
		$( '.sticky-module' )
		.on( 'sticky_kit:bottom', function(e) {
			$( this ).parent().css( 'position', 'static' );
		} )
		.on( 'sticky_kit:unbottom', function(e) {
			$( this ).parent().css( 'position', 'relative' );
		} );

		/* 36. Masonry Gallery */
		$( '.content-archive-wrapper-1, .content-archive-wrapper-2, .content-archive-wrapper-3' ).masonry({
			// options...
			itemSelector: 'article',
		});
		$( '.related-posts-2, .related-posts-3' ).masonry({
			// options...
			itemSelector: '.related-item-block',
		});

		/* 37. Google Ads */
		var adsbygoogle = (adsbygoogle = window.adsbygoogle || []);
		$( ".adsbygoogle" ).each( function() { adsbygoogle.push( this ) } );

		/* 38. Vimeo video */
		var iframe = document.getElementById( 'embeddedVideo' );
		if ( typeof( iframe ) != 'undefined' && iframe != null ) {
			var player = new Vimeo.Player( iframe );
			player.ready().then(function () {
				if ( $( '#video_mute' ).val() == 1 ) {
					player.setVolume( 0 );
				}
				if ( $( '#video_mute' ).val() == 0 ) {
					player.setVolume( 1 );
				}
			});
		}
	});

	/* 39. Hide iframe if empty */
	$( 'iframe' ).each(function() {
		var src = this.src.toLowerCase();
		if ( src === self.location.href || ! /^https?:[\/]{0,2}\w/i.test( src ) ) {
			$( this ).hide();
		} else {
			$( this ).show();
		}
	});

	/* 40. Facebook video */
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName( s )[0];
		if ( d.getElementById( id ) ) {
			return;
		}
		js = d.createElement( s ); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
		fjs.parentNode.insertBefore( js, fjs );
	}(document, 'script', 'facebook-jssdk'));

	/* 41. Clock */
	if ( $( 'body' ).hasClass( 'reendex_live_time' ) ) {
		$.startTime = function () {
			var today = new Date();
			var h = today.getHours();
			var m = today.getMinutes();
			var s = today.getSeconds();
			var suffix = h >= 12 ? " PM":" AM";
			if ( $( 'body' ).hasClass( 'reendex_time_in_twelve_format' ) ) {
				h = ((h + 11) % 12) + 1;
				m = $.checkTime( m );
				s = $.checkTime( s ) + suffix;
			} else {
				m = $.checkTime( m );
				s = $.checkTime( s );
			}
			$( '#time' ).html( h + ":" + m + ":" + s );
			var t = setTimeout( function(){$.startTime()},500 );
		}
		$.checkTime = function(i) {
			if (i<10) {i = "0" + i};  // End if().
			return i;
		}
		$.startTime();
	}

})(jQuery);
