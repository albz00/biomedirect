// Helper function to convert CamelCase filename to snake_case lessonId
// Example: "MendelianGeneticsT" -> "mendelian_genetics_t"
function filenameToLessonId(filename) {
    // Remove .html extension and T suffix
    let name = filename.replace(/\.html$/, '').replace(/T$/, '');
    
    // Convert CamelCase to snake_case
    return name
        .replace(/([A-Z])/g, '_$1')  // Insert underscore before capitals
        .replace(/^_/, '')             // Remove leading underscore
        .toLowerCase()                  // Convert to lowercase
        + '_t';                        // Add _t suffix
}

// Example conversions:
// "MendelianGeneticsT" -> "mendelian_genetics_t"
// "PracticePedigreeRecognitionT" -> "practice_pedigree_recognition_t"
// "GametogenesisT" -> "gametogenesis_t"
// "NonMendelianGeneticsT" -> "non_mendelian_genetics_t"

