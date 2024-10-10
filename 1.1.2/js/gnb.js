document.addEventListener("DOMContentLoaded", function () {

    //네비게이션 버튼
    const navOpenBtn = document.querySelector(".nav_btn button");
    const navCloseBtn = document.querySelector(".close button");
    const navPanel = document.querySelector("nav");

    navOpenBtn.addEventListener("click", function () {
        navPanel.classList.add("visible");
    });
    navCloseBtn.addEventListener("click", function () {
        navPanel.classList.remove("visible");
    });

}); //gnb end 