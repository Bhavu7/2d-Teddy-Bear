// Lip-syncing animation
const upperLip = document.querySelector('.upper-lip');
const lowerLip = document.querySelector('.lower-lip');

function animateLips() {
    upperLip.style.transform = 'scaleY(0.8)';
    lowerLip.style.transform = 'scaleY(0.8)';
    setTimeout(() => {
        upperLip.style.transform = 'scaleY(1)';
        lowerLip.style.transform = 'scaleY(1)';
    }, 200);
}

setInterval(animateLips, 400);

// 3D rotation on mouse move
const teddyContainer = document.querySelector('.teddy-container');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    teddyContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset rotation when mouse leaves
document.addEventListener('mouseleave', () => {
    teddyContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Typing effect for the message
const message = document.querySelector('.message');
const text = "Happy Teddy Day, Bestie! 🧸";
let index = 0;

function typeMessage() {
    if (index < text.length) {
        message.textContent += text.charAt(index);
        index++;
        setTimeout(typeMessage, 100); // Typing speed (100ms per character)
    }
}

// Start typing effect
typeMessage();