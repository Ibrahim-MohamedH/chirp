$(document).ready(() => {
  // Change Navbar background color depending on section background color
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('sec-1-bg', $(this).scrollTop() > 80 && $(this).scrollTop() < $("section").eq(1).offset().top);
    $nav.toggleClass('sec-2-bg', $(this).scrollTop() > $("section").eq(1).offset().top && $(this).scrollTop() < $("section").eq(2).offset().top);
    $nav.toggleClass('sec-3-bg', $(this).scrollTop() > $("section").eq(2).offset().top && $(this).scrollTop() < $("section").eq(3).offset().top);
    $nav.toggleClass('sec-4-bg', $(this).scrollTop() > $("section").eq(3).offset().top);
  });
  // Detect initial screen size to set proper main img
  let hero_img = $(".hero-img");
  if($(window).width() > 992 || $(window).width() < 576){
    hero_img.attr("src", "./assets/images/Hero_Image_(Desktop_View).png");
  } else {
    hero_img.attr("src", "./assets/images/Hero_Image_(Tablet_View).png");
  }
  // Detect changes in screen size to set proper main img
  $(window).resize(() => {
    if($(window).width() > 992 || $(window).width() < 576){
      hero_img.attr("src", "./assets/images/Hero_Image_(Desktop_View).png");
    } else {
      hero_img.attr("src", "./assets/images/Hero_Image_(Tablet_View).png");
    }
  })
  // fitText plugin
  jQuery("#responsive_headline").fitText(1.2, { minFontSize: '36px', maxFontSize: '60px' });
});