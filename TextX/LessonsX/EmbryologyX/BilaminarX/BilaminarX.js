// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; });   // Uterus
    $('#menu2').on('click', function () { currentSlide = 3; clickedLink = true; });   // Implantation
    $('#menu3').on('click', function () { currentSlide = 4; clickedLink = true; });   // Syncytiotrophoblast
    $('#menu4').on('click', function () { currentSlide = 6; clickedLink = true; });   // Lamination
    $('#menu5').on('click', function () { currentSlide = 9; clickedLink = true; });   // Yolk Sac
    $('#menu6').on('click', function () { currentSlide = 11; clickedLink = true; });  // Extraembryonic Mesoderm
    $('#menu7').on('click', function () { currentSlide = 13; clickedLink = true; });  // Lacunae Stage
    $('#menu8').on('click', function () { currentSlide = 15; clickedLink = true; });  // Chorion
    $('#menu9').on('click', function () { currentSlide = 16; clickedLink = true; });  // Secondary Yolk Sac
    $('#menu10').on('click', function () { currentSlide = 19; clickedLink = true; }); // Blastocysts
});
