document.getElementById('about-button').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('about-popup').style.display = 'flex';
});

document.getElementById('close-button').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('about-popup').style.display = 'none';
});
