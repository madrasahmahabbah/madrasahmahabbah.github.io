(function() {
	var verses = $('.mahabbah-quran blockquote');
	verses.eq(Math.floor(Math.random() * verses.length)).show();

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
