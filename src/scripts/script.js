$(document).ready(function() {
  
  $('.fancybox').fancybox({
    padding: 0
  });
  
  $('.banner').slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
  });
  
  $('.locomotives__list').slick({
    slidesToShow: 3,
    autoplay: false,
    infinite: false,
  });
});