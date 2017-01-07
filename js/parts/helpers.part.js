var $containsAll = function(needles, haystack) { //If array contains all values
	for (var i = 0 , len = needles.length; i < len; i++) {
		if($.inArray(needles[i], haystack) == -1) return false;
	}
	return true;
};
//$containsAll();

var $scrollfade = function(fadeElement) {
	$(window).on('scroll', function(){
		var $element = $(fadeElement), //Set element to fade
		$elementPosition = $element.position(),
		$offset = 150,
		$effectFadeInBottom = ( ( $elementPosition.top - $(window).scrollTop() + $element.height() + $offset )/100 ) * -1, // Fade in as element enters bottom
		$effectFadeOutTop = ( $elementPosition.top - $(window).scrollTop() + $(window).height() + $offset )/100, // Fade out as element exits top
		$effectFadeOutBottom = ( $elementPosition.top - $(window).scrollTop() + $element.height() + $offset )/100, // Fade out as element enters bottom
		$effectFadeInTop = ( ( $elementPosition.top - $(window).scrollTop() + $(window).height() + $offset )/100 ) * -1, // Fade in as element exits top
		$minOpacity = 0.1,
		$maxOpacity = 1,
		$chosenEffect = $effectFadeOutBottom; //Set chosen effect
		if ( $chosenEffect <= $minOpacity ) {
			$element.css({ 'opacity': $minOpacity } );
		} else if ( $chosenEffect >= $maxOpacity ) {
			$element.css({ 'opacity': $maxOpacity } );
		} else if ( $chosenEffect > $minOpacity || $chosenEffect < $maxOpacity ) {
			$element.css({ 'opacity': $chosenEffect } );
		}
	});
};
//$scrollfade();