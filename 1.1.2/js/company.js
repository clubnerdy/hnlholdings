document.addEventListener("DOMContentLoaded", function () {
    
    // 🎈.slogan_section 이미지 경로 변경
    

    // 🎈.ideology_section marquee
    if(window.innerWidth > 360){
        $('.marquee_list').marquee({
            speed: 50,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            gap: 160,
        });
    }else{
        $('.marquee_list').marquee({
            speed: 20,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            gap: 160,
        });
    }

    // 🎈.keyword_section marquee
    if(window.innerWidth > 430){
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
            pauseOnHover: true,
            startVisible: true,
            gap: 80,
        });
        $('.marquee-wrap02').marquee({
            speed: 150,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
            gap: 80,
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