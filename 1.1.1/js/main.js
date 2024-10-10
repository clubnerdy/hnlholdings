$(function () {

    //💗커스텀 커서 start
    //☝🏻2024-09-26 커스텀 커서 삭제되었습니다.
    // const cursor = document.querySelector(".pointer");

    // let x = 0;
    // let y = 0;
    // let targetX = 0;
    // let targetY = 0;
    // const speed = 0.3;

    // window.addEventListener("mousemove", (e) => {
    //     x = e.pageX;
    //     y = e.pageY;
    // });

    // const loop = () => {
    //     targetX += (x - targetX) * speed;
    //     targetY += (y - targetY) * speed;

    //     cursor.style.top = targetY + "px";
    //     cursor.style.left = targetX + "px";

    //     window.requestAnimationFrame(loop);
    // };

    // loop();

    // $("a,.top_btn").mouseenter(function () {
    //     $(".pointer").addClass("effect");
    // });
    // $("a,.top_btn").mouseleave(function () {
    //     $(".pointer").removeClass("effect");
    // });

    // $(".container02 a,.list04_bottom li a").mouseenter(function () {
    //     $(".pointer").text("view more");
    // });
    // $(".container02 a,.list04_bottom li a").mouseleave(function () {
    //     $(".pointer").text("");
    // });

    // $(".join_text a").mouseenter(function () {
    //     $(".pointer").text("click");
    // });
    // $(".join_text a").mouseleave(function () {
    //     $(".pointer").text("");
    // });
    //💗커스텀 커서 end

    //햄버거 메뉴 애니메이션

    $(".menu_box").click(function () {
        $("nav,.page_cover").addClass("open");
    });

    $(".menu_box_in").click(function () {
        $("nav,.page_cover").removeClass("open");
    });
    $(".page_cover").click(function () {
        $("nav,.page_cover").removeClass("open");
    });

    //부드럽게 따라오는 aside 퀵메뉴
    //☝🏻2024-09-26 aside 퀵메뉴 삭제되었습니다.
    // let currentPosition = parseInt($(".side_wrap").css("top"));
    // $(window).scroll(function () {
    //     let position = $(window).scrollTop();
    //     $(".side_wrap").stop().animate({ "top": position + currentPosition + "px" }, 500);
    // });

    // //.service mouseenter cursor 이벤트
    // $(".container02 ul li").mouseenter(function () {
    //     $(".pointer").css({
    //         'background-color': 'rgba(0, 0, 0, 0.3)',
    //     });
    // });
    // $(".container02 ul li").mouseleave(function () {
    //     $(".pointer").css({
    //         'background-color': '#01aaff94',
    //     });
    // });

    //.news mouseenter cursor 이벤트
    $(".list04_bottom li:nth-child(2)").mouseenter(function () {
        $(".pointer").css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
        });
    });
    $(".list04_bottom li:nth-child(2)").mouseleave(function () {
        $(".pointer").css({
            'background-color': '#01aaff94',
        });
    });

    //.contact marquee슬라이드
    if(window.innerWidth > 430){
        $('.marquee-wrap').marquee({
            speed: 200,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }else{
        $('.marquee-wrap01').marquee({
            speed: 100,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
        $('.marquee-wrap02').marquee({
            speed: 150,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }

    //footer top버튼
    $(".top_btn").click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    //middle_right06 a mouseenter,mouseleave 이벤트
    let downBtn = $(".middle_right06>a");
    let downBtnImg = $(".middle_right06>a img");
    if(window.innerWidth > 430) {
        downBtn.mouseenter(function () {
            downBtnImg.css('opacity', '0').stop().attr("src", "img/download_b.png").animate({ opacity: 1 }, 500);
        });
        downBtn.mouseleave(function () {
            downBtnImg.css('opacity', '0').stop().attr("src", "img/download.png").animate({ opacity: 1 }, 500);
        });
    }else{
        downBtn.mouseenter(function () {
            downBtnImg.css('opacity', '0').stop().attr("src", "img/download.png");
        });
        downBtn.mouseleave(function () {
            downBtnImg.css('opacity', '0').stop().attr("src", "img/download.png");
        });
    }
    

});//js end