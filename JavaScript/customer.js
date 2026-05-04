const catBtns = document.querySelectorAll('.cat-btn');
const menuCards = document.querySelectorAll('.menu-card');

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selected = btn.textContent.trim();

    menuCards.forEach((card, i) => {
      const tag = card.querySelector('.card-tag').textContent.trim();
      const show = selected === 'All' || tag === selected;

      if (show) {
        card.style.display = 'flex';
        // Re-trigger fade animation
        card.style.animation = 'none';
        card.offsetHeight; // force reflow
        card.style.animation = `fadeUp 0.25s ease ${i * 0.03}s both`;
      } else {
        card.style.display = 'none';
      }
    });
  });
});