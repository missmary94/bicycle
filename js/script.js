$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

$(document).ready(function () {
    $('.slider__body').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 700,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,

    });
})