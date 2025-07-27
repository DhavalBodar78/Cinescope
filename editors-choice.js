// Editor's Choice Page Interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div class="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalBody = modal.querySelector('.modal-body');
  const closeModal = () => modal.classList.remove('active');
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });

  // Data for modals (could be expanded)
  const movieDetails = {
    featured: {
      title: 'The Stellar Odyssey',
      content: `<p><strong>Director:</strong> Ava Sterling<br><strong>Genre:</strong> Sci-Fi<br><strong>Runtime:</strong> 2h 35m<br><strong>Year:</strong> 2024</p><p>A breathtaking space opera that redefines the genre. Director Ava Sterling's masterpiece combines stunning visuals with a compelling narrative that explores the depths of human emotion against the vast backdrop of space.</p><blockquote>"A cinematic masterpiece that will be remembered for generations. The visual effects are groundbreaking, and the emotional depth is unparalleled."</blockquote><cite>- Sarah Johnson, Senior Film Critic</cite>`
    },
    echoes: {
      title: 'Echoes of the Past',
      content: `<p><strong>Genre:</strong> Historical Drama<br><strong>Year:</strong> 2024</p><p>A gripping historical drama that explores the complexities of human nature through powerful performances and haunting cinematography.</p><blockquote>"A masterclass in period filmmaking with performances that will stay with you long after the credits roll."</blockquote>`
    },
    midnight: {
      title: 'Midnight Runners',
      content: `<p><strong>Genre:</strong> Action Comedy<br><strong>Year:</strong> 2024</p><p>An adrenaline-pumping action-comedy that delivers both laughs and thrills in equal measure. Perfect entertainment.</p><blockquote>"A rare gem that successfully balances humor with heart-pounding action sequences."</blockquote>`
    },
    silent: {
      title: 'The Silent Echo',
      content: `<p><strong>Genre:</strong> Thriller<br><strong>Year:</strong> 2024</p><p>A psychological thriller that masterfully builds tension through atmospheric cinematography and stellar performances.</p><blockquote>"A masterful exercise in suspense that keeps you guessing until the very end."</blockquote>`
    },
    citylights: {
      title: 'City Lights',
      content: `<p><strong>Genre:</strong> Romance<br><strong>Year:</strong> 2024</p><p>A charming romantic comedy that proves love stories can still feel fresh and genuine in today's cinema.</p><blockquote>"A delightful reminder that romance films can be both entertaining and emotionally satisfying."</blockquote>`
    }
  };

  // Open modal on button click
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', function() {
      const key = this.getAttribute('data-modal-open');
      if (movieDetails[key]) {
        modalBody.innerHTML = `<h2>${movieDetails[key].title}</h2>${movieDetails[key].content}`;
        modal.classList.add('active');
      }
    });
  });

  // Fade-in animation for cards
  const fadeInElements = document.querySelectorAll('.selection-card, .category-card, .editor-card');
  fadeInElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 100 + i * 120);
  });
}); 