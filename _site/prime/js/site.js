// Website Scripts

$(document).ready(function(){

<!----  appstore button - google play button hover ---->
$(".social_icons_wrapper a").fadeTo("fast", 1.0); 
$(".social_icons_wrapper a").hover(function(){
$(this).fadeTo("fast", 0.6); 
},function(){
$(this).fadeTo("fast", 1.0); 
});

});


<!----  fadein header ---->
$(window).bind("load", function() {


});

// Form success box
var locSearch = window.location.search.substring(1).split('&')[0];
if(locSearch){
    document.getElementById( locSearch ).style.display = "block";
}


