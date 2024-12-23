const constructorButton = document.getElementById("constructor");
const modal = document.getElementById("modal");
const mainBox = document.getElementById("mainbox");
const heroSection = document.querySelector(".hero");
const headerMain = document.querySelector(".header-main");

const backButton = document.getElementById("back");

// Показати модальне вікно
constructorButton.addEventListener("click", () => {
  modal.style.display = "block";

  mainBox.style.display = "none";
  heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Закрити модальне вікно
backButton.addEventListener("click", () => {
  modal.style.display = "none";
  mainBox.style.display = "block";

  // Прокрутка до header-main з плавною анімацією
  headerMain.scrollIntoView({ behavior: "smooth", block: "start" });
});
