// cardsAnimation.js
export function initializeCardEffects() {
  const cards = document.querySelectorAll('.card');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  cards.forEach((card) => {
    const content = card.querySelector('.card-content');
    const rotationFactor = parseFloat(card.getAttribute('data-rotation-factor')) || 2;

    if (!isTouchDevice) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = (rotationFactor * (x - centerX)) / centerX;
        const rotateX = (-rotationFactor * (y - centerY)) / centerY;

        content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--y', `${(y / rect.height) * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        content.style.transform = 'rotateX(0) rotateY(0)';
        content.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
          content.style.transition = '';
        }, 500);
      });
    }
  });
}
