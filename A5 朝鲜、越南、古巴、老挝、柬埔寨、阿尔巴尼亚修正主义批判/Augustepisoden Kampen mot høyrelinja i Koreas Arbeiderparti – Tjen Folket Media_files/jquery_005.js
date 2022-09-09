jQuery(document).ready(function($){
	$('.easy-footnote a').qtip({
		prerender: true,
		position: {
	        my: 'top center',  // Position my top left...
	        at: 'bottom center', // at the bottom right of...
	        viewport: $(window)
	    },
	    style: {
		    classes: 'qtip-bootstrap'
	    },
	    hide: {
            fixed: true,
            delay: 400,
            event: 'unfocus blur mouseleave'
		},
		show: {
			event: 'focus mouseenter'
		}
	});
});
