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

// **Function to Apply Theme**
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        sunImage.style.visibility = "hidden";
        moonImage.style.visibility = "visible";
        themeSwitch.forEach(element => {
            element.classList.add('dark-theme');
            element.classList.remove('light-theme');
        });
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        sunImage.style.visibility = "visible";
        moonImage.style.visibility = "hidden";
        themeSwitch.forEach(element => {
            element.classList.add('light-theme');
            element.classList.remove('dark-theme');
        });
    }
}

// **Check if a Theme is Already Stored in localStorage**
const savedTheme = localStorage.getItem('theme');

// **If a Theme is Saved, Apply It; Otherwise, Default to Light Mode**
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme('light');
}

// **Toggle Theme on Button Click**
toggleButton.addEventListener('click', function() {
    const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme); // Save Theme Selection
    applyTheme(newTheme);
});
