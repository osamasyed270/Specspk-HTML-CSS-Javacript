// DISPLAY PRICE IN USD
var priceInRs = document.querySelector(".price-container div:nth-child(1) span:nth-child(2)").innerHTML;

function result() {
    document.querySelector(".price-container div:nth-child(2) span").innerText = (priceInRs / 160.53).toFixed(0);
}
//------- DISPLAY PRICE IN USD

// SLICK CAROUSEL START
$(document).ready(function () {
    // SLICK CAROUSEL FOR BIG MOBILE IMAGE
    $('.big-img-slider').slick({
        prevArrow: $('.mobile-big-img-prev'),
        nextArrow: $('.mobile-big-img-next'),
        swipe: true,
        asNavFor: '.small-img-slider',
        infinite: false,
    });
    //------- SLICK CAROUSEL FOR BIG MOBILE IMAGE

    // SLICK CAROUSEL FOR SMALL MOBILE IMAGES
    $('.small-img-slider').slick({
        prevArrow: $('.mobile-small-img-prev'),
        nextArrow: $('.mobile-small-img-next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.big-img-slider',
        focusOnSelect: true,
        variableWidth: true,
        infinite: false,
    });
    //------- SLICK CAROUSEL FOR SMALL MOBILE IMAGES
});
//-------- SLICK CAROUSEL END
