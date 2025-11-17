/* No Xs to change to Ts
*/

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Glossary
    $('#menu2').on('click', function () { currentSlide = 4; clickedLink = true; }); // Normal Distribution
    $('#menu3').on('click', function () { currentSlide = 10; clickedLink = true; }); // Quantitative Traits
    $('#menu4').on('click', function () { currentSlide = 11; clickedLink = true; }); // Qualitative Traits
    $('#menu5').on('click', function () { currentSlide = 13; clickedLink = true; }); // Threshold Model
});
