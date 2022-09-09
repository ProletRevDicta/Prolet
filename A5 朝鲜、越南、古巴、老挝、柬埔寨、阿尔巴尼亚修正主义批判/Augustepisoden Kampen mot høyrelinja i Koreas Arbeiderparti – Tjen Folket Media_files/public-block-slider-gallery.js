/**
 * Slider Gallery
 */
( function( $ ) {

	function canvasInitSliderGallery() {

		/**
		 * Get Page Info
		 */
		function canvasSliderPageInfo( cellNumber, cellsLength ) {
			var sep = canvas_sg_flickity.page_info_sep;

			return '<span class="current">' + ( cellNumber + 1 ) + '</span><span class="sep">' + sep + '</span><span class="cells">' + cellsLength + '</span>';
		}

		/**
		 * Slider Init
		 */
		$( '.cnvs-gallery-type-slider:not(.cnvs-gallery-type-slider-ready)' ).imagesLoaded( function( instance ) {

			$( instance.elements ).each( function( index, el ) {
				var $el = $( el );

				$el.filter(':not(.cnvs-gallery-type-slider-ready)')
					.addClass( 'cnvs-gallery-type-slider-ready' )
					.flickity( {
						pageDots: $el.data( 'sg-page-dots' ),
						prevNextButtons: $el.data( 'sg-nav' ),
						adaptiveHeight: true,
						cellAlign: 'left',
						contain: true,
						on: {
							ready: function() {
								var data = Flickity.data( el );

								$el.addClass( 'is-animate slider-loaded' );

								if ( $el.data( 'sg-page-info' ) ) {

									if ( $el.data( 'sg-page-dots' ) ) {
										$el.find( '.flickity-page-dots' ).wrap( '<div class="flickity-pages"></div>' );
									} else {
										$el.append( '<div class="flickity-pages"></div>' );
									}

									var cellNumber = data.selectedIndex;

									$el.find( '.flickity-pages' ).append( '<div class="flickity-page-info">' + canvasSliderPageInfo( cellNumber, data.cells.length ) + '</div>' );
								}

								$( document.body ).trigger( 'image-load' );
							},
							change: function( cellNumber ) {
								var data = Flickity.data( el );

								if ( $el.data( 'sg-page-info' ) ) {

									$el.find( '.flickity-page-info' ).html( canvasSliderPageInfo( cellNumber, data.cells.length ) );
								}
							}
						}
					} );
			} );
		} );
	}

	$( document ).ready( function() {
		canvasInitSliderGallery();
		$( document.body ).on( 'post-load', function() {
			canvasInitSliderGallery();
		} );

		if ( 'undefined' !== typeof wp && 'undefined' !== typeof wp.hooks ) {
			wp.hooks.addAction( 'canvas.components.serverSideRender.onChange', 'canvas/slider-gallery.init', function( props ) {
				if ( 'canvas/slider-gallery' === props.block ) {
					canvasInitSliderGallery();
				}
			} );
		}
	} );

} )( jQuery );