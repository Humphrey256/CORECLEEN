// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    if (scrollBtn.style.display !== 'block') {
      scrollBtn.style.display = 'block';
      scrollBtn.classList.add('show');
    }
  } else {
    scrollBtn.style.display = 'none';
    scrollBtn.classList.remove('show');
  }
};
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Modal Popup
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
openModalBtn.onclick = function() {
  modal.classList.add('open');
};
closeModalBtn.onclick = function() {
  modal.classList.remove('open');
};
window.onclick = function(event) {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
};

// Prevent form submit (demo only)
document.getElementById('signupForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Thank you for signing up!');
  modal.classList.remove('open');
};

// Animate Feature Cards on Scroll
function animateFeatures() {
  const cards = document.querySelectorAll('.feature-card');
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateFeatures);
window.addEventListener('load', animateFeatures);
