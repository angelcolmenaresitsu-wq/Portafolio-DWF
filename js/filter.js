let currentCategory = 'all';

export function setCategory(category) {
  currentCategory = category;
}

export function getCategory() {
  return currentCategory;
}

export function applyFilter(searchInput) {
  const query = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.book-card');

  cards.forEach(card => {
    const category = card.dataset.category;
    const title = card.querySelector('.book-title').textContent.toLowerCase();
    const author = card.querySelector('.book-author').textContent.toLowerCase();

    const matchesCategory = currentCategory === 'all' || category === currentCategory;
    const matchesSearch = title.includes(query) || author.includes(query);

    card.style.display = (matchesCategory && matchesSearch) ? 'flex' : 'none';
  });
}
