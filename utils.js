// Map genre IDs to genre titles using the genres array
export function getGenreTitles(genreIds, genresList) {
  return genreIds.map(id => {
    const genre = genresList.find(g => g.id === id);
    return genre ? genre.title : '';
  }).filter(Boolean);
}

// Format ISO date string to "Month Day, Year"
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

// (Optional) Pluralize a word based on count
export function pluralize(word, count) {
  return count === 1 ? word : word + 's';
}

// (Optional) Capitalize the first letter of a string
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}