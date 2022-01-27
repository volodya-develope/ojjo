$(function () {
    $('.products__tabs-inner').on('click', function (e){
        e.preventDefault();
        $('.products__tabs-inner').removeClass('products__tabs-inner--active');
        $(this).addClass('products__tabs-inner--active');

        $('.products__content-item').removeClass('products__content-item--active');
        $($(this).attr('href')).addClass('products__content-item--active');
    });
})