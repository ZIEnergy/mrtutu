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
  
  $('.story__btn').click(function(e) {
    e.preventDefault();
    $.fancybox.close();
  });
  
  $('.tibet__btn').click(function(e) {
    e.preventDefault();
    $.fancybox.close();
  });
  
  $('.banner__item-video').vide({
    mp4: '../img/video.mp4',
    webm: '../img/video.webm',
    poster: '../img/banner-bg-5.jpg'
  }, {
    position: '50% 100%',
    bgColor: '#221b17'
  });
  
  $('#order').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: $(this).attr('action'),
          data: $('#order').serialize(),
          success: function () {
            $('.order__form-hidden-link').click();
          }
      });
  });
  
  $('a[href*=#]:not(.fancybox)').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
});