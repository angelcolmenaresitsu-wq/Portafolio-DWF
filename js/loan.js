export function toggleLoan(cardElement) {
  const btn = cardElement.querySelector('.btn-loan');
  const badge = cardElement.querySelector('.status-badge');
  const isBorrowed = cardElement.classList.contains('is-borrowed');

  if (!isBorrowed) {
    cardElement.classList.add('is-borrowed');
    badge.textContent = 'En Préstamo';
    badge.classList.replace('status-available', 'status-borrowed');
    btn.textContent = 'Devolver Libro';
    btn.classList.replace('state-available', 'state-borrowed');
  } else {
    cardElement.classList.remove('is-borrowed');
    badge.textContent = 'Disponible';
    badge.classList.replace('status-borrowed', 'status-available');
    btn.textContent = 'Solicitar Préstamo';
    btn.classList.replace('state-borrowed', 'state-available');
  }
}
