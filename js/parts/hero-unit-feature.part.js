var $heroFeatureCarousel = function() {

    if (this.featureCarousel.length) {
        $.each(this.featureCarousel, function() {
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
    }

};

module.exports = $heroFeatureCarousel;