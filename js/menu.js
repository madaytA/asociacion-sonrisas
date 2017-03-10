

// -----menu------------
$(".submenu").click(function(){
      $(this).children("ul").slideToggle();
    })

    $("ul").click(function(p){
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

