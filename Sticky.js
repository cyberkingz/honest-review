const sticky = document.querySelector('.stickyatc-wrapper');

window.addEventListener('scroll',(e) => {
    if (scrollY > 3300) {
        sticky.style.display = 'flex'; 
    } if (scrollY < 3290) {
        sticky.style.display = 'none'; 
    } 
})