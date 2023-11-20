// Function to generate a hash from a string
function generateHash(inputString) {
  return inputString.split("").reduce((hash, char) => -5 * (hash ^ char.charCodeAt(0)), 5) >>> 2;
}

// Function to generate an identicon SVG
function generateIdenticon(inputString = "", saturation = 95, lightness = 45, hashFunction = generateHash) {
  const hash = hashFunction(inputString);
  const colorHue = (hash % 9) * 40;

  return (
    [...Array(inputString ? 25 : 0)].reduce((svgContent, _, index) => {
      const xPosition = index > 14 ? 7 - Math.floor(index / 5) : Math.floor(index / 5);
      const yPosition = index % 5;
      return hash & (1 << index % 15)
        ? `${svgContent}<rect x="${xPosition}" y="${yPosition}" width="1" height="1"/>`
        : svgContent;
    }, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${colorHue} ${saturation}% ${lightness}%)">`) +
    "</svg>"
  );
}

// Function to generate and display the icon
function generateAndDisplayIcon() {
  const randomString = Math.random().toString(36).substring(2, 15);
  const iconSVG = generateIdenticon(randomString, 95, 45);
  document.getElementById("iconContainer").innerHTML = iconSVG;
}

// Generate and display the initial icon
generateAndDisplayIcon();

// Function to calculate the delay for the "ease-out" effect
function easeOutDelay(counter, maxCount) {
  const factor = 0.45;
  const maxDelay = 300; // Adjust as needed
  return Math.min(factor * Math.pow(counter, 2), maxDelay);
}

// Generate multiple icons with an ease-out effect
let counter = 0;
const maxCount = 30;

function generateIcons() {
  generateAndDisplayIcon();
  counter++;

  if (counter <= maxCount) {
    let currentDelay = easeOutDelay(counter, maxCount);
    setTimeout(generateIcons, currentDelay); // Set next generation with the new delay
  }
}

generateIcons(); // Initial call to start the generation process

// Add event listeners for various user interactions
document.addEventListener("keypress", generateAndDisplayIcon);
document.addEventListener("click", generateAndDisplayIcon);
document.addEventListener("scroll", generateAndDisplayIcon);
