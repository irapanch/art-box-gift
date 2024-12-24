const orderButtons = document.querySelectorAll(".btn-order-js");
const modal = document.getElementById("modal");
const mainBox = document.getElementById("mainbox");
const heroSection = document.querySelector(".hero");
const headerMain = document.querySelector(".header-main");

const backButton = document.getElementById("back");
// Показать модальное окно при клике на любую кнопку с классом btn-order
orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
  
      mainBox.style.display = "none";
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  
  // Закрыть модальное окно
  backButton.addEventListener("click", () => {
    modal.style.display = "none";
    mainBox.style.display = "block";
  
    // Прокрутка до header-main с плавной анимацией
    headerMain.scrollIntoView({ behavior: "smooth", block: "start" });
  });