// 우측 스크롤 박스
let scrollBox = $('.scroll');

// 섹션별 상단 좌표값
const serviceTop = $('#sect-service').position().top - 200;
const shareTop = $('#sect-share').position().top - 400;
const consultTop = $('#sect-consult').position().top - 400;
const socialTop = $('#sect-social').position().top - 200;
const storyTop = $('#sect-story').position().top;
console.log(serviceTop, shareTop, consultTop, socialTop, storyTop);

// 우측 스크롤 박스 > a 태그 클릭 이벤트
function scrollMove(point) {
    // point에 해당하는 섹션의 좌표값
    var sectTop = $('#sect-' + point).offset().top;
    console.log('sectTop: ', sectTop);
    
    // 해당 섹션으로 스크롤 이동
    $('html, body').animate({
        scrollTop: sectTop
    }, 100);
};

$(function () {
    // .lnb 호버하는 동안 .gnb 색상 유지
    $('.lnb').hover(function () {
        $(this).prev().toggleClass('on');
    });

    // Reset
    if ($(window).scrollTop() < serviceTop) scrollBox.children().eq(0).addClass('on');

    $(window).scroll(function () {
        // 현재 스크롤 상단의 위치
        var nowTop = $(window).scrollTop();
        // console.log(nowTop);

        // 스크롤 하단 인식
        var bottom = $(document).height()-$(window).height();

        // 현재 스크롤 위치랑 동일한 위치의 섹션 찾아서 클래스 토글
        if (nowTop < serviceTop) {
            scrollBox.children().eq(1).removeClass('on');
            scrollBox.children().eq(0).addClass('on');
        } else if (serviceTop <= nowTop && nowTop < shareTop) {
            scrollBox.children().eq(0).removeClass('on');
            scrollBox.children().eq(1).addClass('on');
            scrollBox.children().eq(2).removeClass('on');
        } else if (shareTop <= nowTop && nowTop < consultTop) {
            scrollBox.children().eq(1).removeClass('on');
            scrollBox.children().eq(2).addClass('on');
            scrollBox.children().eq(3).removeClass('on');
        } else if (consultTop <= nowTop && nowTop < socialTop) {
            scrollBox.children().eq(2).removeClass('on');
            scrollBox.children().eq(3).addClass('on');
            scrollBox.children().eq(4).removeClass('on');
        } else if (socialTop <= nowTop && nowTop < bottom) {
            scrollBox.children().eq(3).removeClass('on');
            scrollBox.children().eq(4).addClass('on');
            scrollBox.children().eq(5).removeClass('on');
        } else if (nowTop == bottom) {
            scrollBox.children().eq(4).removeClass('on');
            scrollBox.children().eq(5).addClass('on');
        }
    });
});