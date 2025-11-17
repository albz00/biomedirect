// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Glossary
    $('#menu2').on('click', function () { currentSlide = 3; clickedLink = true; }); // Principles
    $('#menu3').on('click', function () { currentSlide = 4; clickedLink = true; }); // Susceptibility Periods
    $('#menu4').on('click', function () { currentSlide = 5; clickedLink = true; }); // Categorization
    $('#menu5').on('click', function () { currentSlide = 6; clickedLink = true; }); // Teratogens
});
