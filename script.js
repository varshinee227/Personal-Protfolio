function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show the specific section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block";
    }
}

// Ensure the Home section is visible when the page first loads
window.onload = function() {
    showSection("home");
};