// ============================
// NAVBAR
// ============================
$(document).ready(function () {

    // Navbar Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".main-nav").addClass("scrolled");
        } else {
            $(".main-nav").removeClass("scrolled");
        }
    });

    // Mobile Menu Toggle
    $(".menu-btn").click(function () {
        $(this).toggleClass("active");
        $(".nav-links").toggleClass("show");
        console.log("Clicked");
    });

    // Close Menu After Clicking Link
    $(".nav-links a").click(function () {
        $(".nav-links").removeClass("show");
        $(".menu-btn").removeClass("active");
    });

    // FAQ Accordion
    $("#accordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });

});

// ============================
// SWIPER
// ============================
const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    }
});

// ============================
// COUNTER ANIMATION
// ============================
$(".count").each(function () {

    const counter = $(this);
    const target = parseInt(counter.data("count"));
    let count = 0;

    const interval = setInterval(function () {

        count++;
        counter.text(count + "+");

        if (count >= target) {
            clearInterval(interval);
        }

    }, 20);

});