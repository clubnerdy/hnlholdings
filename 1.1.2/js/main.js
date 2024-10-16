document.addEventListener("DOMContentLoaded", function () {

    //🎈.module_section .member
    const members = document.querySelectorAll("[class^='member']");
    const membersContainer = document.querySelector(".members");

    // 모든 멤버 요소에 이벤트 리스너 추가
    members.forEach((member, index) => {
        // mouseover 이벤트 리스너
        member.addEventListener("mouseover", () => {
            members.forEach((el, i) => {
                if (i <= index) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                }
            });
        });

        // mouseenter와 mouseleave 이벤트 리스너 추가
        member.addEventListener("mouseenter", () => {
            member.classList.add("ongoing");
        });

        member.addEventListener("mouseleave", () => {
            member.classList.remove("ongoing");
        });
    });

    // 멤버 컨테이너에서 mouseleave 시 모든 멤버의 active 제거
    membersContainer.addEventListener("mouseleave", () => {
        members.forEach((member) => {
            member.classList.remove("active");
        });
    });

    //🎈.module_section .keyword
    if(window.innerWidth > 430){
        $('.marquee-wrap01').marquee({
            speed: 40,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
        $('.marquee-wrap02').marquee({
            speed: 60,
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

    //🎈.module_section .intro
    const playVideo = document.querySelector(".video_bg video");

    if(window.innerWidth > 1024) {
        playVideo.addEventListener("mouseenter", (event) => {
            playVideo.setAttribute("autoplay", "true");
            playVideo.play();
        });
    
        playVideo.addEventListener("mouseleave", (event) => {
            playVideo.removeAttribute("autoplay");
            playVideo.pause();
        });
    }else {
        playVideo.setAttribute("autoplay", "true");
    }

    //🎈.module_section .clock
    function setClock() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();

        const hourDegrees = (hours + minutes / 60) * 30;
        const minuteDegrees = (minutes + seconds / 60) * 6;
        const secondDegrees = (seconds + milliseconds / 1000) * 6;

        const hourHand = document.querySelector('.hour_hand');
        const minuteHand = document.querySelector('.minute_hand');
        const secondHand = document.querySelector('.second_hand');

        hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDegrees}deg)`;
        minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteDegrees}deg)`;
        secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondDegrees}deg)`;

        requestAnimationFrame(setClock);
    }

    setClock();

    //🎈.module_section .clickable
    const clickable = document.querySelector(".clickable");
    const stickers = document.querySelectorAll(".sticker");

    clickable.addEventListener("click", function () {
        let currentIndex = -1;
        stickers.forEach((sticker, index) => {
            if (sticker.classList.contains("visible")) {
                currentIndex = index;
            }
        });
        if (currentIndex !== -1) {
            stickers[currentIndex].classList.remove("visible");
        }
        const nextIndex = (currentIndex + 1) % stickers.length;
        stickers[nextIndex].classList.add("visible");
    });

    //🎈.company_section .company_doc
    function onHoverDoc() {
        var companyDoc = document.querySelector(".company_doc");
    
        companyDoc.addEventListener("mouseenter", function () {
            var darkImage = companyDoc.querySelector(".company_doc .dark");
            var lightImage = companyDoc.querySelector(".company_doc .light");
    
            if (window.getComputedStyle(darkImage).display === "block") {
                darkImage.src = "img/main/03/download_dark.png";
            }
    
            if (window.getComputedStyle(lightImage).display === "block") {
                lightImage.src = "img/main/03/download_light.png";
            }
        });
    
        companyDoc.addEventListener("mouseleave", function () {
            var darkImage = companyDoc.querySelector(".dark");
            var lightImage = companyDoc.querySelector(".light");
    
            darkImage.src = "img/main/03/download_light.png";
            lightImage.src = "img/main/03/download_dark.png";
        });
    }
    
    // 페이지 로드 후 실행
    window.onload = onHoverDoc;

    //🎈.swiper .swiper-button
    function handleHover(button, modeClass) {
        button.addEventListener('mouseenter', function () {
            if (button.classList.contains('dark')) {
                button.classList.add('light');
                button.classList.remove('dark');
            } else if (button.classList.contains('light')) {
                button.classList.add('dark');
                button.classList.remove('light');
            }
        });

        button.addEventListener('mouseleave', function () {
            if (button.classList.contains('dark')) {
                button.classList.add('light');
                button.classList.remove('dark');
            } else if (button.classList.contains('light')) {
                button.classList.add('dark');
                button.classList.remove('light');
            }
        });
    }

    window.onload = function () {
        var nextButton = document.querySelector('.swiper-button-next');
        var prevButton = document.querySelector('.swiper-button-prev');

        handleHover(nextButton);
        handleHover(prevButton);
    };

    //🎈.marquee-contact
    if(window.innerWidth > 480){
        $('.marquee-contact').marquee({
            speed: 50,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }else{
        $('.marquee-contact').marquee({
            speed: 10,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }

    //☝🏻스크롤 이벤트
    window.addEventListener("scroll", function () {
        console.log(window.scrollY);

        window.addEventListener("scroll", function () {
            const customer01 = document.querySelector(".trouble .item .customer01");
            const comment01 = document.querySelector(".trouble .item01 .comment");
            const customer02 = document.querySelector(".trouble .item .customer02");
            const comment02 = document.querySelector(".trouble .item02 .comment");
            const customer03 = document.querySelector(".trouble .item .customer03");
            const comment03 = document.querySelector(".trouble .item03 .comment");
            const customer04 = document.querySelector(".trouble .item .customer04");
            const comment04 = document.querySelector(".trouble .item04 .comment");
        
            const scrollY = window.scrollY;
        
            // 각 스크롤 범위에 맞춰 클래스 추가 및 제거
            if (scrollY > 5800 && scrollY <= 6000) {
                customer01.classList.add("scrollon");
                comment01.classList.add("scrollon");
            } else {
                customer01.classList.remove("scrollon");
                comment01.classList.remove("scrollon");
            }
        
            if (scrollY > 6000 && scrollY <= 6200) {
                customer02.classList.add("scrollon");
                comment02.classList.add("scrollon");
            } else {
                customer02.classList.remove("scrollon");
                comment02.classList.remove("scrollon");
            }
        
            if (scrollY > 6200 && scrollY <= 6400) {
                customer03.classList.add("scrollon");
                comment03.classList.add("scrollon");
            } else {
                customer03.classList.remove("scrollon");
                comment03.classList.remove("scrollon");
            }
        
            if (scrollY > 6400) {
                customer04.classList.add("scrollon");
                comment04.classList.add("scrollon");
            } else {
                customer04.classList.remove("scrollon");
                comment04.classList.remove("scrollon");
            }
        });
        
      });// 스크롤이벤트 end

}); //main end 