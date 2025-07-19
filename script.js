document.addEventListener("DOMContentLoaded", () => {
  const photos = [
    "images/music/aldimelina5.jpg", // Foto kedua
    "images/music/bangaldi.jpg"          // Foto ketiga
  ];

  const messages = [
    "momen kecil kita💖",
    "Makasi ya sudah berjuang sejauh ini,tuntun melina ya untuk menjadi versi terbaik",
    "semangat sayang!!!!!"
  ];

  let currentIndex = 0;

  const photo = document.getElementById("photo");
  const message = document.getElementById("message");
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const challenge = document.getElementById("challenge");
  const finalThankYou = document.getElementById("finalThankYou");

  function typeWriter(text, element, speed = 40) {
    element.textContent = "";
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  startBtn.addEventListener("click", () => {
    // Saat klik Start, langsung ke pesan dan foto kedua
    currentIndex = 0;
    photo.src = photos[currentIndex];
    typeWriter(messages[currentIndex], message);
    startBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
  });

  nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < photos.length) {
    // Tambahkan fade-out
    photo.classList.add("fade-out");
    setTimeout(() => {
      photo.src = photos[currentIndex];
      // Setelah ganti, fade-in lagi
      photo.classList.remove("fade-out");
      typeWriter(messages[currentIndex], message);
    }, 500);
  } else {
    nextBtn.style.display = "none";
    typeWriter(messages[messages.length - 1], message);
    challenge.style.display = "block";
  }
});


  document.getElementById("submitBtn").addEventListener("click", () => {
    const reason = document.getElementById("reason").value;
    if (reason.trim().length < 10) {
      alert("Tulis yang jujur ya sayang ✨");
    } else {
      finalThankYou.style.display = "block";
      document.getElementById("submitBtn").style.display = "none";
      showConfetti();
      startHeartRain();
    }
  });

  function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.body.appendChild(star);

  // Hapus bintang setelah animasi selesai
  setTimeout(() => {
    star.remove();
  }, 5000);
}

// Buat bintang setiap 300ms
setInterval(createStar, 300);


  function showConfetti() {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.textContent = "✨";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  }

  function startHeartRain() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "💖";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 500);
  }
  
});
