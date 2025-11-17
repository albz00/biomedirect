/* No Xs to change to Ts
 
 * Setup Lesson Menu Links
   - make           menu#                   consecutive starting with 1, 
   - replace        currentSlide = #s       with                    "stopPoint": #s         from src_array 
   - add            "menuLink": "Name",     from src_array          behind //  
 */

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; clickedLink = true; }); // linkName
    $('#menu2').on('click', function () { currentSlide = 1; clickedLink = true; }); // linkName
    $('#menu3').on('click', function () { currentSlide = 5; clickedLink = true; }); // linkName
    $('#menu#').on('click', function () { currentSlide = #; clickedLink = true; }); // linkName
});
