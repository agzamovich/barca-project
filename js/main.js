$(document).ready(function()
{
 
function toggle_color(color1,color2,color3,cycle_time,wait_time) {
setInterval(function first_color() {
    $("body").animate({
        backgroundColor: color1
    }, 1000, function () {
        setTimeout(change_color, wait_time);
    });
}, cycle_time);
 
function change_color() {
    $("body").animate({
        backgroundColor: color2
    }, 1000, function () {
        setTimeout(function () {}, wait_time);
    });
}
}
 
toggle_color('#F90081','#65E300','#8BF106',8000,3000);
});
//Change background color every second above

 $(document).ready(function() {
            
            // Do this when we click a nav link
            function navLinkClicked(event) {
                // Stop links from acting like links
                event.preventDefault();
                // Get the href of the link we clicked
                var href = $(this).attr("href");
                // Take 1s to scroll to that href
                $(window).scrollTo(href, 1000, {offset: -0.1});
            }
            $("nav ul a").click(navLinkClicked);
            $.stellar();
        });
 //Scroll To effect above

(function()
{

  var parallax = document.querySelectorAll(".para")
      speed = 0.2;

  window.onscroll = function()
  {
    [].slice.call(parallax).forEach(function(el,i)
    {

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };
})();
//Parallax effect above
// var images = [
//       "http://www.futuro.cl/files/2014/10/auto-carrera-05.jpg",
//       "http://images.thecarconnection.com/lrg/jaguar-c-x75-concept-car_100431735_l.jpg",
//       "http://images.thecarconnection.com/lrg/jaguar-c-x75-concept-car_100431734_l.jpg"
//     ];
$(document).ready(function(){

    var images = $("#carousel img");

   

    var i = 0;

    setInterval(function(){
  


      images.eq(i).fadeOut();

      i++;


      if(i >= $("#carousel img").length)
      {
        i = 0;
      }
      
      images.eq(i).fadeIn();


    }, 4000);
  });
    //Team page carousel img above