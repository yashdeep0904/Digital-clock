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
    
    // Add milliseconds to create a smooth, continuous sweep for the glowing dot
    const milliseconds = now.getMilliseconds();
    const exactSeconds = seconds + (milliseconds / 1000);

    // --- 1. Smooth Analog Second-Hand Rotation ---
    // 60 seconds = 360 degrees
    const secondsDegrees = (exactSeconds / 60) * 360;
    secondHandPivot.style.transform = `rotate(${secondsDegrees}deg)`;

    // --- 2. Format Digital Time ---
    const is24HourFormat = formatToggle.checked;
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // convert "0" to "12"
        ampmDisplay.style.display = 'inline';
    } else {
        ampmDisplay.style.display = 'none';
    }

    // Format with leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    let displaySecs = seconds.toString().padStart(2, '0');

    // --- 3. Update DOM ---
    timeDisplay.textContent = `${hours}:${minutes}`;
    secondsDisplay.textContent = displaySecs;
    ampmDisplay.textContent = ampm;
}

// Add an event listener to immediately re-render when toggled
formatToggle.addEventListener('change', updateClock);

// Use requestAnimationFrame instead of setInterval for ultra-smooth 60fps rotation
function animate() {
    updateClock();
    requestAnimationFrame(animate);
}

// Start animation loop
animate();