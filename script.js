// =====================================
// GuideMate JavaScript
// =====================================
// =====================================
// Swiper Slider
// =====================================
let swiper = new Swiper(".mySwiper", {
    loop:true,
    speed:1000,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    effect:"fade",
    fadeEffect:{
        crossFade:true,
    }
});
/* ==========================================
   COUNTER ANIMATION
========================================== */
$(".count").each(function () {
    const counter = $(this);
    const target = counter.data("count");
    let count = 0;
    const interval = setInterval(function () {
        count++;
        counter.text(count + "+");
        if (count >= target) {
            clearInterval(interval);
        }
    }, 20);
});
// =============================
//        FAQ
// ===========================
   $(function () {
    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });
});
















