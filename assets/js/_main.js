/*! Plugin options and other jQuery stuff */

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

// FitVids options
$(function() {
	$("article").fitVids();
});

// Lazy Load  
$("img.load").show().lazyload({ 
    effect : "fadeIn"
});

// Menu Toggle
$(document).ready(function() {
  $('a.menu').click(function() {
    $('.masthead-wrapper nav').slideToggle(100);
    return false;
  });

  $(window).resize(function(){
    var w = $(window).width();
    var menu = $('.masthead-wrapper nav');
    if(w > 680 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });


// Initialise FlexSlider for Carousels
$(window).load(function() {
  $('.flexslider').flexslider({
  animation: "fade",
  controlNav: false,
  directionNav: true,
  slideshowSpeed: 5000,
  animationSpeed: 600,
  touch: true
  });
});

// Form validation
document.getElementById("form1").onsubmit = function () {
    if (document.getElementById("Validate").value) {
        var string = document.getElementById("TextBox").value;
        if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(string) == false) {
            window.location.href = "?success";
            return false;
        }
    }
}

// Form success box
var locSearch = window.location.search.substring(1).split('&')[0];
if(locSearch){
    document.getElementById( locSearch ).style.display = "block";
}

  $('article.post iframe').wrap('<div class="video-container" />');

});
