//Global Variables
var $naturalrose = {
	initForm: function() {
		var $contactForm = $('#footer-contact-form'),
			$toggleButton = $('#contact-form-toggle'),
			$toggleHeight = $toggleButton.outerHeight(),
			$viewportHeight = $(window).height();
		setTimeout(function() {
			var $scrollPosition = $(window).scrollTop(),
				$formHeight = $contactForm.outerHeight(),
				$totalFormHeight = $formHeight - $toggleHeight,
				$footerHeight = $('#site-footer').outerHeight(),
				$documentHeight = $(document).height();
			// console.log($documentHeight);
			// console.log($scrollPosition + $viewportHeight);
			// console.log(($documentHeight - $formHeight - $footerHeight) + $toggleHeight);
			if (($scrollPosition + $viewportHeight) < (($documentHeight - $formHeight - $footerHeight) + $toggleHeight) ) {
				setTimeout(function() {
					$contactForm.addClass('stuck');
				}, 1);
			}
		}, 1);
	}
};

//Document Ready
(function($){//Begin No Conflict
	$(document).ready(function() {//Begin Document Ready

		//Scripts go here

	});//End Document Ready
})(jQuery);//End No Conflict