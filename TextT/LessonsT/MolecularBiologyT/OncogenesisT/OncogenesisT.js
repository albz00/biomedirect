/* No Xs to change to Ts
 
 * Setup Lesson Menu Links
   - make           menu#                   consecutive starting with 1, 
   - replace        currentSlide = #s       with                    "stopPoint": #s         from src_array 
   - add            "menuLink": "Name",     from src_array          behind //  
 */

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 1; }); // Intoduction
    $('#menu2').on('click', function () { currentSlide = 5; }); // Transformation
    $('#menu3').on('click', function () { currentSlide = 6; }); // Metastasis
    $('#menu4').on('click', function () { currentSlide = 7; }); // Clonal Model
    $('#menu5').on('click', function () { currentSlide = 8; }); // Multi-Hit Model
    $('#menu6').on('click', function () { currentSlide = 12; }); // Carcinogenic Genes
    $('#menu7').on('click', function () { currentSlide = 17; }); // Oncogenes
    $('#menu8').on('click', function () { currentSlide = 20; }); // Tumor Suppressors
    $('#menu9').on('click', function () { currentSlide = 25; }); // Two Hit Model
    $('#menu10').on('click', function () { currentSlide = 33; }); // Chromosomal Aberrations
    $('#menu11').on('click', function () { currentSlide = 40; }); // Gene Amplifications
    $('#menu12').on('click', function () { currentSlide = 44; }); // Chromosome Instability Syndromes
});
