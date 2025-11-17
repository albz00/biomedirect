/* No Xs to change to Ts
*/

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Cis/Trans Conformations
    $('#menu2').on('click', function () { currentSlide = 5; clickedLink = true; }); // Linkage
    $('#menu3').on('click', function () { currentSlide = 10; clickedLink = true; }); // Map Unit Calculation
    $('#menu4').on('click', function () { currentSlide = 21; clickedLink = true; }); // Data Analysis
    $('#menu5').on('click', function () { currentSlide = 33; clickedLink = true; }); // Sample Problem, Two Point Cross
    $('#menu6').on('click', function () { currentSlide = 42; clickedLink = true; }); // Sample Problem, Three Point Cross
    $('#menu7').on('click', function () { currentSlide = 64; clickedLink = true; }); // Linkage Maps
});
