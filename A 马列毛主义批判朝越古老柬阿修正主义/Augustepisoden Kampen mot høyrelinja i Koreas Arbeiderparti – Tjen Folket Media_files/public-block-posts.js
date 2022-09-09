/**
 * Posts
 */
( function( $ ) {

	function canvasInitPostsMasonry() {
		$( '.cnvs-block-posts-layout-masonry:not(.cnvs-block-posts-layout-masonry-colcade-ready)' )
			.addClass( 'cnvs-block-posts-layout-masonry-colcade-ready' )
			.each( function() {
				new Colcade( this, {
					columns: '.cnvs-block-post-grid-col',
					items: '.cnvs-block-post-grid-item'
				});
			} );
	}

	$( document ).ready( function() {
		canvasInitPostsMasonry();
		$( document.body ).on( 'post-load', function() {
			canvasInitPostsMasonry();
		} );
	} );

} )( jQuery );
