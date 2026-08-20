let booksData = [];
let categoriesData = [];

export async function loadBooks() {
  const response = await fetch('data/books.json');
  const data = await response.json();
  categoriesData = data.categories;
  booksData = data.books;
  return { categories: categoriesData, books: booksData };
}

export function getBooks() {
  return booksData;
}

export function getCategories() {
  return categoriesData;
}

export function renderCategories(container, onCategoryClick) {
  container.innerHTML = '';
  categoriesData.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `category-btn${cat.id === 'all' ? ' active' : ''}`;
    btn.textContent = `${cat.icon} ${cat.label}`;
    btn.dataset.category = cat.id;
    btn.addEventListener('click', () => onCategoryClick(cat.id, btn));
    container.appendChild(btn);
  });
}

export function renderBooks(container) {
  container.innerHTML = '';
  booksData.forEach(book => {
    const article = document.createElement('article');
    article.className = 'book-card';
    article.id = book.id;
    article.dataset.category = book.category;
    article.innerHTML = `
      <div class="cover-wrapper">
        <span class="status-badge status-available">Disponible</span>
        <img src="${book.cover}" class="cover-img" alt="${book.title}">
      </div>
      <div class="book-details">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
      </div>
      <button class="btn-read">📖 Leer Online</button>
      <button class="btn-loan state-available">Solicitar Préstamo</button>
    `;
    container.appendChild(article);
  });
}

export function getBookById(id) {
  return booksData.find(b => b.id === id);
}
