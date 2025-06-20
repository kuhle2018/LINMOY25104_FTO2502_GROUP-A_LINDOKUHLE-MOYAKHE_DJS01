// Podcast data
const podcasts = [
  {
    title: "Tech Talk",
    cover: "https://dc-mkt-prod.cloud.bosch.tech/hu/media/campaigns/techtalk/techtalk_cover.jpg",
    seasons: 4,
    genres: ["Technology", "Business"],
    updated: "2 days ago",
    description: "Join us every week as we dive deep into the latest technology trends, innovations, and industry insights. From artificial intelligence and machine learning to startup culture and digital transformation, we explore the forces shaping our digital future. Each episode features expert interviews, case studies, and actionable insights for professionals and enthusiasts alike.",
    seasonList: [
      { title: "Season 1: Getting Started", desc: "Introduction to the fundamentals", episodes: 12 },
      { title: "Season 2: Advanced Topics", desc: "Deep dives into complex subjects", episodes: 15 },
      { title: "Season 3: Industry Insights", desc: "Expert perspectives and case studies", episodes: 18 },
      { title: "Season 4: Future Trends", desc: "What's coming next in tech", episodes: 20 }
    ]
  },
  {
    title: "Crime Files",
    cover: "https://marketplace.canva.com/EAFvFNP4kZE/2/0/1600w/canva-black-red-bold-collage-podcast-cover-AFRpXsUBk2E.jpg",
    seasons: 6,
    genres: ["True Crime", "Mystery"],
    updated: "2 weeks ago",
    description: "Dive into the world of unsolved mysteries and gripping investigations. 'Crime Files' explores real-life cases, forensic breakthroughs, and the minds behind the crimes. Each episode brings you closer to the truth with expert interviews and dramatic storytelling.",
    seasonList: [
      { title: "Season 1: The First Case", desc: "A look at the origins of the series' most infamous case.", episodes: 10 },
      { title: "Season 2: Cold Trails", desc: "Unsolved mysteries and the search for answers.", episodes: 12 },
      { title: "Season 3: Forensic Files", desc: "How science helps crack the toughest cases.", episodes: 14 },
      { title: "Season 4: Criminal Minds", desc: "Profiling the minds behind the crimes.", episodes: 16 },
      { title: "Season 5: Justice Served", desc: "Cases that finally found closure.", episodes: 8 },
      { title: "Season 6: New Evidence", desc: "Recent breakthroughs and reopened investigations.", episodes: 9 }
    ]
  },
  {
    title: "Laugh Lounge",
    cover: "https://media.invisioncic.com/j283755/monthly_2024_09/laugh-lounge-logo_3x2.jpeg.374e9b4e66b23ea0bc544dda5ed3df0d.jpeg",
    seasons: 2,
    genres: ["Comedy", "Entertainment"],
    updated: "3 days ago",
    description: "Unwind and laugh out loud with the best comedians and entertainers. 'Laugh Lounge' brings you stand-up, sketches, and hilarious conversations every week.",
    seasonList: [
      { title: "Season 1: Stand-Up Stars", desc: "Spotlight on rising comedians.", episodes: 8 },
      { title: "Season 2: Comedy Sketches", desc: "Original sketches and improv fun.", episodes: 10 }
    ]
  },
  {
    title: "Startup Stories",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-qtcbTj8dhLBpoSyI6c3TYcMbPclIkea8A&s",
    seasons: 4,
    genres: ["Business", "Entrepreneurship"],
    updated: "5 days ago",
    description: "Discover the journeys of entrepreneurs and innovators. 'Startup Stories' shares real experiences, challenges, and successes from the world of business and entrepreneurship.",
    seasonList: [
      { title: "Season 1: Founders' Beginnings", desc: "How startups get started.", episodes: 9 },
      { title: "Season 2: Scaling Up", desc: "Growing pains and breakthroughs.", episodes: 11 },
      { title: "Season 3: Pivot Points", desc: "When plans change and why.", episodes: 7 },
      { title: "Season 4: Global Impact", desc: "Startups making a difference worldwide.", episodes: 8 }
    ]
  },
  {
    title: "Healthy Living",
    cover: "https://blog.feedspot.com/wp-content/uploads/2018/10/health-podcast-copy.jpg",
    seasons: 6,
    genres: ["Health", "Lifestyle"],
    updated: "1 day ago",
    description: "Your guide to a healthier, happier life. 'Healthy Living' covers wellness, nutrition, fitness, and lifestyle tips from experts and real people.",
    seasonList: [
      { title: "Season 1: Wellness Basics", desc: "Foundations of healthy living.", episodes: 10 },
      { title: "Season 2: Nutrition Know-How", desc: "Eating right for your body.", episodes: 12 },
      { title: "Season 3: Fitness Focus", desc: "Workouts and movement tips.", episodes: 8 },
      { title: "Season 4: Mind Matters", desc: "Mental health and mindfulness.", episodes: 7 },
      { title: "Season 5: Lifestyle Hacks", desc: "Simple changes for big results.", episodes: 6 },
      { title: "Season 6: Real Stories", desc: "Inspiring journeys to wellness.", episodes: 9 }
    ]
  },
  {
    title: "Past & Present",
    cover: "https://discoverpods.com/wp-content/uploads/2024/02/Best-Podcast-About-History-Header-660x377.jpg",
    seasons: 7,
    genres: ["History", "Education"],
    updated: "1 day ago",
    description: "Explore the events and people that shaped our world. 'Past & Present' brings history to life with stories, interviews, and expert analysis.",
    seasonList: [
      { title: "Season 1: Ancient Civilizations", desc: "The rise and fall of great empires.", episodes: 14 },
      { title: "Season 2: Turning Points", desc: "Moments that changed history.", episodes: 12 },
      { title: "Season 3: Unsung Heroes", desc: "Stories of lesser-known figures.", episodes: 10 },
      { title: "Season 4: Modern Times", desc: "History in the making.", episodes: 8 },
      { title: "Season 5: Hidden Mysteries", desc: "Unsolved puzzles from the past.", episodes: 7 },
      { title: "Season 6: Global Connections", desc: "How cultures have influenced each other.", episodes: 9 },
      { title: "Season 7: The Present Era", desc: "Recent events and their impact.", episodes: 6 }
    ]
  },
  {
    title: "Sports Desk",
    cover: "https://ichef.bbci.co.uk/images/ic/1200x675/p0bw3n71.jpg",
    seasons: 8,
    genres: ["Sports", "News"],
    updated: "6 days ago",
    description: "All the latest from the world of sports. 'Sports Desk' covers scores, stories, and interviews from every corner of the sporting world.",
    seasonList: [
      { title: "Season 1: Game On", desc: "Kickoff to the season's biggest games.", episodes: 12 },
      { title: "Season 2: Star Players", desc: "Profiles of top athletes.", episodes: 14 },
      { title: "Season 3: Behind the Scenes", desc: "Stories beyond the scoreboard.", episodes: 10 },
      { title: "Season 4: Global Sports", desc: "International competitions and rivalries.", episodes: 8 },
      { title: "Season 5: The Fans", desc: "Fan culture and community.", episodes: 7 },
      { title: "Season 6: Women's Sports", desc: "Spotlight on women's leagues and athletes.", episodes: 9 },
      { title: "Season 7: Youth Leagues", desc: "The next generation of stars.", episodes: 6 },
      { title: "Season 8: Season Recap", desc: "Highlights and memorable moments.", episodes: 5 }
    ]
  },
  {
    title: "Nature Lab",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRXFK0DY_9P54-tpSGESxcD3jqcQb9BF3xg&s",
    seasons: 3,
    genres: ["Science", "Nature"],
    updated: "1 week ago",
    description: "Explore the wonders of the natural world. 'Nature Lab' brings you science, discovery, and stories from the wild, with experts and explorers.",
    seasonList: [
      { title: "Season 1: Into the Wild", desc: "Adventures in untouched places.", episodes: 7 },
      { title: "Season 2: Animal Kingdom", desc: "Life and survival in the animal world.", episodes: 9 },
      { title: "Season 3: Earth Science", desc: "How our planet works.", episodes: 8 }
    ]
  }
];

// Render podcast cards
function renderPodcasts(list) {
  const container = document.getElementById('podcast-container');
  container.innerHTML = '';
  list.forEach((podcast, idx) => {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', podcast.title);
    card.innerHTML = `
      <img src="${podcast.cover}" alt="${podcast.title} Cover" class="podcast-cover" />
      <h3>${podcast.title}</h3>
      <div class="podcast-meta">
        <span class="seasons">📅 ${podcast.seasons} season${podcast.seasons > 1 ? 's' : ''}</span>
      </div>
      <div class="podcast-genres">
        ${podcast.genres.map(g => `<span class="genre-badge">${g}</span>`).join('')}
      </div>
      <div class="podcast-updated">Updated ${podcast.updated}</div>
    `;
    card.addEventListener('click', () => openModal(idx));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(idx);
    });
    container.appendChild(card);
  });
}

// Modal logic
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

// Search, filter, sort
const searchInput = document.getElementById('search-input');
const genreSelect = document.getElementById('genre-select');
const sortSelect = document.getElementById('sort-select');

function filterAndRender() {
  let filtered = podcasts.slice();
  // Search
  const search = searchInput.value.trim().toLowerCase();
  if (search) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(search) ||
      p.genres.some(g => g.toLowerCase().includes(search))
    );
  }
  // Genre
  const genre = genreSelect.value;
  if (genre && genre !== "All Genres") {
    filtered = filtered.filter(p => p.genres.includes(genre));
  }
  // Sort
  const sort = sortSelect.value;
  if (sort === "A-Z") filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "Z-A") filtered.sort((a, b) => b.title.localeCompare(a.title));
  else if (sort === "Newest") filtered.sort((a, b) => b.updated.localeCompare(a.updated));
  else if (sort === "Oldest") filtered.sort((a, b) => a.updated.localeCompare(b.updated));
  // Most Popular/Recently Updated: keep as is or implement logic if you have data
  renderPodcasts(filtered);
}

searchInput.addEventListener('input', filterAndRender);
genreSelect.addEventListener('change', filterAndRender);
sortSelect.addEventListener('change', filterAndRender);

// Initial render
renderPodcasts(podcasts);