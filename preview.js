import { getGenreTitles, formatDate } from './utils.js';
import { genres } from './data.js';

export function renderPodcasts(list, openModal) {
  const container = document.getElementById('podcast-container');
  container.innerHTML = '';
  list.forEach((podcast, idx) => {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', podcast.title);

    // Support both 'cover' and 'image'
    const coverImg = podcast.cover || podcast.image || '';

    // Get genre names from IDs
    const genreNames = typeof podcast.genres[0] === 'number'
      ? getGenreTitles(podcast.genres, genres)
      : podcast.genres;

    card.innerHTML = `
      <img src="${coverImg}" alt="${podcast.title} Cover" class="podcast-cover" />
      <h3>${podcast.title}</h3>
      <div class="podcast-meta">
        <span class="seasons">📅 ${podcast.seasons} season${podcast.seasons > 1 ? 's' : ''}</span>
      </div>
      <div class="podcast-genres">
        ${genreNames.map(g => `<span class="genre-badge">${g}</span>`).join('')}
      </div>
      <div class="podcast-updated">Updated ${formatDate(podcast.updated)}</div>
    `;
    card.addEventListener('click', () => openModal(idx));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(idx);
    });
    container.appendChild(card);
  });
}