<script>
const messages = [
  "You make every moment feel like magic 💫",
  "Your love is my greatest treasure ❤️",
  "Every smile of yours lights up my world ✨",
  "With you, everything feels just right 🌸",
  "You're not just my girlfriend, you're my universe 🌍",
  "Loving you is my favorite thing to do 💕"
];

let i = 0;
let typingInterval;
const messageElement = document.getElementById("message");

function typeMessage(msg) {
  clearInterval(typingInterval);
  messageElement.textContent = "";
  let index = 0;
  typingInterval = setInterval(() => {
    messageElement.textContent += msg.charAt(index);
    index++;
    if (index >= msg.length) clearInterval(typingInterval);
  }, 50);
}

function nextMessage() {
  i = (i + 1) % messages.length;
  typeMessage(messages[i]);
}

// Initial message animation
typeMessage(messages[0]);

// Floating hearts
const heartContainer = document.querySelector('.hearts');
for (let j = 0; j < 30; j++) {
  const heart = document.createElement('span');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  heart.style.opacity = Math.random();
  heartContainer.appendChild(heart);
}

// Custom cursor hearts trail
document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.classList.add('cursor-heart');
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 800);
});
</script>
