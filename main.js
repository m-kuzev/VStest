(function() {
	'use strict';
	var scrollableUl;
	var myScroll = new IScroll('#scroll_1_cont');

	// $('#scroll_1_cont').on('touchmove', function(e) {
	// 	console.log('X: ' + e.pageX);
	// });
	$('#resizer').on('touchend', function() {
		scrollableUl = $('#scroll_1_cont > ul');
		// scrollableUl.css('height', '400px');
	});

	$('#refresher').on('touchend', function() {
		
		myScroll.refresh();
	});

})();