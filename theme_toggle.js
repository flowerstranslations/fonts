const toggleButton = document.getElementById('theme-toggle');
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');
const themeSwitch = [
    document.body,
    document.querySelector('.dashboard-container'),
    ...document.querySelectorAll('.tabs-font'),
    document.querySelector('.page-container'),
    ...document.querySelectorAll('p'),
]
toggleButton.addEventListener('click', function(){
    if(document.body.classList.contains('dark-theme')){
        sunImage.style.visibility = "hidden";
        moonImage.style.visibility = "visible";
        /* customizing every container/font to light mode */
        themeSwitch.forEach(element => {
            element.classList.add('light-theme');
            element.classList.remove('dark-theme');
        })

    } else{
        sunImage.style.visibility = "visible";
        moonImage.style.visibility = "hidden";
        themeSwitch.forEach(element => {
            element.classList.add('dark-theme');
            element.classList.remove('light-theme');
        })
    }
});