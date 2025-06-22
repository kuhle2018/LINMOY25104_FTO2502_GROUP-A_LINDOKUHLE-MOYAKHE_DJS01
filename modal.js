import { getGenreTitles, formatDate } from './utils.js';
import { genres } from './data.js';

export function setupModal(podcasts) {
  const modal = document.getElementById('podcast-modal');
  const modalClose = document.getElementById('modal-close');

  function openModal(idx) {
    const p = podcasts[idx];
    // Support both 'cover' and 'image' fields
    const coverImg = p.cover || p.image || '';
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-cover-img').src = coverImg;
    document.getElementById('modal-cover-img').alt = p.title + " Cover";
    document.getElementById('modal-description').textContent = p.description;

    // Genre badges as pills with light grey background
    const genreTitles = Array.isArray(p.genres[0])
      ? p.genres[0] // In case genres is an array of arrays
      : p.genres;
    const genreNames = typeof genreTitles[0] === 'number'
      ? getGenreTitles(genreTitles, genres)
      : genreTitles;
    document.getElementById('modal-genres-list').innerHTML = genreNames
      .map(g => `<span class="genre-badge">${g}</span>`).join('');

    // Format updated date if ISO, else show as is
    const updated = /^\d{4}-\d{2}-\d{2}T/.test(p.updated)
      ? formatDate(p.updated)
      : p.updated;
    document.getElementById('modal-last-updated').textContent = updated;

    // Seasons
    document.getElementById('modal-seasons-list').innerHTML = (p.seasonList || []).map(s =>
      `<div class="season-row">
        <div>
          <strong>${s.title}</strong>
          <div class="season-desc">${s.desc || ''}</div>
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