const btn = document.querySelector('.hamburger');
const logo = document.getElementById('logoName');
const saidbar = document.getElementById('saidbar');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
    if (logo.style.display == 'flex'){
        saidbar.style.width = "86px";
        logo.style.display = "none";
        nav.style.display = "none";
    }else{
        saidbar.style.width = "300px";
        logo.style.display = "flex";
        nav.style.display = "block";
    }
})


