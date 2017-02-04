//Include CSS
require('../sass/core.scss');

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
		var scrollPosition = $(window).scrollTop(),
			formHeight = this.contactFormWrapper.outerHeight(),
			footerHeight = $('#site-footer').outerHeight(),
			documentHeight = $(document).height();
		if ((scrollPosition + this.viewportHeight) < (documentHeight - formHeight - footerHeight + this.contactToggleHeight()) ) {
			this.contactFormWrapper.addClass('stuck');
		}
	},
	sliders: $('.slick'),
	reInitForm: function() {
		this.contactFormWrapper.removeClass('stuck');
		Waypoint.refreshAll();
		this.initForm();
	},
	afterSliderInitChange: function () {
		// Reinitialize contact form after sliders initialize
		if (this.sliders.length) {
			$.each(this.sliders, function () {
				$(this).on('afterChange init reInit', function(event, slick, currentSlide){
					$naturalrose.reInitForm();
				});
			});
		}
	},
	siteHeader: $('.site-header'),
	stickyHeader: require('./parts/sticky-header.part'),
	stickyFooter: $('#site-footer.sticky-footer'),
	stickFooter: require('./parts/sticky-footer.part'),
	navMenu: $('#navbar-collapse'),
	toggleNav: require('./parts/toggle-top-nav.part'),
	searchBar: $('#search'),
	toggleSearch: require('./parts/toggle-search.part'),
	prefooterContactForm: require('./parts/footer-contact.part'),
	heroUnitParallax: $('.hero-unit.parallax').not('.slider, .bg-slider'),
	heroParallax: require('./parts/hero-unit-parallax.part'),
	heroBackgroundSlider: $('.hero-unit.bg-slider'),
	heroBackgroundCarousel: require('./parts/hero-unit-background.part'),
	heroSlider: $('.hero-unit.slider'),
	heroCarousel: require('./parts/hero-unit.part'),
	featureCarousel: $('.hero-unit .hero-feature.slick'),
	heroFeatureCarousel: require('./parts/hero-unit-feature.part'),
	quoteSlider: $('.testimonial-slider'),
	testimonialSlider: require('./parts/testimonial-slider.part'),
	productSliderPopular: $('.product-slider-popular .slick'),
	popularSlider: require('./parts/product-slider-popular.part'),
	productSliderSimilar: $('.product-slider-similar .slick'),
	similarSlider: require('./parts/product-slider-similar.part')
};


//Begin No Conflict
(function($){
	//Begin Document Ready
	$(document).ready(function() {

		//Sticky Header
		$naturalrose.stickyHeader();

		// Sticky Footer
		$naturalrose.stickFooter();

		//Toggle Navigation
		$naturalrose.toggleNav();

		//Toggle Search
		$naturalrose.toggleSearch();

		//Prefooter Contact Form
		$naturalrose.prefooterContactForm();

		//Reinit footer comment form after slider init, reinit or change
		$naturalrose.afterSliderInitChange();

		// Hero Unit: Parallax
		$naturalrose.heroParallax();

		// Hero Unit: Background image carousel
		$naturalrose.heroBackgroundCarousel();

		// Hero Unit: Content and background image carousel
		$naturalrose.heroCarousel();

		// Hero Unit: Feature Carousel
		$naturalrose.heroFeatureCarousel();

		//Testimonial Slider
		$naturalrose.testimonialSlider();

		//Product Slider: Popular
		$naturalrose.popularSlider();

		//Product Slider: Similar
		$naturalrose.similarSlider();


	});//End Document Ready
})(jQuery);//End No Conflict