const constructorButton = document.getElementById('constructor');
const modal = document.getElementById('modal');
const  mainBox= document.getElementById('mainbox');
const heroSection = document.querySelector('.hero');


const backButton = document.getElementById('back');

// Показати модальне вікно
constructorButton.addEventListener('click', () => {
    
    modal.style.display = 'block';
    
    mainBox.style.display = 'none';
    heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    
});


// Закрити модальне вікно
backButton.addEventListener('click', () => {
    modal.style.display = 'none';
   
    mainBox.style.display = 'block';
    

});


