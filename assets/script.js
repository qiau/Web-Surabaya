const text = document.querySelector('.sec-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Pahlawan";
    }, 0);
    setTimeout(() => {
        text.textContent = "Perjuangan";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Pendidikan";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Bersejarah";
    }, 12000);
} 
textLoad();
setInterval(textLoad, 12000);


// document.addEventListener('scroll', function() {
//     const sidebar = document.getElementById('sticky-sidebar');
//     const footer = document.querySelector('footer');
//     const footerPosition = footer.getBoundingClientRect().top;

//     if (footerPosition < window.innerHeight + 100) {
//         sidebar.style.position = 'absolute';
//     } else {
//         sidebar.style.position = 'sticky';
//         sidebar.style.top = '20px';
//     }
// });

document.querySelectorAll('nav ul li a, #home a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


