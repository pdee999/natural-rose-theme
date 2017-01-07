jQuery(document).ready(function($) {

    var $popularSlider = function() {
        var $productSlider = $('.product-slider-popular .slick');
        if ($productSlider.length) {
            $.each($productSlider, function() {
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
    $popularSlider();

    var $similarSlider = function() {
        var $productSlider = $('.product-slider-similar .slick');
        if ($productSlider.length) {
            $.each($productSlider, function() {
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
    $similarSlider();

});