$(document).ready(function () {
    $('.slider').slick({
        nextArrow: $('.big-img-next'),
        prevArrow: $('.big-img-prev'),
        waitForAnimate: false,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 2000,
        pauseOnFocus: false,
    });

    $('.latest-mobile-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        swipe: false,
        nextArrow: $('.latest-mobile-next'),
        prevArrow: $('.latest-mobile-prev'),
        responsive: [
            {
                breakpoint: 2100,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
        ]
    });

    $('.latest-news-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        swipe: false,
        nextArrow: $('.latest-news-next'),
        prevArrow: $('.latest-news-prev'),
        responsive: [
            {
                breakpoint: 2300,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
        ]
    });

    $('.brands-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        swipe: false,
        nextArrow: $('.brands-next'),
        prevArrow: $('.brands-prev'),
        responsive: [
            {
                breakpoint: 2100,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                }
            },
        ]
    });
    // $('.ratings-container').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 0,
    //     infinite: false,
    //     arrows: false,
    //     responsive: [
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 swipe: true,
    //                 infinite: true,
    //             }
    //         },
    //         {
    //             breakpoint: 425,
    //             settings: {
    //                 slidesToShow: 1.5,
    //                 slidesToScroll: 1,
    //                 swipe: true,
    //             }
    //         },
    //     ]
    // });

});