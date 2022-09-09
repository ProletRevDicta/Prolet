( function( $ ) {

	'use strict';

	if ( typeof wpcf7 === 'undefined' || wpcf7 === null ) {
		return;
	}

	wpcf7 = $.extend( {
		cached: 0,
		inputs: []
	}, wpcf7 );

	$( function() {
		wpcf7.supportHtml5 = ( function() {
			var features = {};
			var input = document.createElement( 'input' );

			features.placeholder = 'placeholder' in input;

			var inputTypes = [ 'email', 'url', 'tel', 'number', 'range', 'date' ];

			$.each( inputTypes, function( index, value ) {
				input.setAttribute( 'type', value );
				features[ value ] = input.type !== 'text';
			} );

			return features;
		} )();

		$( 'div.wpcf7 > form' ).each( function() {
			var $form = $( this );
			wpcf7.initForm( $form );

			if ( wpcf7.cached ) {
				wpcf7.refill( $form );
			}
		} );
	} );

	wpcf7.getId = function( form ) {
		return parseInt( $( 'input[name="_wpcf7"]', form ).val(), 10 );
	};

	wpcf7.initForm = function( form ) {
		var $form = $( form );

		wpcf7.setStatus( $form, 'init' );

		$form.submit( function( event ) {
			if ( ! wpcf7.supportHtml5.placeholder ) {
				$( '[placeholder].placeheld', $form ).each( function( i, n ) {
					$( n ).val( '' ).removeClass( 'placeheld' );
				} );
			}

			if ( typeof window.FormData === 'function' ) {
				wpcf7.submit( $form );
				event.preventDefault();
			}
		} );

		$( '.wpcf7-submit', $form ).after( '<span class="ajax-loader"></span>' );

		wpcf7.toggleSubmit( $form );

		$form.on( 'click', '.wpcf7-acceptance', function() {
			wpcf7.toggleSubmit( $form );
		} );

		// Exclusive Checkbox
		$( '.wpcf7-exclusive-checkbox', $form ).on( 'click', 'input:checkbox', function() {
			var name = $( this ).attr( 'name' );
			$form.find( 'input:checkbox[name="' + name + '"]' ).not( this ).prop( 'checked', false );
		} );

		// Free Text Option for Checkboxes and Radio Buttons
		$( '.wpcf7-list-item.has-free-text', $form ).each( function() {
			var $freetext = $( ':input.wpcf7-free-text', this );
			var $wrap = $( this ).closest( '.wpcf7-form-control' );

			if ( $( ':checkbox, :radio', this ).is( ':checked' ) ) {
				$freetext.prop( 'disabled', false );
			} else {
				$freetext.prop( 'disabled', true );
			}

			$wrap.on( 'change', ':checkbox, :radio', function() {
				var $cb = $( '.has-free-text', $wrap ).find( ':checkbox, :radio' );

				if ( $cb.is( ':checked' ) ) {
					$freetext.prop( 'disabled', false ).focus();
				} else {
					$freetext.prop( 'disabled', true );
				}
			} );
		} );

		// Placeholder Fallback
		if ( ! wpcf7.supportHtml5.placeholder ) {
			$( '[placeholder]', $form ).each( function() {
				$( this ).val( $( this ).attr( 'placeholder' ) );
				$( this ).addClass( 'placeheld' );

				$( this ).focus( function() {
					if ( $( this ).hasClass( 'placeheld' ) ) {
						$( this ).val( '' ).removeClass( 'placeheld' );
					}
				} );

				$( this ).blur( function() {
					if ( '' === $( this ).val() ) {
						$( this ).val( $( this ).attr( 'placeholder' ) );
						$( this ).addClass( 'placeheld' );
					}
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.date ) {
			$form.find( 'input.wpcf7-date[type="date"]' ).each( function() {
				$( this ).datepicker( {
					dateFormat: 'yy-mm-dd',
					minDate: new Date( $( this ).attr( 'min' ) ),
					maxDate: new Date( $( this ).attr( 'max' ) )
				} );
			} );
		}

		if ( wpcf7.jqueryUi && ! wpcf7.supportHtml5.number ) {
			$form.find( 'input.wpcf7-number[type="number"]' ).each( function() {
				$( this ).spinner( {
					min: $( this ).attr( 'min' ),
					max: $( this ).attr( 'max' ),
					step: $( this ).attr( 'step' )
				} );
			} );
		}

		// Character Count
		wpcf7.resetCounter( $form );

		// URL Input Correction
		$form.on( 'change', '.wpcf7-validates-as-url', function() {
			var val = $.trim( $( this ).val() );

			if ( val
			&& ! val.match( /^[a-z][a-z0-9.+-]*:/i )
			&& -1 !== val.indexOf( '.' ) ) {
				val = val.replace( /^\/+/, '' );
				val = 'http://' + val;
			}

			$( this ).val( val );
		} );
	};

	wpcf7.submit = function( form ) {
		if ( typeof window.FormData !== 'function' ) {
			return;
		}

		var $form = $( form );

		$( '.ajax-loader', $form ).addClass( 'is-active' );
		wpcf7.clearResponse( $form );

		var formData = new FormData( $form.get( 0 ) );

		var detail = {
			id: $form.closest( 'div.wpcf7' ).attr( 'id' ),
			status: 'init',
			inputs: [],
			formData: formData
		};

		$.each( $form.serializeArray(), function( i, field ) {
			if ( '_wpcf7' == field.name ) {
				detail.contactFormId = field.value;
			} else if ( '_wpcf7_version' == field.name ) {
				detail.pluginVersion = field.value;
			} else if ( '_wpcf7_locale' == field.name ) {
				detail.contactFormLocale = field.value;
			} else if ( '_wpcf7_unit_tag' == field.name ) {
				detail.unitTag = field.value;
			} else if ( '_wpcf7_container_post' == field.name ) {
				detail.containerPostId = field.value;
			} else if ( field.name.match( /^_/ ) ) {
				// do nothing
			} else {
				detail.inputs.push( field );
			}
		} );

		wpcf7.triggerEvent( $form.closest( 'div.wpcf7' ), 'beforesubmit', detail );

		var ajaxSuccess = function( data, status, xhr, $form ) {
			detail.id = $( data.into ).attr( 'id' );
			detail.status = data.status;
			detail.apiResponse = data;

			switch ( data.status ) {
				case 'init':
					wpcf7.setStatus( $form, 'init' );
					break;
				case 'validation_failed':
					$.each( data.invalid_fields, function( i, n ) {
						$( n.into, $form ).each( function() {
							wpcf7.notValidTip( this, n.message );
							$( '.wpcf7-form-control', this ).addClass( 'wpcf7-not-valid' );
							$( '.wpcf7-form-control', this ).attr(
								'aria-describedby',
								n.error_id
							);
							$( '[aria-invalid]', this ).attr( 'aria-invalid', 'true' );
						} );
					} );

					wpcf7.setStatus( $form, 'invalid' );
					wpcf7.triggerEvent( data.into, 'invalid', detail );
					break;
				case 'acceptance_missing':
					wpcf7.setStatus( $form, 'unaccepted' );
					wpcf7.triggerEvent( data.into, 'unaccepted', detail );
					break;
				case 'spam':
					wpcf7.setStatus( $form, 'spam' );
					wpcf7.triggerEvent( data.into, 'spam', detail );
					break;
				case 'aborted':
					wpcf7.setStatus( $form, 'aborted' );
					wpcf7.triggerEvent( data.into, 'aborted', detail );
					break;
				case 'mail_sent':
					wpcf7.setStatus( $form, 'sent' );
					wpcf7.triggerEvent( data.into, 'mailsent', detail );
					break;
				case 'mail_failed':
					wpcf7.setStatus( $form, 'failed' );
					wpcf7.triggerEvent( data.into, 'mailfailed', detail );
					break;
				default:
					wpcf7.setStatus( $form,
						'custom-' + data.status.replace( /[^0-9a-z]+/i, '-' )
					);
			}

			wpcf7.refill( $form, data );

			wpcf7.triggerEvent( data.into, 'submit', detail );

			if ( 'mail_sent' == data.status ) {
				$form.each( function() {
					this.reset();
				} );

				wpcf7.toggleSubmit( $form );
				wpcf7.resetCounter( $form );
			}

			if ( ! wpcf7.supportHtml5.placeholder ) {
				$form.find( '[placeholder].placeheld' ).each( function( i, n ) {
					$( n ).val( $( n ).attr( 'placeholder' ) );
				} );
			}

			$( '.wpcf7-response-output', $form )
				.html( '' ).append( data.message ).slideDown( 'fast' );

			$( '.screen-reader-response', $form.closest( '.wpcf7' ) ).each( function() {
				var $response = $( this );
				$( '[role="status"]', $response ).html( data.message );

				if ( data.invalid_fields ) {
					$.each( data.invalid_fields, function( i, n ) {
						if ( n.idref ) {
							var $li = $( '<li></li>' ).append( $( '<a></a>' ).attr( 'href', '#' + n.idref ).append( n.message ) );
						} else {
							var $li = $( '<li></li>' ).append( n.message );
						}

						$li.attr( 'id', n.error_id );

						$( 'ul', $response ).append( $li );
					} );
				}
			} );

			if ( data.posted_data_hash ) {
				$form.find( 'input[name="_wpcf7_posted_data_hash"]' ).first()
					.val( data.posted_data_hash );
			}
		};

		$.ajax( {
			type: 'POST',
			url: wpcf7.apiSettings.getRoute(
				'/contact-forms/' + wpcf7.getId( $form ) + '/feedback' ),
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		} ).done( function( data, status, xhr ) {
			ajaxSuccess( data, status, xhr, $form );
			$( '.ajax-loader', $form ).removeClass( 'is-active' );
		} ).fail( function( xhr, status, error ) {
			var $e = $( '<div class="ajax-error"></div>' ).text( error.message );
			$form.after( $e );
		} );
	};

	wpcf7.triggerEvent = function( target, name, detail ) {
		var event = new CustomEvent( 'wpcf7' + name, {
			bubbles: true,
			detail: detail
		} );

		$( target ).get( 0 ).dispatchEvent( event );
	};

	wpcf7.setStatus = function( form, status ) {
		var $form = $( form );
		var prevStatus = $form.attr( 'data-status' );

		$form.data( 'status', status );
		$form.addClass( status );
		$form.attr( 'data-status', status );

		if ( prevStatus && prevStatus !== status ) {
			$form.removeClass( prevStatus );
		}
	}

	wpcf7.toggleSubmit = function( form, state ) {
		var $form = $( form );
		var $submit = $( 'input:submit', $form );

		if ( typeof state !== 'undefined' ) {
			$submit.prop( 'disabled', ! state );
			return;
		}

		if ( $form.hasClass( 'wpcf7-acceptance-as-validation' ) ) {
			return;
		}

		$submit.prop( 'disabled', false );

		$( '.wpcf7-acceptance', $form ).each( function() {
			var $span = $( this );
			var $input = $( 'input:checkbox', $span );

			if ( ! $span.hasClass( 'optional' ) ) {
				if ( $span.hasClass( 'invert' ) && $input.is( ':checked' )
				|| ! $span.hasClass( 'invert' ) && ! $input.is( ':checked' ) ) {
					$submit.prop( 'disabled', true );
					return false;
				}
			}
		} );
	};

	wpcf7.resetCounter = function( form ) {
		var $form = $( form );

		$( '.wpcf7-character-count', $form ).each( function() {
			var $count = $( this );
			var name = $count.attr( 'data-target-name' );
			var down = $count.hasClass( 'down' );
			var starting = parseInt( $count.attr( 'data-starting-value' ), 10 );
			var maximum = parseInt( $count.attr( 'data-maximum-value' ), 10 );
			var minimum = parseInt( $count.attr( 'data-minimum-value' ), 10 );

			var updateCount = function( target ) {
				var $target = $( target );
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr( 'data-current-value', count );
				$count.text( count );

				if ( maximum && maximum < length ) {
					$count.addClass( 'too-long' );
				} else {
					$count.removeClass( 'too-long' );
				}

				if ( minimum && length < minimum ) {
					$count.addClass( 'too-short' );
				} else {
					$count.removeClass( 'too-short' );
				}
			};

			$( ':input[name="' + name + '"]', $form ).each( function() {
				updateCount( this );

				$( this ).keyup( function() {
					updateCount( this );
				} );
			} );
		} );
	};

	wpcf7.notValidTip = function( target, message ) {
		var $target = $( target );
		$( '.wpcf7-not-valid-tip', $target ).remove();

		$( '<span></span>' ).attr( {
			'class': 'wpcf7-not-valid-tip',
			'aria-hidden': 'true',
		} ).text( message ).appendTo( $target );

		if ( $target.is( '.use-floating-validation-tip *' ) ) {
			var fadeOut = function( target ) {
				$( target ).not( ':hidden' ).animate( {
					opacity: 0
				}, 'fast', function() {
					$( this ).css( { 'z-index': -100 } );
				} );
			};

			$target.on( 'mouseover', '.wpcf7-not-valid-tip', function() {
				fadeOut( this );
			} );

			$target.on( 'focus', ':input', function() {
				fadeOut( $( '.wpcf7-not-valid-tip', $target ) );
			} );
		}
	};

	wpcf7.refill = function( form, data ) {
		var $form = $( form );

		var refillCaptcha = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( 'img.wpcf7-captcha-' + i ).attr( 'src', n );
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec( n );
				$form.find( 'input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]' ).attr( 'value', match[ 1 ] );
			} );
		};

		var refillQuiz = function( $form, items ) {
			$.each( items, function( i, n ) {
				$form.find( ':input[name="' + i + '"]' ).val( '' );
				$form.find( ':input[name="' + i + '"]' ).siblings( 'span.wpcf7-quiz-label' ).text( n[ 0 ] );
				$form.find( 'input:hidden[name="_wpcf7_quiz_answer_' + i + '"]' ).attr( 'value', n[ 1 ] );
			} );
		};

		if ( typeof data === 'undefined' ) {
			$.ajax( {
				type: 'GET',
				url: wpcf7.apiSettings.getRoute(
					'/contact-forms/' + wpcf7.getId( $form ) + '/refill' ),
				beforeSend: function( xhr ) {
					var nonce = $form.find( ':input[name="_wpnonce"]' ).val();

					if ( nonce ) {
						xhr.setRequestHeader( 'X-WP-Nonce', nonce );
					}
				},
				dataType: 'json'
			} ).done( function( data, status, xhr ) {
				if ( data.captcha ) {
					refillCaptcha( $form, data.captcha );
				}

				if ( data.quiz ) {
					refillQuiz( $form, data.quiz );
				}
			} );

		} else {
			if ( data.captcha ) {
				refillCaptcha( $form, data.captcha );
			}

			if ( data.quiz ) {
				refillQuiz( $form, data.quiz );
			}
		}
	};

	wpcf7.clearResponse = function( form ) {
		var $form = $( form );

		$form.siblings( '.screen-reader-response' ).each( function() {
			$( '[role="status"]', this ).html( '' );
			$( 'ul', this ).html( '' );
		} );

		$( '.wpcf7-not-valid-tip', $form ).remove();
		$( '[aria-invalid]', $form ).attr( 'aria-invalid', 'false' );
		$( '.wpcf7-form-control', $form ).removeClass( 'wpcf7-not-valid' );

		$( '.wpcf7-response-output', $form ).hide().empty();
	};

	wpcf7.apiSettings.getRoute = function( path ) {
		var url = wpcf7.apiSettings.root;

		url = url.replace(
			wpcf7.apiSettings.namespace,
			wpcf7.apiSettings.namespace + path );

		return url;
	};

} )( jQuery );

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
( function () {
	if ( typeof window.CustomEvent === "function" ) return false;

	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event,
			params.bubbles, params.cancelable, params.detail );
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
} )();
