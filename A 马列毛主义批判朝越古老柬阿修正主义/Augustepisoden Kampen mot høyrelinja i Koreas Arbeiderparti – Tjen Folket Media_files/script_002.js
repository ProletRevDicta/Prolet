( function() {
	document.addEventListener( 'DOMContentLoaded', function( event ) {

		wpcf7_recaptcha.execute = function( action ) {
			grecaptcha.execute(
				wpcf7_recaptcha.sitekey,
				{ action: action }
			).then( function( token ) {
				var event = new CustomEvent( 'wpcf7grecaptchaexecuted', {
					detail: {
						action: action,
						token: token,
					},
				} );

				document.dispatchEvent( event );
			} );
		};

		wpcf7_recaptcha.execute_on_homepage = function() {
			wpcf7_recaptcha.execute( wpcf7_recaptcha.actions[ 'homepage' ] );
		};

		wpcf7_recaptcha.execute_on_contactform = function() {
			wpcf7_recaptcha.execute( wpcf7_recaptcha.actions[ 'contactform' ] );
		};

		grecaptcha.ready(
			wpcf7_recaptcha.execute_on_homepage
		);

		document.addEventListener( 'change',
			wpcf7_recaptcha.execute_on_contactform
		);

		document.addEventListener( 'wpcf7submit',
			wpcf7_recaptcha.execute_on_homepage
		);

	} );

	document.addEventListener( 'wpcf7grecaptchaexecuted', function( event ) {
		var fields = document.querySelectorAll(
			"form.wpcf7-form input[name='_wpcf7_recaptcha_response']"
		);

		for ( var i = 0; i < fields.length; i++ ) {
			var field = fields[ i ];
			field.setAttribute( 'value', event.detail.token );
		}
	} );

} )();
