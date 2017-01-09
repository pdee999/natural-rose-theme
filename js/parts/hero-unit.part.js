//Parallax
$naturalrose.heroUnitParallax = $('.hero-unit.parallax').not('.slider, .bg-slider');
$naturalrose.heroParallax = function() {
    $naturalrose.body.addClass('parallax-active');
    $.each($naturalrose.heroUnitParallax, function() {
        var $bgImage = $(this).data('parallaxImage');
        $(this).parallax({
            imageSrc: $bgImage
        });
    });
};

//Background image carousel
$naturalrose.heroBackgroundSlider = $('.hero-unit.bg-slider');
$naturalrose.heroBackgroundCarousel = function() {
    $.each($naturalrose.heroBackgroundSlider, function() {
        var $slider = $(this).find('.hero-unit-background.slick');
        // Reinitialize waypoints
        // $slider.on('init reInit', function(event, slick, currentSlide){
        //     $naturalrose.reInitForm();
        // });
        // Initialize Slider
        $slider.slick({
            // accessibility: ,
            // adaptiveHeight: false,
            // autoplay: false,
            // autoplaySpeed: 3000,
            arrows: false,
            // asNavFor: ,
            // appendArrows: ,
            // appendDots: ,
            // prevArrow: ,
            // nextArrow: ,
            // centerMode: ,
            // centerPadding: ,
            // cssEase: ,
            // customPaging: ,
            dots: true,
            // dotsClass: ,
            // draggable: ,
            // fade: ,
            // focusOnSelect: ,
            // easing: ,
            // edgeFriction: ,
            // infinite: ,
            // initialSlide: ,
            // lazyLoad: ,
            mobileFirst: true,
            // pauseOnFocus: ,
            // pauseOnHover: ,
            // pauseOnDotsHover: ,
            // respondTo: ,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 680,
                    settings: {}
                },
                {
                    breakpoint: 480,
                    settings: {}
                },
                {
                    breakpoint: 320,
                    settings: {}
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
            // rows: ,
            // slide: ,
            // slidesPerRow: ,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            //speed: ,
            // swipe: true,
            // swipeToSlide: ,
            // touchMove: ,
            // touchThreshold: ,
            // useCSS: ,
            // useTransform: ,
            // variableWidth: ,
            // vertical: ,
            // verticalSwiping: ,
            // rtl: ,
            // waitForAnimate: ,
            // zIndex: ,
        });
    });
};

//Content and background image carousel
$naturalrose.heroSlider = $('.hero-unit.slider');
$naturalrose.heroCarousel = function() {
    $.each($naturalrose.heroSlider, function() {
        var $heroBodySlider = $(this).find('.hero-unit-body.slick'),
            $heroBackgroundSlider = $(this).find('.hero-unit-background.slick');
        //Content slider
        if ($heroBodySlider.length) {
            $.each($heroBodySlider, function() {
                // Reinitialize waypoints
                // $(this).on('afterChange init reInit', function(event, slick, currentSlide){
                //     $naturalrose.reInitForm();
                // });
                // Initialize Slider
                $(this).slick({
                    // accessibility: ,
                    adaptiveHeight: true,
                    autoplay: false,
                    // autoplaySpeed: 3000,
                    arrows: false,
                    asNavFor: $heroBackgroundSlider,
                    // appendArrows: ,
                    // appendDots: ,
                    // prevArrow: ,
                    // nextArrow: ,
                    // centerMode: ,
                    // centerPadding: ,
                    // cssEase: ,
                    // customPaging: ,
                    dots: false,
                    // dotsClass: ,
                    // draggable: ,
                    fade: true,
                    // focusOnSelect: ,
                    // easing: ,
                    // edgeFriction: ,
                    // infinite: ,
                    // initialSlide: ,
                    // lazyLoad: ,
                    mobileFirst: true,
                    // pauseOnFocus: ,
                    // pauseOnHover: ,
                    // pauseOnDotsHover: ,
                    // respondTo: ,
                    // responsive: [
                    //     {
                    //         breakpoint: 1200,
                    //         settings: {}
                    //     },
                    //     {
                    //         breakpoint: 992,
                    //         settings: {}
                    //     },
                    //     {
                    //         breakpoint: 768,
                    //         settings: {}
                    //     },
                    //     {
                    //         breakpoint: 680,
                    //         settings: {}
                    //     },
                    //     {
                    //         breakpoint: 480,
                    //         settings: {}
                    //     },
                    //     {
                    //         breakpoint: 320,
                    //         settings: {}
                    //     }
                    //     // You can unslick at a given breakpoint now by adding:
                    //     // settings: "unslick"
                    //     // instead of a settings object
                    // ],
                    // rows: ,
                    // slide: ,
                    // slidesPerRow: ,
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    //speed: ,
                    // swipe: false,
                    // swipeToSlide: ,
                    // touchMove: ,
                    // touchThreshold: ,
                    // useCSS: ,
                    // useTransform: ,
                    // variableWidth: ,
                    // vertical: ,
                    // verticalSwiping: ,
                    // rtl: ,
                    // waitForAnimate: ,
                    // zIndex: ,
                });
            });
        }

        //Background slider
        if ($heroBackgroundSlider.length) {
            $.each($heroBackgroundSlider, function() {
                // Reinitialize waypoints
                // $(this).on('init reInit', function(event, slick, currentSlide){
                //     $naturalrose.reInitForm();
                // });
                // Initialize Slider
                $(this).slick({
                    // accessibility: ,
                    adaptiveHeight: false,
                    autoplay: false,
                    // autoplaySpeed: 3000,
                    arrows: false,
                    asNavFor: $heroBodySlider,
                    // appendArrows: ,
                    // appendDots: ,
                    // prevArrow: ,
                    // nextArrow: ,
                    // centerMode: ,
                    // centerPadding: ,
                    // cssEase: ,
                    // customPaging: ,
                    dots: true,
                    // dotsClass: ,
                    // draggable: ,
                    // fade: ,
                    // focusOnSelect: ,
                    // easing: ,
                    // edgeFriction: ,
                    // infinite: ,
                    // initialSlide: ,
                    // lazyLoad: ,
                    mobileFirst: true,
                    // pauseOnFocus: ,
                    // pauseOnHover: ,
                    // pauseOnDotsHover: ,
                    // respondTo: ,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                arrows: true,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: true,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: true,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 680,
                            settings: {}
                        },
                        {
                            breakpoint: 480,
                            settings: {}
                        },
                        {
                            breakpoint: 320,
                            settings: {}
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ],
                    // rows: ,
                    // slide: ,
                    // slidesPerRow: ,
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    //speed: ,
                    // swipe: true,
                    // swipeToSlide: ,
                    // touchMove: ,
                    // touchThreshold: ,
                    // useCSS: ,
                    // useTransform: ,
                    // variableWidth: ,
                    // vertical: ,
                    // verticalSwiping: ,
                    // rtl: ,
                    // waitForAnimate: ,
                    // zIndex: ,
                });
            });
        }
    });
};

//Feature Carousel
$naturalrose.featureCarousel = $('.hero-unit .hero-feature.slick');
$naturalrose.heroFeatureCarousel = function() {
    $.each($naturalrose.featureCarousel, function() {
        // Reinitialize waypoints
        // $(this).on('init reInit', function(event, slick, currentSlide){
        //     $naturalrose.reInitForm();
        // });
        // Initialize Slider
        $(this).slick({
            // accessibility: ,
            // adaptiveHeight: false,
            // autoplay: false,
            // autoplaySpeed: 3000,
            arrows: true,
            // asNavFor: ,
            // appendArrows: ,
            // appendDots: ,
            // prevArrow: ,
            // nextArrow: ,
            // centerMode: ,
            // centerPadding: ,
            // cssEase: ,
            // customPaging: ,
            dots: false,
            // dotsClass: ,
            // draggable: ,
            // fade: ,
            // focusOnSelect: ,
            // easing: ,
            // edgeFriction: ,
            // infinite: ,
            // initialSlide: ,
            // lazyLoad: ,
            mobileFirst: true,
            // pauseOnFocus: ,
            // pauseOnHover: ,
            // pauseOnDotsHover: ,
            // respondTo: ,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 680,
                    settings: {}
                },
                {
                    breakpoint: 480,
                    settings: {}
                },
                {
                    breakpoint: 320,
                    settings: {}
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
            // rows: ,
            // slide: ,
            // slidesPerRow: ,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            //speed: ,
            // swipe: true,
            // swipeToSlide: ,
            // touchMove: ,
            // touchThreshold: ,
            // useCSS: ,
            // useTransform: ,
            // variableWidth: ,
            // vertical: ,
            // verticalSwiping: ,
            // rtl: ,
            // waitForAnimate: ,
            // zIndex: ,
        });
    });
};