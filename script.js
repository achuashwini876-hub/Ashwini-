// Typing Effect

const text = "Hi, I'm Ashwini 👩‍💻";

let i = 0;

function typeWriter() {

  if (i < text.length) {

    document.querySelector(".typing").textContent += text.charAt(i);

    i++;

    setTimeout(typeWriter, 100);

  }

}

typeWriter();

// Dark Mode Toggle

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  toggleBtn.textContent =

    document.body.classList.contains("dark-mode")

      ? "☀️ Light Mode"

      : "🌙 Dark Mode";

});