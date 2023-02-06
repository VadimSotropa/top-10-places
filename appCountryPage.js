const form = document.querySelector('#search-form');
form.addEventListener('input', (event) => {
    event.preventDefault();
    const input = document.querySelector('#search-input');
    const searchTerm = input.value.toLowerCase().trim();
    const cityCards = document.querySelectorAll('.country-card');
    if(searchTerm.length === 0){
        cityCards.forEach((card) => {
            card.classList.remove('hidden');
        });
    }else{
        cityCards.forEach((card) => {
            const cityName = card.querySelector('h3').innerHTML.toLowerCase().trim();
            let index = 0;
            for (let i = 0; i < cityName.length; i++) {
                if (cityName[i] === searchTerm[index]) {
                    index++;
                    if (index === searchTerm.length) {
                        card.classList.remove('hidden');
                        break;
                    }
                } else {
                    index = 0;
                }
            }
            if (index !== searchTerm.length) {
                card.classList.add('hidden');
            }
        });
    }
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}