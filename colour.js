// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a random gradient color
function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(to right, ${color1}, ${color2})`;
}

// Function to change the background color and update the color code
function setBackgroundColor(color) {
    document.body.style.background = color;
    document.getElementById('color-code').textContent = color;
}

// Button click event listeners
document.getElementById('single-color-btn').addEventListener('click', () => {
    const color = getRandomColor();
    setBackgroundColor(color);
});

document.getElementById('gradient-color-btn').addEventListener('click', () => {
    const gradient = getRandomGradient();
    setBackgroundColor(gradient);
});
