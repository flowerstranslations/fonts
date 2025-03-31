const toggleButton = document.getElementById('theme-toggle');
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');
const themeSwitch = [
    document.body,
    document.querySelector('.dashboard-container'),
    ...document.querySelectorAll('.tabs-font'),
]
toggleButton.addEventListener('click', function(){
    if(document.body.classList.contains('dark-theme')){
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        sunImage.style.visibility = "hidden";
        moonImage.style.visibility = "visible";
        /* customizing every container/font to light mode */
        themeSwitch.forEach(element => {
            element.classList.add('light-theme');
            element.classList.remove('dark-theme');
        })

    } else{
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        sunImage.style.visibility = "visible";
        moonImage.style.visibility = "hidden";
        themeSwitch.forEach(element => {
            element.classList.add('dark-theme');
            element.classList.remove('light-theme');
            console.log(document.querySelector('.dashboard-container')); // Should not be null
console.log(document.querySelectorAll('.tabs-font')); // Should show all the elements with the class 'tabs-font'
        })
    }
});