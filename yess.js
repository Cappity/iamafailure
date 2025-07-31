const messages = [
  "You're the sparkle in my stardust ✨",
  "Every day with you feels like magic 💫",
  "Your smile is my favorite view 🌅",
  "If I had a flower for every thought of you… 🌸",
  "You're not my number one, you're my only one ❤️",
  "You make my world spin in color 🌈",
  "You are art in motion 🎨",
  "Falling for you was the best gravity ever 🌠"
];

let messageIndex = 0;
const msgElem = document.getElementById("message");

function newMessage() {
  msgElem.textContent = "";
  const msg = messages[messageIndex % messages.length];
  typewriter(msg);
  messageIndex++;
}

function typewriter(text, i = 0) {
  if (i < text.length) {
    msgElem.textContent += text.charAt(i);
    setTimeout(() => typewriter(text, i + 1), 50);
  }
}

function openModal() {
  document.getElementById("loveModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loveModal").style.display = "none";
}

function celebrate() {
  const confetti = document.getElementById('confetti');
  const ctx = confetti.getContext('2d');
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;

  let pieces = [];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * confetti.width,
      y: Math.random() * confetti.height,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
    for (let p of pieces) {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      p.y += p.speed;
      if (p.y > confetti.height) p.y = 0;
    }
    requestAnimationFrame(draw);
  }

  draw();

  setTimeout(() => {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
  }, 3000);
}

// Auto message on load
newMessage();
