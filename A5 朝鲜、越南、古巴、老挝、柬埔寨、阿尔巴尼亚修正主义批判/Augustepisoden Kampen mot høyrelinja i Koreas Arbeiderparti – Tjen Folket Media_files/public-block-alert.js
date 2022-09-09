/**
 * Block Alert
 */
( function( $ ) {

	$( document ).ready( function() {

		$( document ).on( 'click', '.cnvs-block-alert .cnvs-close', function() {
			$( this ).closest( '.cnvs-block-alert' ).remove();
		} );

	} );
} )( jQuery );
