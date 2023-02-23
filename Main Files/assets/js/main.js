$(document).ready(function () {
    // HUMBERGAR
    $('.mobile__bar').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('.primary_menu').click(function () {
        $('.menu_content').removeClass('active');
        $('.mobile_humbergar').removeClass('active');
    });

});