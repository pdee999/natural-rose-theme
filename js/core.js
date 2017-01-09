//Natural Rose Global Object
var $naturalrose = {
	body: $('body'),
	contactFormWrapper: $('#footer-contact-form'),
	contactForm: $('#contact-us'),
	contactToggleButton: $('#contact-form-toggle'),
	contactToggleHeight: function() {
		return this.contactToggleButton.outerHeight();
	},
	viewportHeight: $(window).height(),
	initForm: function() {
		var $scrollPosition = $(window).scrollTop(),
			$formHeight = $naturalrose.contactFormWrapper.outerHeight(),
			$totalFormHeight = $formHeight - this.contactToggleHeight,
			$footerHeight = $('#site-footer').outerHeight(),
			$documentHeight = $(document).height();
		// console.log($documentHeight);
		// console.log($scrollPosition + $viewportHeight);
		// console.log(($documentHeight - $formHeight - $footerHeight) + $toggleHeight);
		// console.log($scrollPosition + $naturalrose.viewportHeight);
		// console.log(($documentHeight - $formHeight - $footerHeight) + $naturalrose.contactToggleHeight());
		if (($scrollPosition + $naturalrose.viewportHeight) < ($documentHeight - $formHeight - $footerHeight + $naturalrose.contactToggleHeight()) ) {
			$naturalrose.contactFormWrapper.addClass('stuck');
		}
	},
	reInitForm: function() {
		$naturalrose.contactFormWrapper.removeClass('stuck');
		Waypoint.refreshAll();
		$naturalrose.initForm();
	},
	sliders: $('.slick'),
	afterSliderInitChange: function () {
		// Reinitialize contact form after sliders initialize
		$.each($naturalrose.sliders, function () {
			$(this).on('afterChange init reInit', function(event, slick, currentSlide){
				$naturalrose.reInitForm();
			});
		});
	}
};

//Document Ready
(function($){//Begin No Conflict
	$(document).ready(function() {//Begin Document Ready

		//Sticky Header
		if ($naturalrose.siteHeader.length) {
			$naturalrose.stickyHeader();
		}

		// Sticky Footer
		if ($naturalrose.stickyFooter.length) {
			$naturalrose.stickFooter();
		}

		//Toggle Navigation
		if ($naturalrose.navMenu.length) {
			$naturalrose.toggleNav();
		}

		//Toggle Search
		if ($naturalrose.searchBar.length) {
			$naturalrose.toggleSearch();
		}

		//Prefooter Contact Form
		if ($naturalrose.contactFormWrapper.length) {
			$naturalrose.prefooterContactForm();
		}

		//Reinit footer comment form after slider init, reinit or change
		if ($naturalrose.sliders.length) {
			$naturalrose.afterSliderInitChange();
		}

		// Hero Unit: Parallax
		if ($naturalrose.heroUnitParallax.length) {
			$naturalrose.heroParallax();
		}

		// Hero Unit: Background image carousel
		if ($naturalrose.heroBackgroundSlider.length) {
			$naturalrose.heroBackgroundCarousel();
		}

		// Hero Unit: Content and background image carousel
		if ($naturalrose.heroSlider.length) {
			$naturalrose.heroCarousel();
		}

		// Hero Unit: Feature Carousel
		if ($naturalrose.featureCarousel.length) {
			$naturalrose.heroFeatureCarousel();
		}

		//Testimonial Slider
		if ($naturalrose.quoteSlider.length) {
			$naturalrose.testimonialSlider();
		}

		//Product Slider: Popular
		if ($naturalrose.productSliderPopular.length) {
			$naturalrose.popularSlider();
		}

		//Product Slider: Similar
		if ($naturalrose.productSliderSimilar.length) {
			$naturalrose.similarSlider();
		}


	});//End Document Ready
})(jQuery);//End No Conflict