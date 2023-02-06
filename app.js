const words = ['Paris', 'Dubai', 'Amsterdam', 'Madrid', 'Rome', 'London', 'Munich', 'Berlin', 'Barcelona', 'New York'];
let wordIndex = 0;
let letterIndex = 0;
const element = document.querySelector('.change-city');

function type() {
  if (letterIndex === words[wordIndex].length) {
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      letterIndex = 0;
      element.textContent = "";
      setTimeout(type, 2000); // delay of 2 seconds
    }, 3000); // delay of 5 seconds
    return;
  }
  element.textContent += words[wordIndex][letterIndex];
  letterIndex++;
  setTimeout(type, 100);
}

setTimeout(type, 1000);

  const form = document.querySelector('#search-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#search-input');
    const searchTerm = input.value.toLowerCase().trim();
    const cityCards = document.querySelectorAll('.city-card');
    cityCards.forEach((card) => {
      const cityName = card.querySelector('h3').innerHTML.toLowerCase().trim();
      if (cityName === searchTerm) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
  
  jQuery(document).ready(function($) { 
    jQuery('img').hover(function() { 
        jQuery(this).removeAttr('title');
    }); 
});

