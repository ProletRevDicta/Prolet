/**
 * Block Tabs
 */
( function( $ ) {

	$( document ).ready( function() {

		$( document ).on( 'click', '.cnvs-block-tabs .cnvs-block-tabs-button a', function( e ) {
			e.preventDefault();

			var $tab = $( this ).closest( '.cnvs-block-tabs-button' );
			var $tabs = $tab.closest( '.cnvs-block-tabs' );

			$tab
				.addClass( 'cnvs-block-tabs-button-active' )
				.siblings()
				.removeClass( 'cnvs-block-tabs-button-active' );
			$tabs
				.find( '.cnvs-block-tabs-content' ).children( '.cnvs-block-tab:eq(' + $tab.index() + ')' )
				.addClass( 'cnvs-block-tab-active' )
				.siblings()
				.removeClass( 'cnvs-block-tab-active' );
		} );

		$( '.cnvs-block-tabs .cnvs-block-tabs-button-active a' ).click();

	} );
} )( jQuery );
