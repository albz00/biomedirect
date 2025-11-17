/* No Xs to change to Ts
*/

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Indications
    $('#menu2').on('click', function () { currentSlide = 3; clickedLink = true; }); // Karyotype Preparation
    $('#menu3').on('click', function () { currentSlide = 5; clickedLink = true; }); // Chromosome Structure
    $('#menu4').on('click', function () { currentSlide = 9; clickedLink = true; }); // The Human Karyotype
    $('#menu5').on('click', function () { currentSlide = 13; clickedLink = true; }); // Karyotype Designations
    $('#menu6').on('click', function () { currentSlide = 17; clickedLink = true; }); // FISH

    $('#menu7').on('click', function () { currentSlide = 30; clickedLink = true; }); // Polyploidy
    $('#menu8').on('click', function () { currentSlide = 32; clickedLink = true; }); // Aneuploidies
    $('#menu9').on('click', function () { currentSlide = 34; clickedLink = true; }); // Genetic Mosaics
    $('#menu10').on('click', function () { currentSlide = 38; clickedLink = true; }); // Chromosome Aberrations
    $('#menu11').on('click', function () { currentSlide = 39; clickedLink = true; }); // Etiology
    $('#menu12').on('click', function () { currentSlide = 43; clickedLink = true; }); // Reciprocal Translocation (Dup-Del Syndromes)
    $('#menu13').on('click', function () { currentSlide = 49; clickedLink = true; }); // Internal Translocation (Partial Trisomy)
    $('#menu14').on('click', function () { currentSlide = 53; clickedLink = true; }); // Robertsonian Translocation
});
