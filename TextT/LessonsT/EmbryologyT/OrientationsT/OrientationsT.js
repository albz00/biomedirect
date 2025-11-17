// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Body Axes
    $('#menu2').on('click', function () { currentSlide = 1; clickedLink = true; }); // Dorsal-Ventral
    $('#menu3').on('click', function () { currentSlide = 2; clickedLink = true; }); // Lateral-Medial
    $('#menu4').on('click', function () { currentSlide = 3; clickedLink = true; }); // Cranial-Caudal
    $('#menu5').on('click', function () { currentSlide = 4; clickedLink = true; }); // Proximal-Distal
    $('#menu6').on('click', function () { currentSlide = 5; clickedLink = true; }); // All Four Axes

    $('#menu7').on('click', function () { currentSlide = 6; clickedLink = true; }); // Body Planes
    $('#menu8').on('click', function () { currentSlide = 7; clickedLink = true; }); // Coronal
    $('#menu9').on('click', function () { currentSlide = 8; clickedLink = true; }); // Transverse
    $('#menu10').on('click', function () { currentSlide = 9; clickedLink = true; }); // Sagittal
    $('#menu11').on('click', function () { currentSlide = 10; clickedLink = true; }); // Medial
    $('#menu12').on('click', function () { currentSlide = 11; clickedLink = true; }); // All Four Planes

    $('#menu13').on('click', function () { currentSlide = 12; clickedLink = true; }); // All Orientations
});
