$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Non-Mendelian Definition
    $('#menu2').on('click', function () { currentSlide = 2; clickedLink = true; }); // Semidominance
    $('#menu3').on('click', function () { currentSlide = 5; clickedLink = true; }); // Codominance
    $('#menu4').on('click', function () { currentSlide = 9; clickedLink = true; }); // Polymorphism
    $('#menu5').on('click', function () { currentSlide = 11; clickedLink = true; }); // Polygenic Traits
    $('#menu6').on('click', function () { currentSlide = 12; clickedLink = true; }); // Epistasis
    $('#menu7').on('click', function () { currentSlide = 13; clickedLink = true; }); // Epigenetics
    $('#menu8').on('click', function () { currentSlide = 14; clickedLink = true; }); // Tissue Specific
    $('#menu9').on('click', function () { currentSlide = 17; clickedLink = true; }); // Parental Sex Specific
});
