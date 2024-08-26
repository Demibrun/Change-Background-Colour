const body = document.body;
const colorMode = document.getElementById('colorMode');
let isWhite = true;

colorMode.addEventListener('click', function() {
    if (isWhite) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        isWhite = false;
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        isWhite = true;
    }
});