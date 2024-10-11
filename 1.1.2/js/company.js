document.addEventListener("DOMContentLoaded", function () {

    // 🎈.ideology_section marquee
    if(window.innerWidth > 1024){
        $('.marquee_list').marquee({
            speed: 50,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            gap: 160,
        });
    } else if(window.innerWidth <= 1024 && window.innerWidth > 480){
        $('.marquee_list').marquee({
            speed: 50,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            gap: 32,
        });
    } else {
        $('.marquee_list').marquee('destroy');
    }

    // 🎈.keyword_section marquee
    if(window.innerWidth > 480){
        $('.marquee-wrap01').marquee({
            speed: 80,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            gap: 80,
        });
        $('.marquee-wrap02').marquee({
            speed: 120,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            gap: 80,
        });
    }else{
        $('.marquee-wrap01').marquee({
            speed: 100,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            startVisible: true,
            gap: 16,
        });
        $('.marquee-wrap02').marquee({
            speed: 150,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            startVisible: true,
            gap: 16,
        });
    }

    //🎈.contact_section 카카오지도 실행 스크립트
    new daum.roughmap.Lander({
        "timestamp" : "1728556103568",
        "key" : "2kuu5",
        "mapWidth" : "996",
        "mapHeight" : "507"
    }).render();

}); //company end