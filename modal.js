export function setupModal(podcasts) {
  const modal = document.getElementById('podcast-modal');
  const modalClose = document.getElementById('modal-close');

  function openModal(idx) {
    const p = podcasts[idx];
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-cover-img').src = p.cover;
    document.getElementById('modal-cover-img').alt = p.title + " Cover";
    document.getElementById('modal-description').textContent = p.description;
    document.getElementById('modal-genres-list').innerHTML = p.genres.map(g => `<span class="genre-badge">${g}</span>`).join('');
    document.getElementById('modal-last-updated').textContent = p.updated;
    document.getElementById('modal-seasons-list').innerHTML = p.seasonList.map(s =>
      `<div class="season-row">
        <div>
          <strong>${s.title}</strong>
          <div class="season-desc">${s.desc}</div>
        </div>
        <div class="season-episodes">${s.episodes} episode${s.episodes > 1 ? 's' : ''}</div>
      </div>`
    ).join('');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  return openModal;
}