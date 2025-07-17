document.addEventListener("DOMContentLoaded", () => {
  let userName = "";

  // Loop hingga nama valid dimasukkan
  while (!userName || userName.trim() === "") {
    userName = prompt("What's your name?");
  }

  // Masukkan ke elemen HTML
  document.getElementById("name").textContent = userName.trim();

  // Tampilkan body yang semula disembunyikan
  document.body.classList.remove("hidden-before-name");

  // Elemen yang diperlukan
  const toggleMode = document.getElementById('toggleMode');
  const body = document.body;
  const themeIcon = document.getElementById('themeIcon');
  const welcomeText = document.querySelector('.text-welcome');
  const mobileMenuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Set default mode
  let isDarkMode = true;

  function updateTheme() {
    if (isDarkMode) {
      // Aktifkan dark mode
      body.classList.remove('light-mode');
      themeIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";

      // Atur teks welcome (pastikan tidak bentrok dengan CSS)
      welcomeText.classList.remove("text-black");
      welcomeText.classList.add("text-gray-300");
    } else {
      // Aktifkan light mode
      body.classList.add('light-mode');
      themeIcon.src = "https://cdn-icons-png.flaticon.com/512/169/169367.png";

      // Atur teks welcome (biarkan style dari CSS .light-mode yang override)
      welcomeText.classList.remove("text-gray-300");
      welcomeText.classList.add("text-black");
    }
  }

  toggleMode.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateTheme();
  });

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  updateTheme(); // Terapkan saat pertama load
});
