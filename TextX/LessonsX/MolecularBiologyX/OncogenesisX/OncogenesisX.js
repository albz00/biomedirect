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
    $('#menu6').on('click', function () { currentSlide = 11; }); // Carcinogenic Genes
    $('#menu7').on('click', function () { currentSlide = 14; }); // Oncogenes
    $('#menu8').on('click', function () { currentSlide = 17; }); // Tumor Suppressors
    $('#menu9').on('click', function () { currentSlide = 20; }); // Two Hit Model
    $('#menu10').on('click', function () { currentSlide = 24; }); // Chromosomal Aberrations
    $('#menu11').on('click', function () { currentSlide = 31; }); // Gene Amplifications
    $('#menu12').on('click', function () { currentSlide = 32; }); // Chromosome Instability Syndromes
});
