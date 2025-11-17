/* No Xs to change to Ts
 
 * Setup Lesson Menu Links
   - make           menu#                   consecutive starting with 1, 
   - replace        currentSlide = #s       with                    "stopPoint": #s         from src_array 
   - add            "menuLink": "Name",     from src_array          behind //  
 */

// Lesson Menu Links
$(function(){
    $('#menu1').on('click', function () { currentSlide = 0; }); // Mutation
    $('#menu2').on('click', function () { currentSlide = 4; }); // Types
    $('#menu3').on('click', function () { currentSlide = 8; }); // Silent Mutations
    $('#menu4').on('click', function () { currentSlide = 16; }); // Point Mutations
    $('#menu5').on('click', function () { currentSlide = 26; }); // Chromosomal Aberrations
    $('#menu6').on('click', function () { currentSlide = 33; }); // Inheritance of Translocations
    $('#menu7').on('click', function () { currentSlide = 43; }); // Inheritance of Inversions
    $('#menu8').on('click', function () { currentSlide = 47; }); // Clinical Example
    $('#menu9').on('click', function () { currentSlide = 49; }); // Ploidy
    $('#menu10').on('click', function () { currentSlide = 51; }); // Phenotypes
    $('#menu11').on('click', function () { currentSlide = 56; }); // Aneuploidy
    $('#menu12').on('click', function () { currentSlide = 57; }); // Syndromes
    $('#menu13').on('click', function () { currentSlide = 67; }); // Mutagenesis
    $('#menu14').on('click', function () { currentSlide = 71; }); // Endogenous Processes
    $('#menu15').on('click', function () { currentSlide = 72; }); // Ligase, Unequal Crossovers
    $('#menu16').on('click', function () { currentSlide = 79; }); // Nondisjunction, Infidelity, p450
    $('#menu17').on('click', function () { currentSlide = 88; }); // Spontaneous
    $('#menu18').on('click', function () { currentSlide = 89; }); // Depurination
    $('#menu19').on('click', function () { currentSlide = 92; }); // Deamination
    $('#menu20').on('click', function () { currentSlide = 95; }); // Tautomeric Shifts
    $('#menu21').on('click', function () { currentSlide = 108; }); // Exogenous Processes
    $('#menu22').on('click', function () { currentSlide = 109; }); // Radioactivity
    $('#menu23').on('click', function () { currentSlide = 112; }); // Chemical Mutagens
    $('#menu24').on('click', function () { currentSlide = 121; }); // DNA Repair
    $('#menu25').on('click', function () { currentSlide = 129; }); // Excision Repair
    $('#menu26').on('click', function () { currentSlide = 135; }); // Xeoderma Pigmentosum
    $('#menu27').on('click', function () { currentSlide = 137; }); // Natural Selection
});
