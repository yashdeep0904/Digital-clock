// --- 3D Interactive Mouse Tilt Logic ---
const clock3D = document.getElementById('clock-3d');
let isHovering = false;

document.addEventListener('mousemove', (e) => {
    // Calculate mouse position relative to the center of the screen
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25; // Division controls tilt intensity
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Apply dynamic 3D rotation and dynamic shadow
    clock3D.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    clock3D.style.boxShadow = `${-xAxis * 2}px ${yAxis * 2}px 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.05)`;
});

// Smoothly snap back to center when the mouse leaves the window
document.addEventListener('mouseleave', () => {
    clock3D.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.6s ease';
    clock3D.style.transform = `rotateY(0deg) rotateX(0deg)`;
    clock3D.style.boxShadow = `0 30px 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.05)`;
    
    setTimeout(() => {
        clock3D.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
    }, 600);
});

// --- Clock Logic ---
const timeDisplay = document.getElementById('hours-minutes');
const secondsDisplay = document.getElementById('seconds-display');
const ampmDisplay = document.getElementById('ampm');
const secondHandPivot = document.getElementById('second-hand-pivot');
const formatToggle = document.getElementById('format-toggle');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Smooth continuous rotation using milliseconds
    const milliseconds = now.getMilliseconds();
    const exactSeconds = seconds + (milliseconds / 1000);

    // 60 seconds = 360 degrees
    const secondsDegrees = (exactSeconds / 60) * 360;
    secondHandPivot.style.transform = `rotate(${secondsDegrees}deg)`;

    // Format Digital Time
    const is24HourFormat = formatToggle.checked;
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        ampmDisplay.style.display = 'inline';
    } else {
        ampmDisplay.style.display = 'none';
    }

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    let displaySecs = seconds.toString().padStart(2, '0');

    // Update DOM
    timeDisplay.textContent = `${hours}:${minutes}`;
    secondsDisplay.textContent = displaySecs;
    ampmDisplay.textContent = ampm;
}

formatToggle.addEventListener('change', updateClock);

// Use requestAnimationFrame for smooth 60fps rendering
function animate() {
    updateClock();
    requestAnimationFrame(animate);
}

// Start animation loop
animate();