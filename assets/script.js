function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('open');
  }

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

let isCounting = false;

function startPopulationCounter() {
let populationCount = 0;
const populationEnd = 3.01; 
const populationElement = document.getElementById('populationCounter');
const populationInterval = setInterval(() => {
    if (populationCount < populationEnd) {
        populationCount += 0.1; 
        populationElement.innerText = populationCount.toLocaleString() +' Juta'; 
    } else {
        clearInterval(populationInterval);
    }
}, 50);}

function startAreaCounter() {
let areaCount = 0;
const areaEnd = 351;
const areaElement = document.getElementById('areaCounter');
const areaInterval = setInterval(() => {
    if (areaCount < areaEnd) {
        areaCount += 13; 
        areaElement.innerText = areaCount.toLocaleString() + ' km²'; 
    } else {
        clearInterval(areaInterval);
    }
}, 60);}

function startDestinationCounter() {
let destinationCount = 0;
const destinationEnd = 100; 
const destinationElement = document.getElementById('destinationCounter');
const destinationInterval = setInterval(() => {
    if (destinationCount < destinationEnd) {
        destinationCount += 2; 
        destinationElement.innerText = destinationCount.toLocaleString() + ' +'; 
    } else {
        clearInterval(destinationInterval);
    }
}, 32); }

window.addEventListener('scroll', () => {
    const section = document.querySelector('#statistic');
    const rect = section.getBoundingClientRect();
    if (!isCounting && rect.top < window.innerHeight) {
        isCounting = true;
        startPopulationCounter();
        startAreaCounter();
        startDestinationCounter();
    }
});

function toggleAside() {
    const aside = document.getElementById("aside");
    aside.classList.toggle("show");
}
  