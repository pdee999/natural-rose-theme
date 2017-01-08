//Natural Rose Global Object
var $naturalrose = {
	body: $('body'),
	contactFormWrapper: $('#footer-contact-form'),
	contactForm: $('#contact-us'),
	toggleButton: $('#contact-form-toggle'),
	toggleHeight: function() {
		return this.toggleButton.outerHeight();
	},
	viewportHeight: $(window).height(),
	initForm: function() {
		var $scrollPosition = $(window).scrollTop(),
			$formHeight = $naturalrose.contactFormWrapper.outerHeight(),
			$totalFormHeight = $formHeight - this.toggleHeight,
			$footerHeight = $('#site-footer').outerHeight(),
			$documentHeight = $(document).height();
		// console.log($documentHeight);
		// console.log($scrollPosition + $viewportHeight);
		// console.log(($documentHeight - $formHeight - $footerHeight) + $toggleHeight);
		// console.log($scrollPosition + $naturalrose.viewportHeight);
		// console.log(($documentHeight - $formHeight - $footerHeight) + $naturalrose.toggleHeight());
		if (($scrollPosition + $naturalrose.viewportHeight) < ($documentHeight - $formHeight - $footerHeight + $naturalrose.toggleHeight()) ) {
			$naturalrose.contactFormWrapper.addClass('stuck');
		}
	},
	reInitForm: function() {
		$naturalrose.contactFormWrapper.removeClass('stuck');
		Waypoint.refreshAll();
		$naturalrose.initForm();
	}
};

//Document Ready
(function($){//Begin No Conflict
	$(document).ready(function() {//Begin Document Ready

		//Scripts go here

	});//End Document Ready
})(jQuery);//End No Conflict