$(document).ready(function () {
    // parallax
    if($('body *').is('#scene')) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }

    // accordeon plus minus

    $('.accordeon-title').click(function () {
        $('.accordeon-title').not($(this)).removeClass('minus');
        $(this).toggleClass('minus');
    });

    // to top
    $('.totop, .foottotop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

    // tablet slider index page

    function mobileOnlySlider() {
        $('.servicesdark__slider').slick({
            infinite: true,
                    speed: 700,
                    slidesToShow: 1,
                    variableWidth: true,
                    dots: false,
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                        },
                        breakpoint: 576,
                        settings: {
                            variableWidth: false,
                            slidesToShow: 1,
                        }
                    }]
        });
    }

    if (window.innerWidth > 1200) {
        mobileOnlySlider();
    }

    if (window.innerWidth < 1200) {
        if (!$('.servicesdark__slider').hasClass('slick-initialized')) {
            mobileOnlySlider();
        }

    } else {
        if ($('.servicesdark__slider').hasClass('slick-initialized')) {
            $('.servicesdark__slider').slick('unslick');
        }
    }

    $(window).resize(function (e) {
        if (window.innerWidth < 1200) {
            if (!$('.servicesdark__slider').hasClass('slick-initialized')) {
                mobileOnlySlider();
            }

        } else {
            if ($('.servicesdark__slider').hasClass('slick-initialized')) {
                $('.servicesdark__slider').slick('unslick');
            }
        }
    });

    // mob menu

    $('.burgericon').click(function(){
        $('.mobile-menu').addClass('show');
    });
    $('.closemenu').click(function(){
        $('.mobile-menu').removeClass('show');
    });










});