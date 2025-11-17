/* No Xs to change to Ts
*/

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Derivation of Equations
    $('#menu2').on('click', function () { currentSlide = 9; clickedLink = true; }); // Hardy Weinberg Equations
    $('#menu3').on('click', function () { currentSlide = 10; clickedLink = true; }); // Assumptions
    $('#menu4').on('click', function () { currentSlide = 11; clickedLink = true; }); // Sample Problem
    $('#menu5').on('click', function () { currentSlide = 18; clickedLink = true; }); // X-Linked Incidences
    $('#menu6').on('click', function () { currentSlide = 19; clickedLink = true; }); // Sample X-Linked Problem
});
