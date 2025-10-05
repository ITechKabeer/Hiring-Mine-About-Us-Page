// Function to apply the theme and update switch state
function applyTheme(themeName) {
    document.body.className = themeName;
    localStorage.setItem('theme', themeName);
    
    const themeSwitch = document.getElementById('theme-switch-input');

    if (themeSwitch) {
        // Switch state update
        themeSwitch.checked = (themeName === 'dark-theme');
    }
}

// 1. DOM Content Load hone ka intezaar karein
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch-input');
    
    // 2. Local Storage se theme check karein
    const savedTheme = localStorage.getItem('theme');
    
    // Agar saved theme 'dark-theme' hai toh usko apply karein, warna default 'light-theme'
    if (savedTheme === 'dark-theme') {
        applyTheme('dark-theme');
    } else {
        applyTheme('light-theme');
    }

    // 3. Switch change event listener
    if (themeSwitch) {
        themeSwitch.addEventListener('change', (event) => {
            if (event.target.checked) {
                // Agar switch ON hua (checked) toh Dark Mode
                applyTheme('dark-theme');
            } else {
                // Agar switch OFF hua (unchecked) toh Light Mode
                applyTheme('light-theme');
            }
        });
    }
});

// MOBILE SLIDER 
// 1. Zaroori elements ko select karein

// Toggle Button: Aapka menu bar ka parent element '.menu-id' hai
const toggleBtn = document.querySelector('.menu-id'); 

// Mobile Slider: Aapka mobile menu container '.mob-nav-slider' hai
const mobileNavSlider = document.querySelector('.mob-nav-slider');


// 2. Menu bar par click event lagayein
toggleBtn.addEventListener('click', () => {
    // '.open' class ko toggle karein.
    // Jab yeh class add hogi, toh CSS mein 'left: 0' ho jayega, aur menu slide ho jayega.
    mobileNavSlider.classList.toggle('open'); 
});


// 3. Menu ke andar ke links par click hone par menu band ho jaye
// Aapke links '.mob-nav-list li a' hain
const mobileLinks = document.querySelectorAll('.mob-nav-list li a');

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Link click hote hi slider se '.open' class hata dein.
        mobileNavSlider.classList.remove('open'); 
    });
});