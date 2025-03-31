const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function(){
    console.log('button clicked faggot');
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    console.log("Current classes:", document.body.classList);
});