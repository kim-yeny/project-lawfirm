// 우측 스크롤 박스
let scrollBox = $('.scroll');

// 섹션별 상단 좌표값
const serviceTop = $('#service').position().top - 200;
const shareTop = $('#share').position().top - 200;
const consultTop = $('#consult').position().top - 200;
const socialTop = $('#social').position().top - 200;

// 우측 스크롤 박스 > a 태그 클릭 이벤트
function scrollMove(point) {
    // point에 해당하는 섹션의 좌표값
    var sectTop = $('#' + point).offset().top;

    // share, consult 상단에 여유
    if (point == "share" || point == "consult") {
        sectTop -= 150;
    };

    // 해당 섹션으로 스크롤 이동
    $('html, body').animate({
        scrollTop: sectTop
    }, 100);
};

$(function () {
    // Scroll Event
    $(window).scroll(function () {
        // 현재 스크롤 상단의 위치
        var nowTop = $(window).scrollTop();

        // 현재 스크롤 위치랑 동일한 위치의 섹션 찾아서 클래스 토글
        if (nowTop < serviceTop && nowTop != 0) {
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
        } else if (socialTop <= nowTop) {
            scrollBox.children().eq(3).removeClass('on');
            scrollBox.children().eq(4).addClass('on');
        }
    });

    // Consult form submit
    $("#consult-form").submit(function () {

        var name = $(this).children("input[name=client-name]");
        var phone = $(this).children("input[name=client-phone]");
        var content = $(this).children("textarea[name=client-content]");

        // Validation
        if (name.val() == "") {
            alert("이름을 입력해 주세요.");
            return false;
        } else if (phone.val() == "") {
            alert("연락처를 입력해 주세요.");
            return false;
        } else if (content.val() == "") {
            alert("상담하실 내용을 입력해 주세요.");
            return false;
        } else {
            alert("상담 신청이 접수 되었습니다. 감사합니다.")
            return true;
        };
    });
});