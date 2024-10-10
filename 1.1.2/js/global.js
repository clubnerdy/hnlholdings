document.addEventListener("DOMContentLoaded", function () {
    
    // 🎈어도비 웹폰트 연결
    (function(d) {
        var config = {
          kitId: 'inu3hia',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);

    // 🎈gnb
    const navOpenBtn = document.querySelector(".nav_btn button");
    const navCloseBtn = document.querySelector(".close button");
    const navPanel = document.querySelector("nav");

    navOpenBtn.addEventListener("click", function () {
        navPanel.classList.add("visible");
    });
    navCloseBtn.addEventListener("click", function () {
        navPanel.classList.remove("visible");
    });

    // 🎈footer 탑버튼 구현
    const topBtn = document.querySelector("footer .top_btn button");
    topBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    });

}); //global end