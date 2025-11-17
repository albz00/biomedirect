// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Overview
    $('#menu2').on('click', function () { currentSlide = 1; clickedLink = true; }); // Ovulation
    $('#menu3').on('click', function () { currentSlide = 7; clickedLink = true; }); // Acrosome
    $('#menu4').on('click', function () { currentSlide = 11; clickedLink = true; }); // Fertilization
    $('#menu5').on('click', function () { currentSlide = 13; clickedLink = true; }); // Cortical Reaction
    $('#menu6').on('click', function () { currentSlide = 15; clickedLink = true; }); // Zona Reaction
    $('#menu7').on('click', function () { currentSlide = 17; clickedLink = true; }); // Zygote

    $('#menu8').on('click', function () { currentSlide = 19; clickedLink = true; }); // 1st Cleavage
    $('#menu9').on('click', function () { currentSlide = 23; clickedLink = true; }); // Compaction
    $('#menu10').on('click', function () { currentSlide = 26; clickedLink = true; }); // Morula
    $('#menu11').on('click', function () { currentSlide = 27; clickedLink = true; }); // Blastocyst
    $('#menu12').on('click', function () { currentSlide = 28; clickedLink = true; }); // Hatching
    $('#menu13').on('click', function () { currentSlide = 30; clickedLink = true; }); // Implantation
    $('#menu14').on('click', function () { currentSlide = 31; clickedLink = true; }); // Summary
    $('#menu15').on('click', function () { currentSlide = 34; clickedLink = true; }); // Infertility
});
