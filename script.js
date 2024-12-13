const btn = document.querySelector('.hamburger');
const logo = document.getElementById('logoName');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
    const saidbar = document.getElementById('saidbar');
    saidbar.style.width = "86px";
    logo.style.display = "none";
    nav.style.display = "none";
})
console.log(btn);
