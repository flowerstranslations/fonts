document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('theme-toggle');
    const sunImage = document.getElementById('sun');
    const moonImage = document.getElementById('moon');
    const moreButton = document.getElementById('more-button');
    const moreTabContainer = document.getElementById('more-tab-cont');

    const themeData = localStorage.getItem('theme') || 'dark'; 

    const themeSwitch = [
        document.body,
        document.querySelector('.dashboard-container'),
        ...document.querySelectorAll('.tabs-font'),
        document.querySelector('.page-container'),
        ...document.querySelectorAll('p'),
        ...document.querySelectorAll('h5'),
        document.querySelector('.details-details'),
    ].filter(Boolean);  // Remove null values

    function applyTheme(theme) {
        if (!sunImage || !moonImage) return;  // Prevents errors

        if (theme === 'dark') {
            sunImage.style.visibility = "visible";
            moonImage.style.visibility = "hidden";
            themeSwitch.forEach(element => {
                element.classList.add('dark-theme');
                element.classList.remove('light-theme');
            });
        } else {
            sunImage.style.visibility = "hidden";
            moonImage.style.visibility = "visible";
            themeSwitch.forEach(element => {
                element.classList.add('light-theme');
                element.classList.remove('dark-theme');
            });
        }
    }

    if (toggleButton) {
        applyTheme(themeData);

        toggleButton.addEventListener('click', function () {
            let currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    if (moreButton && moreTabContainer) {
        moreButton.addEventListener('click', function () {
            const currentDisplay = window.getComputedStyle(moreTabContainer).display;
            moreTabContainer.style.display = (currentDisplay === 'none' || currentDisplay === '') ? 'flex' : 'none';
        });

        moreButton.addEventListener('mouseleave', function () {
            moreTabContainer.style.display = 'none';
        });
    }
});
