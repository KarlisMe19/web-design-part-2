// ===== SMOOTH SCROLLING BETWEEN SECTIONS =====
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// ===== SECTION 1: DROPDOWN FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Personal Details Dropdown
    const personalHeading = document.querySelector('.personal');
    const personalBtn = document.getElementById('personal-dropdown-btn');
    const personalDropdown = document.getElementById('personal-dropdown');

    personalHeading.addEventListener('mouseover', function() {
        personalBtn.style.display = 'inline';
    });

    personalHeading.addEventListener('mouseout', function() {
        personalBtn.style.display = 'none';
    });

    personalBtn.addEventListener('click', function() {
        if (personalDropdown.style.display === 'none' || personalDropdown.style.display === '') {
            personalDropdown.style.display = 'block';
        } else {
            personalDropdown.style.display = 'none';
        }
    });

    // Education Dropdown
    const educationHeading = document.querySelector('.education');
    const educationBtn = document.getElementById('education-dropdown-btn');
    const educationDropdown = document.getElementById('education-dropdown');

    educationHeading.addEventListener('mouseover', function() {
        educationBtn.style.display = 'inline';
    });

    educationHeading.addEventListener('mouseout', function() {
        educationBtn.style.display = 'none';
    });

    educationBtn.addEventListener('click', function() {
        if (educationDropdown.style.display === 'none' || educationDropdown.style.display === '') {
            educationDropdown.style.display = 'block';
        } else {
            educationDropdown.style.display = 'none';
        }
    });

    // Skills Dropdown
    const skillsHeading = document.querySelector('.skills');
    const skillsBtn = document.getElementById('skills-dropdown-btn');
    const skillsDropdown = document.getElementById('skills-dropdown');

    skillsHeading.addEventListener('mouseover', function() {
        skillsBtn.style.display = 'inline';
    });

    skillsHeading.addEventListener('mouseout', function() {
        skillsBtn.style.display = 'none';
    });

    skillsBtn.addEventListener('click', function() {
        if (skillsDropdown.style.display === 'none' || skillsDropdown.style.display === '') {
            skillsDropdown.style.display = 'block';
        } else {
            skillsDropdown.style.display = 'none';
        }
    });
});

// ===== SECTION 3: PERSONALITY DROPDOWN TOGGLE =====
function togglePersonality(button) {
    const content = button.nextElementSibling;
    const allContents = document.querySelectorAll('.personality-content');
    const allButtons = document.querySelectorAll('.personality-btn');

    // Close all other dropdowns
    allContents.forEach(item => {
        if (item !== content) {
            item.classList.remove('show');
        }
    });

    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });

    // Toggle current dropdown
    content.classList.toggle('show');
    button.classList.toggle('active');
}