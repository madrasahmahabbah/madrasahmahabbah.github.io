(function() {
	var verses = $('.mahabbah-quran blockquote');
	verses.eq(Math.floor(Math.random() * verses.length)).show();

	verses.click(function() {
		verses.hide().eq(Math.floor(Math.random() * verses.length)).show();
	});

	// $(function() {
	// 	var $window = $(window),
	// 			$body = $('html > body');
	// 	$window.scroll(function() {
	// 		var yPos = -($window.scrollTop() / 8);

	// 		// Put together our final background position
	// 		var coords = '50% '+ yPos + 'px';

	// 		// Move the background
	// 		$body.css({ backgroundPosition: coords });
	// 	});
	// });
})();

/**
 * modalEffects by http://www.codrops.com
 * converted to use jQuery by @wansaleh
 */
(function() {

	function init() {

		var doc = $(document.documentElement);
		var overlay = $('.md-overlay');

		$('.md-trigger').each(function(i) {
			var el = $(this);

			var modal = $('#' + el.attr('data-modal')),
				close = modal.find('.md-close');

			function removeModal() {
				$(modal).removeClass('md-show');
			}

			function removeModalHandler() {
				removeModal();
			}

			el.on('click', function(ev) {
				modal.addClass('md-show');
				overlay.off('click', removeModalHandler);
				overlay.on('click', removeModalHandler);
				return false;
			});

			close.on('click', function(ev) {
				ev.stopPropagation();
				removeModalHandler();
			});

		});

	}

	init();

})();
