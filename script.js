document.getElementById('target').addEventListener('click', function() {
    const target = this;
    const x = Math.random() * (window.innerWidth - target.offsetWidth);
    const y = Math.random() * (window.innerHeight - target.offsetHeight);
    
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
});


const initialX = Math.random() * (window.innerWidth - 70);
const initialY = Math.random() * (window.innerHeight - 70);
document.getElementById('target').style.left = `${initialX}px`;
document.getElementById('target').style.top = `${initialY}px`;
