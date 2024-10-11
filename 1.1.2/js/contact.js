document.addEventListener("DOMContentLoaded", function () {
    //🎈.marquee-contact
    if(window.innerWidth > 1024){
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
}); //contact end
