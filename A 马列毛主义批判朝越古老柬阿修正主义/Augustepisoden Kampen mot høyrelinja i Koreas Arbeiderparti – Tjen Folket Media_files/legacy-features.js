( function( $ ) {
	"use strict";

	/**
	 * Global Vars
	 */

	var windowWidth = window.innerWidth,
		windowHeight = window.innerHeight,
		adminBarHeight = $( '#wpadminbar' ).innerHeight(),
		headerHeight = $( '.site-header' ).innerHeight(),
		navBarHeight = $( '.navbar-primary' ).innerHeight();

	if ( $( 'body' ).hasClass( 'admin-bar' ) ) {
		if ( window.innerWidth > 782 ) {
			adminBarHeight = 32;
		} else {
			adminBarHeight = 46;
		}
	}

	$( document ).ready( function() {
		headerHeight = $( '.site-header' ).innerHeight();
		navBarHeight = $( '.navbar-primary' ).innerHeight();
	} );

	$( window ).resize( function() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		adminBarHeight = $( '#wpadminbar' ).innerHeight();
		headerHeight = $( '.site-header' ).innerHeight();
		navBarHeight = $( '.navbar-primary' ).innerHeight();
	} );

	var isIE = /MSIE|Trident/i.test( navigator.userAgent );

	var isRetina = false;

	if ( window.matchMedia ) {
		var mq = window.matchMedia( "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)" );
		if ( mq && mq.matches || ( window.devicePixelRatio > 1 ) ) {
			isRetina = true;
		}
	}

	var rtl = false;

	if ( $( 'body' ).hasClass( 'rtl' ) ) {
		rtl = true;
	}

	/**
	 * Sliders
	 */

	// Slider Parallax

	var owlSlide = $( '.parallax-enabled .slider-featured .slide-parallax:not(.slide-video)' );
	var owlVideo = $( '.slide-video' );

	// Init Hook

	function onInitialized( event ) {

		var $container = $( event.target );

		owlSlide = $( '.parallax-enabled .slider-featured .slide-parallax:not(.slide-video)' );
		$( '.overlay-media', owlSlide ).each( function() {

			$( this ).jarallax( {
				speed: 0.8,
				elementInViewport: $container,
				noIos: false,
			} );

			$( this ).attr( 'data-parallax', 'image' );

		} );

		owlVideo = $( '.slide-video' );

		$( owlVideo ).each( function() {

			var videoSrc = $( this ).data( 'video' ),
				videoStartTime = $( this ).data( 'start' ),
				videoEndTime = $( this ).data( 'end' ),
				speed = 0.8;

			if ( !$( this ).hasClass( 'slide-parallax' ) ) {
				speed = 1;
			}

			$( '.overlay-media', this ).jarallax( {
				speed: speed,
				videoSrc: videoSrc,
				videoStartTime: videoStartTime,
				videoEndTime: videoEndTime,
				elementInViewport: $container,
				noIos: false,
			} );

			$( '.overlay-media', this ).attr( 'data-parallax', 'video' );

		} );

		// Recalc.
		$( window ).trigger( 'slider-refresh' );

	}

	// Resize Hook

	function onResized() {
		// Reinit Parallax.
		owlSlide = $( '.parallax-enabled .slider-featured .slide-parallax .overlay-media' );

		$( owlSlide ).each( function() {
			if ( $( this ).attr( 'data-parallax' ) ) {
				$( this ).jarallax( 'clipContainer' ).jarallax( 'coverImage' ).jarallax( 'onScroll' );
			}
		} );
	}

	// Center
	function initSliderCenter() {
		var sliderCenter = $( '.slider-center' );

		sliderCenter.each( function() {

			function setArrowWidth( event ) {
				var carousel = $( event.target );
				$( '.owl-arrows > button', carousel.parent() ).css( 'width', ( carousel.innerWidth() - $( '.owl-item.center', carousel ).innerWidth() - carousel.parent().data( 'padding' ) * 2 ) / 2 + 'px' );
			}

			function sliderCenterInitialized( event ) {
				setArrowWidth( event );
				onInitialized( event );
			}

			function sliderCenterResized( event ) {
				setArrowWidth( event );
				onResized();
			}

			var container = $( this );
			var owl = $( '.owl-carousel', container );

			owl.owlCarousel( {
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				dotsContainer: $( '.owl-dots', container ),
				navContainer: $( '.owl-arrows', container ),
				navText: [ '', '' ],
				autoHeight: true,
				rtl: rtl,
				responsive: {
					0: {
						items: 1,
						loop: false,
						margin: 0,
						dots: true,
						nav: false,
					},
					1020 : {
						autoplay: $( this ).data( 'autoplay' ),
						autoplayTimeout: $( this ).data( 'timeout' ),
						loop: false,
						margin: 0,
						items: 1,
						dots: true,
						nav: false,
					},
					1240: {
						autoplay: $( this ).data( 'autoplay' ),
						autoplayTimeout: $( this ).data( 'timeout' ),
						margin: $( this ).data( 'padding' ),
						center: true,
						items: 3,
						loop: true,
						autoWidth: true,
						dots: false,
						nav: true,
					}
				},
				onInitialized: sliderCenterInitialized,
				onResized: sliderCenterResized,
			} );
		} );
	}

	$( document ).ready( function() {
		initSliderCenter();
		$( document.body ).on( 'post-load', function() {
			initSliderCenter();
		} );
	} );

	// Boxed

	function initSliderBoxed() {
		var sliderBoxed = $( '.slider-boxed' );

		sliderBoxed.each( function() {

			var container = this;
			var owl = $( '.owl-carousel', this );

			owl.owlCarousel( {
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				items: 1,
				margin: 0,
				autoHeight: true,
				navText: [
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.previous + '</span></div>',
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.next + '</span></div>'
				],
				dots: true,
				dotsContainer: $( '.owl-dots', container ),
				navContainer: $( '.owl-arrows', container ),
				rtl: rtl,
				responsive: {
					0: {
						nav: false,
					},
					1020: {
						autoplay: $( this ).data( 'autoplay' ),
						autoplayTimeout: $( this ).data( 'timeout' ),
						nav: true,
						loop: true
					}
				},
				onInitialized: onInitialized,
				onResized: onResized,
			} );

		} );
	}

	$( document ).ready( function() {
		initSliderBoxed();
		$( document.body ).on( 'post-load', function() {
			initSliderBoxed();
		} );
	} );

	// Large
	function sliderLargePosition() {

		// Redefine variables.
		var sliderLarge = $( '.slider-large' );
		var sliderLargeOuter = $( '.overlay-outer', sliderLarge );

		// Define heights.
		var owlSlide = $( '.post-outer', sliderLarge ),
			contentHeight = $( '.overlay-inner', owlSlide ).innerHeight(),
			offsetHeight = adminBarHeight + headerHeight,
			availableHeight = windowHeight - offsetHeight,
			viewPortHeight = '100vh';

		// Offset page header.
		sliderLarge.css( 'margin-top', -offsetHeight + 'px' );
		sliderLargeOuter.css( 'padding-top', offsetHeight + 'px' );

		// Set the slider height.
		if ( availableHeight >= contentHeight ) {
			sliderLargeOuter.css( 'height', viewPortHeight );
		} else {
			sliderLargeOuter.css( 'height', contentHeight + offsetHeight + 'px' );
		}

		// Return if overlay variant is set to bottom.
		if ( $( document.body ).hasClass( 'style-align-left' ) ) {
			return;
		}

		// Add extra padding, if possible.
		if ( availableHeight - offsetHeight >= contentHeight ) {
			sliderLargeOuter.css( 'padding-bottom', offsetHeight + 'px' );
		} else {
			sliderLargeOuter.css( 'padding-bottom', 0 );
		}
	}

	function sliderLargeInitialized( event ) {
		sliderLargePosition();
		onInitialized( event );
	}

	function sliderLargeResized( event ) {
		sliderLargePosition();
		onResized();
	}

	function initSliderLarge() {
		var sliderLarge = $( '.slider-large' ),
			sliderLargeOuter = $( '.overlay-outer', sliderLarge );

		sliderLarge.each( function() {

			var container = this,
				owl = $( '.owl-carousel', this ),
				autoHeight = false;

			if ( $( document.body ).hasClass( 'style-type-classic' ) ) {
				autoHeight = true;
			}

			owl.owlCarousel( {
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				autoHeight: autoHeight,
				items: 1,
				margin: 0,
				navText: [
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.previous + '</span></div>',
					'<div class="button button-primary button-effect"><span><i class="cs-icon cs-icon-chevron-up"></i></span><span>' + translation.next + '</span></div>'
				],
				dots: true,
				dotsContainer: $( '.owl-dots', container ),
				navContainer: $( '.owl-arrows', container ),
				rtl: rtl,
				responsive: {
					0: {
						nav: false,
					},
					1020: {
						autoplay: $( this ).data( 'autoplay' ),
						autoplayTimeout: $( this ).data( 'timeout' ),
						nav: true,
						loop: true,
					}
				},
				onInitialized: sliderLargeInitialized,
				onTranslated: sliderLargePosition,
				onResized: sliderLargeResized,
			} );
		} );
	}

	$( document ).ready( function() {
		initSliderLarge();
		$( document.body ).on( 'post-load', function() {
			initSliderLarge();
		} );
	} );

	// Recalc slider on vertical window resize.
	$( window ).resize( function() {
		if ( $( window ).width() === windowWidth ) {
			return;
		}
		windowWidth = $( window ).width();
		sliderLargeResized();
	} );

	// Multiple

	function initSliderMultiple() {

		var sliderMultiple = $( '.slider-multiple' );

		sliderMultiple.each( function() {

			var container = this;
			var owl = $( '.owl-carousel', this );

			owl.owlCarousel( {
				autoplayHoverPause: true,
				dragEndSpeed: 500,
				smartSpeed: 500,
				navContainer: $( '.owl-arrows', container ),
				navText: [ '', '' ],
				dots: true,
				dotsContainer: $( '.owl-dots', container ),
				autoHeight: true,
				rtl: rtl,
				responsive: {
					0: {
						nav: false,
						loop: false,
						margin: 0,
						stagePadding: 0,
						items: 1,
					},
					1020: {
						autoplay: $( this ).data( 'autoplay' ),
						autoplayTimeout: $( this ).data( 'timeout' ),
					},
					1120: {
						autoplay: $( this ).data( 'autoplay' ),
						autoplayTimeout: $( this ).data( 'timeout' ),
						margin: $( this ).data( 'padding' ),
						items: $( this ).data( 'slides-visible' ),
						nav: true,
						loop: true,
						stagePadding: 90,
					}
				},
				onInitialized: onInitialized,
				onResized: onResized,
			} );

		} );

	}

	$( document ).ready( function() {
		initSliderMultiple();
		$( document.body ).on( 'post-load', function() {
			initSliderMultiple();
		} );
	} );

	// Loop

	function initSliderLoop() {
		var sliderLoop = $( '.slider-loop' );

		sliderLoop.each( function() {

			var container = this;
			var owl = $( '.owl-carousel', this );

			$( owl ).imagesLoaded( function() {

				owl.owlCarousel( {
					dragEndSpeed: 250,
					smartSpeed: 250,
					autoHeight: true,
					dots: true,
					dotsContainer: $( '> .owl-dots', container ),
					rtl: rtl,
					responsive: {
						0: {
							items: 1,
							margin: 0,
						},
						760: {
							items: 2,
							margin: 40,
						},
						1020: {
							items: 3,
							margin: 30,
						},
						1120: {
							items: 3,
							margin: 40,
						},
						1240: {
							items: $( container ).data( 'columns' ),
							margin: 30,
						},
						1640: {
							items: $( container ).data( 'columns' ),
							margin: 40,
						},
					},
				} );

			} );

		} );
	}

	$( document ).ready( function() {
		initSliderLoop();
		$( document.body ).on( 'post-load', function() {
			initSliderLoop();
		} );
	} );

} )( jQuery );
