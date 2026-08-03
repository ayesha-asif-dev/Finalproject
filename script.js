// ============================
//   NAVBAR 
// ============================  
$(document).ready(function(){

$(window).scroll(function(){

if($(window).scrollTop()>50){

$(".main-nav").addClass("scrolled");
}

else{
  
$(".main-nav").removeClass("scrolled")

}});

$(".menu-btn").click(function(){
$(this).toggleClass("active");

$(".nav-links").toggleClass("show");
  console.log("Clicked");
});

$(".nav-links a").click(function(){

$(".nav-links").removeClass("show");

$(".menu-btn").removeClass("active");

});

});

$(document).ready(function(){

$(window).scroll(function(){

if($(window).scrollTop()>50){

$(".main-nav").addClass("scrolled");
}

else{
  
$(".main-nav").removeClass("scrolled")

}});

$(".menu-btn").click(function(){
$(this).toggleClass("active");

$(".nav-links").toggleClass("show");
  console.log("Clicked");
});

$(".nav-links a").click(function(){

$(".nav-links").removeClass("show");

$(".menu-btn").removeClass("active");

});

});
$(document).ready(function(){

$(window).scroll(function(){

if($(window).scrollTop()>50){

$(".main-nav").addClass("scrolled");
}

else{
  
$(".main-nav").removeClass("scrolled")

}});

$(".menu-btn").click(function(){
$(this).toggleClass("active");

$(".nav-links").toggleClass("show");
  console.log("Clicked");
});

$(".nav-links a").click(function(){

$(".nav-links").removeClass("show");

$(".menu-btn").removeClass("active");

});

});
// ============================
//     SWIPER
// ============================   
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















