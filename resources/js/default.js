$(function () {
    // .lnb 호버하는 동안 .gnb 색상 유지
    $('.lnb').hover(function () {
        $(this).prev().toggleClass('on');
    });

    // (Mobile) Menu BTN
    $('.btn-menu').click(function () {
        $('.nav').toggleClass('on');
        $('.btn-menu').toggleClass('fa-times');
    });

});