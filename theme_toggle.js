const toggleButton = document.getElementById('theme-toggle');
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');

// Elements to switch theme
const themeSwitch = [
    document.body,
    document.querySelector('.dashboard-container'),
    ...document.querySelectorAll('.tabs-font'),
    document.querySelector('.page-container'),
    ...document.querySelectorAll('p'),
].filter(element => element !== null); // Remove null elements

// Check localStorage for saved theme, default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(currentTheme);
themeSwitch.forEach(element => element.classList.add(currentTheme));

// Sync sun/moon visibility
if (currentTheme === 'dark') {
    sunImage.style.visibility = "visible";
    moonImage.style.visibility = "hidden";
} else {
    sunImage.style.visibility = "hidden";
    moonImage.style.visibility = "visible";
}

// Toggle theme on click
toggleButton.addEventListener('click', function () {
    const isDarkMode = document.body.classList.contains('dark-theme');

    if (isDarkMode) {
        sunImage.style.visibility = "hidden";
        moonImage.style.visibility = "visible";

        themeSwitch.forEach(element => {
            element.classList.add('light-theme');
            element.classList.remove('dark-theme');
        });

        localStorage.setItem('theme', 'light');
    } else {
        sunImage.style.visibility = "visible";
        moonImage.style.visibility = "hidden";

        themeSwitch.forEach(element => {
            element.classList.add('dark-theme');
            element.classList.remove('light-theme');
        });

        localStorage.setItem('theme', 'dark');
    }
});
