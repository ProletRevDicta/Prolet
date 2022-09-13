/**
 * Block Collapsibles
 */
( function( $ ) {

	$( document ).ready( function() {
		$( '.cnvs-block-collapsible-opened > .cnvs-block-collapsible-content' ).css( 'display', 'block' );

		$( document ).on( 'click', '.cnvs-block-collapsibles .cnvs-block-collapsible-title a', function( e ) {
			e.preventDefault();

			var $collapsible = $( this ).closest( '.cnvs-block-collapsible' );

			$collapsible
				.siblings( '.cnvs-block-collapsible-opened' )
				.removeClass( 'cnvs-block-collapsible-opened' )
				.children( '.cnvs-block-collapsible-content' )
				.stop().slideUp();

			$collapsible.children( '.cnvs-block-collapsible-content' ).stop().slideToggle();
			$collapsible.toggleClass( 'cnvs-block-collapsible-opened' );
		} );
	} );
} )( jQuery );
