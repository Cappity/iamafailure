const messages = [
  "You make every day magical just by being you.",
  "Your smile is my favorite sunrise ☀️.",
  "Being with you feels like home.",
  "I love you more than words can express.",
  "Thank you for being the best part of my life.",
  "With you, even ordinary moments are special 💖."
];
let i = 0;

function nextMessage() {
  i = (i + 1) % messages.length;
  document.getElementById("message").textContent = messages[i];
}

// Floating hearts
const heartContainer = document.querySelector('.hearts');
for (let i = 0; i < 30; i++) {
  const heart = document.createElement('span');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  heart.style.opacity = Math.random();
  heartContainer.appendChild(heart);
}
