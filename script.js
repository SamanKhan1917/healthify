// Add event listener to menu items
document.querySelectorAll('.menu li').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
