// Side scroll box at the right
let scrollBox = $('.scroll');

// Top offset by section
const serviceTop = $('#service').position().top - 200;
const shareTop = $('#share').position().top - 200;
const consultTop = $('#consult').position().top - 200;
const socialTop = $('#social').position().top - 200;

// Click Event (Side scroll box)
function scrollMove(point) {
    // Parameter == Section top offset
    var sectTop = $('#' + point).offset().top;

    // Only #share, #consult
    if (point == "share" || point == "consult") {
        sectTop -= 150;
    };

    // Scroll move to section
    $('html, body').animate({
        scrollTop: sectTop
    }, 100);
};

$(function () {
    // Scroll Event
    $(window).scroll(function () {
        // Now scroll offset top
        var nowTop = $(window).scrollTop();

        // Searching, Moving, Toggle class (now scroll offset == section)
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

    // Style change when focus service
    $("#service .card button").focus(function () {
        $(this).css({
            opacity: "1"
        });

        $(this).parent().css({
            height: "280px",
            background: "#B39D72"
        });
    });

    // Open .lnb when focus nav
    $("nav .gnb > li > a").focus(function () {
        $(this).siblings().css({
            display: "block"
        });
    });
});