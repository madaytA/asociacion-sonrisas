
// -----slider---------
 function bannerSwitcher() {
    next = $('.sec-1-input').filter(":checked").next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });

// ------paralax------
    var lastScrollTop = 0;
var backgroundImages = $('.backgroundImage'); 

$(window).scroll(function(e){
  var st = $(this).scrollTop();
  var ah = $(this).height();
  backgroundImages.each(function(i){
    var img = $(this);
    var pos = img.position().top;
    var hei = img.height();
    if ((st + ah) > pos && st < (pos + hei)){
      var p = ((pos - st)/ah) + 0.25;
      if(i == 1) console.log(p);
      img.css('background-position', '50%'+(p*100)+'%');
    }
  });
  lastScrollTop = st;
});

$(window).scroll();



// hover icon----------------------
var activeHeight = $('.active-caption').height();
$(".alt-nav-caption").css('height', activeHeight);

$('.alt-nav-item').hover(function() {
  var active = '.' + $(this).data('hover');
  $(".caption-default").removeClass("active-caption");
  $(active).addClass("active-caption");
  
  var activeHeight = $('.active-caption').height();
  $(".alt-nav-caption").css('height', activeHeight);
  
}, function() {
  var active = '.' + $(this).data('hover');
  $(".caption-default").addClass("active-caption");
  $(active).removeClass("active-caption");
  
  var activeHeight = $('.active-caption').height();
  $(".alt-nav-caption").css('height', activeHeight);
});


// --preguntas---------------
    $('.cont-tabs a').on('click', function(e){
  e.preventDefault();
  var hookTab = $(this).attr('href');
  
  $('.activo').removeClass('activo');
  $(this).add(hookTab).addClass('activo');
});

// -----------acordion-------------
$(function() {
  $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
  $(".accordion > .accordion-item").click(function() {
    $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
    $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
  });
});

// <.--------scrollup-------------
$(document).ready(function(){ 
        $(window).scroll(function(){
            if ($(this).scrollTop() > 700) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });

// --------------hover card credit------
$(function() {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });