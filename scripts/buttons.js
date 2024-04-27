document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Button');
    const h1 = document.querySelector('h1');

    button.addEventListener('click', function() {
        h1.innerText = 'Welcome to my website';
    });
});