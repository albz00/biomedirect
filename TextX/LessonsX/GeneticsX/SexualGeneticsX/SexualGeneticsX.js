/* No Xs to change to Ts
*/

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Glossary
    $('#menu2').on('click', function () { currentSlide = 4; clickedLink = true; }); // X Linkage
    $('#menu3').on('click', function () { currentSlide = 8; clickedLink = true; }); // X Inactivation
    $('#menu4').on('click', function () { currentSlide = 10; clickedLink = true; }); // Barr Bodies
    $('#menu5').on('click', function () { currentSlide = 13; clickedLink = true; }); // Calico Cats
    $('#menu6').on('click', function () { currentSlide = 14; clickedLink = true; }); // Mosaic Ladies
});
