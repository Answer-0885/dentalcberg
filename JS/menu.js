$(document).ready(function () {
    $('.header-body__burger-menu').click(function () {
        $('.header-body__burger-menu').toggleClass('open-menu')
        $('.header-menu').toggleClass('open-menu');

    });
});
// Блокировка тела при открытом меню
$(document).ready(function () {
    $('.header-body__burger-menu').click(function () {
        $('.header-body__burger-menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});
