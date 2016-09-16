$(document).ready(function() {
  
  $('.fancybox').fancybox({
    padding: 0
  });
  
  $('.banner').slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    infinite: true
  });
  
  $('.locomotives__list').slick({
    slidesToShow: 3,
    autoplay: false,
    infinite: false,
  });
  
  $('.modal').perfectScrollbar();
  
  $('.story__btn').click(function(e) {
    e.preventDefault();
    $.fancybox.close();
  });
  
  $('.tibet__btn').click(function(e) {
    e.preventDefault();
    $.fancybox.close();
  });
});