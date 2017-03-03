$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 100) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("active");
    }

});



$(".navbar-toggle").click(function(){
  $(this).toggleClass("open");
});

