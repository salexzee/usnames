$(function() {
  // Smooth Scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('#heroBtn').css({
    'transform': 'translate(0px, ' + wScroll / 2.5 + '%)'
  })
});
