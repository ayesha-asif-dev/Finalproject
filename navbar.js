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
