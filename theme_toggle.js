const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
});