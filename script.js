const span = document.querySelector('.typewriter');
const words = JSON.parse(span.getAttribute('data-words'));
let wordIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    span.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    span.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500; // Pause before typing next word
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  type()
  feather.replace()
  VanillaTilt.init(document.querySelector('.hero__content'), {
    max: 20,          // un peu plus de rotation = plus de parallax visible
    perspective: 800,  // plus petit = effet plus prononcé
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.02        // léger zoom au survol, renforce l'impression de profondeur
  });
});


// Hero parallax

const parallaxImg = document.querySelector('.hero-bg');
const parallaxCard = document.querySelector('.hero__content');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // 0.5 = deux fois plus lent que le scroll
  parallaxImg.style.transform = `translateY(${scrollY * 0.5}px)`;
  parallaxCard.style.translate = `0 ${scrollY * 0.25}px`;
});


sal()