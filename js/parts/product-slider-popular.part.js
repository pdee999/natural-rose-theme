var $popularSlider = function() {

    if (this.productSliderPopular.length) {
        var $naturalrose = this;
        $.each(this.productSliderPopular, function() {
            // Reinitialize waypoints
            $(this).on('init reInit', function(event, slick, currentSlide){
                $naturalrose.reInitForm();
            });
            // Initialize Waypoints
            $(this).slick({
                // accessibility: ,
                adaptiveHeight: true,
                autoplay: false,
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
                // fade: false,
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
                            dots: false,
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: true,
                            dots: false,
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            dots: false,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                            arrows: true,
                            dots: false,
                            slidesToShow: 2
                        }
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
                slidesToShow: 1,
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

module.exports = $popularSlider;