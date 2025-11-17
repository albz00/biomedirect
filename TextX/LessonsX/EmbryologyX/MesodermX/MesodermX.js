// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Mesoderm

    $('#menu2').on('click', function () { currentSlide = 2; clickedLink = true; }); // Paraxial Mesoderm
    $('#menu3').on('click', function () { currentSlide = 3; clickedLink = true; }); // Somite
    $('#menu4').on('click', function () { currentSlide = 8; clickedLink = true; }); // EM Somites
    $('#menu5').on('click', function () { currentSlide = 9; clickedLink = true; }); // Proliferation
    $('#menu6').on('click', function () { currentSlide = 13; clickedLink = true; }); // Elongation
    $('#menu7').on('click', function () { currentSlide = 16; clickedLink = true; }); // Dermatomes

    $('#menu8').on('click', function () { currentSlide = 23; clickedLink = true; }); // Lateral Mesoderm
    $('#menu9').on('click', function () { currentSlide = 31; clickedLink = true; }); // Intermediate Mesoderm
    $('#menu10').on('click', function () { currentSlide = 36; clickedLink = true; }); // EM, Primordial Mesoderms
});