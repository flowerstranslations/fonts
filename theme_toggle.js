document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('theme-toggle');
    const sunImage = document.getElementById('sun');
    const moonImage = document.getElementById('moon');
    const themeData = localStorage.getItem('theme') || 'dark';  // Default to dark theme if none stored
    const themeSwitch = [
        document.body,
        document.querySelector('.dashboard-container'),
        ...document.querySelectorAll('.tabs-font'),
        document.querySelector('.page-container'),
        ...document.querySelectorAll('p'),
        ...document.querySelectorAll('h5'),
    ];

    // Apply theme (dark or light)
    function applyTheme(theme) {
        if (theme === 'dark') {
            sunImage.style.visibility = "visible";
            moonImage.style.visibility = "hidden";
            themeSwitch.forEach(element => {
                if (element) {
                    element.classList.add('dark-theme');
                    element.classList.remove('light-theme');
                }
            });
        } else {
            sunImage.style.visibility = "hidden";
            moonImage.style.visibility = "visible";
            themeSwitch.forEach(element => {
                if (element) {
                    element.classList.add('light-theme');
                    element.classList.remove('dark-theme');
                }
            });
        }
    }

    // Set initial theme based on localStorage or default (dark)
    applyTheme(themeData);

    // Add event listener to toggle button
    toggleButton.addEventListener('click', function () {
        let currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Save the theme preference to localStorage
        localStorage.setItem('theme', newTheme);

        // Apply the new theme
        applyTheme(newTheme);
    });
});