$(document).ready(function(){
  new WOW().init();

  // $('header nav').affix({
  //   offset: {
  //     top: 50
  //   }
  // });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
});
