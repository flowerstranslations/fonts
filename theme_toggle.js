const toggleButton = document.getElementById('theme-toggle');
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');

// Elements to toggle theme
const themeSwitch = [
    document.body,
    document.querySelector('.dashboard-container'),
    ...document.querySelectorAll('.tabs-font'),
    document.querySelector('.page-container'),
    ...document.querySelectorAll('p'),
];

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        sunImage.style.visibility = "visible";
        moonImage.style.visibility = "hidden";
        themeSwitch.forEach(element => {
            element.classList.add('dark-theme');
            element.classList.remove('light-theme');
        });
        console.log('Applied theme: dark mode');
    } else {
        sunImage.style.visibility = "hidden";
        moonImage.style.visibility = "visible";
        themeSwitch.forEach(element => {
            element.classList.add('light-theme');
            element.classList.remove('dark-theme');
        });
        console.log('Applied theme: light mode');
    }
}

// ✅ Check and apply saved theme on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
});

// ✅ Toggle theme on button click
toggleButton.addEventListener('click', function () {
    let currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Save new theme
    localStorage.setItem('theme', newTheme);

    // Apply new theme
    applyTheme(newTheme);
});