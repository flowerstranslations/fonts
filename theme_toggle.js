const toggleButton = document.getElementById('theme-toggle');
const sunImage = document.getElementById('sun');
const moonImage = document.getElementById('moon');
toggleButton.addEventListener('click', function(){
    if(document.body.classList.contains('dark-theme')){
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        sunImage.style.visibility = "hidden";
        moonImage.style.visibility = "visible";
    } else{
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        sunImage.style.visibility = "visible";
        moonImage.style.visibility = "hidden";
    }
    console.log('current classes:', document.body.classList);
    console.log('sun visibility:', window.getComputedStyle(sunImage).visibility);
    console.log('moon visibility:', window.getComputedStyle(moonImage).visibility);
});