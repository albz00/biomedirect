/// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // Bilaminar Stage
    $('#menu2').on('click', function () { currentSlide = 1; clickedLink = true; }); // Trilaminar Stage
    $('#menu3').on('click', function () { currentSlide = 2; clickedLink = true; }); // Pharynx
    $('#menu4').on('click', function () { currentSlide = 5; clickedLink = true; }); // Pharyngeal Arches
    $('#menu5').on('click', function () { currentSlide = 10; clickedLink = true; }); // Facial Morphogenesis
    $('#menu6').on('click', function () { currentSlide = 13; clickedLink = true; }); // Photomicrographs & SEMs
});