const toggleButton = document.getElementById('theme-toggle');
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');
const themeSwitch = [
    document.body,
    document.querySelector('.dashboard-container'),
    ...document.querySelectorAll('.tabs-font'),
    document.querySelector('.page-container'),
    ...document.querySelectorAll('p'),
].filter(element => element !== null); // Remove null values

// **Function to Apply Theme Based on localStorage**
function applyTheme(theme) {
    if (theme === 'dark') {
        sunImage.style.visibility = "hidden";
        moonImage.style.visibility = "visible";
        themeSwitch.forEach(element => {
            element.classList.add('dark-theme');
            element.classList.remove('light-theme');
        });
    } else {
        sunImage.style.visibility = "visible";
        moonImage.style.visibility = "hidden";
        themeSwitch.forEach(element => {
            element.classList.add('light-theme');
            element.classList.remove('dark-theme');
        });
    }
}

// **Check for Saved Theme in localStorage**
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// **Toggle Theme on Click**
toggleButton.addEventListener('click', function() {
    const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme); // Save the selected theme
    applyTheme(newTheme);
});
