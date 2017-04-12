// --------menu-vertical-----------
  $(document).ready(main);
  var contador = 1;
  function main () {
    $('.menu_bar').click(function(){
      if (contador == 1) {
        $('nav').animate({
          left: '0'
        });
        contador = 0;
      } else {
        contador = 1;
        $('nav').animate({
          left: '-100%'
        });
      }
    });
    // Mostramos y ocultamos submenus
    $('.submenu').click(function(){
      $(this).children('.children').slideToggle();
    });
  }




// -----menu rosado-1------------
$(".submenu").click(function(){
      $(this).children(".ul-list").slideToggle();
    })

    $(".ul-list").click(function(p){
      p.stopPropagation();
    });


var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

jQuery(function($){
  // $('ul.sf-menu').supersubs({ 
  //   minWidth: 12, 
  //   maxWidth: 27,  
  //   extraWidth: 1 
  // }).superfish();

  $('#hamburger').click(function () { 
      $('.sf-menu').toggle();
    });
  
  $(window).resize(function() {
    delay(function(){
      if( $(document).width() > 768 ) {
        $('.sf-menu').css('display', 'block');
    }
}, 500);
});
});

