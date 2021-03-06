var $heroCarousel = function() {

    if (this.heroSlider.length) {
        $.each(this.heroSlider, function() {
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
    }

};

module.exports = $heroCarousel;