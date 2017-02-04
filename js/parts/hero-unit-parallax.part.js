var $heroParallax = function() {

    if (this.heroUnitParallax.length) {
        this.body.addClass('parallax-active');
        $.each(this.heroUnitParallax, function() {
            var $bgImage = $(this).data('parallaxImage');
            $(this).parallax({
                imageSrc: $bgImage
            });
        });
    }

};

module.exports = $heroParallax;