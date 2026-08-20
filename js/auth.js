const usuariosRegistrados = { "admin": "1234" };
let currentUser = null;

export function initAuth(onLoginSuccess) {
  document.getElementById('login-box').querySelector('form')
    .addEventListener('submit', (e) => handleLogin(e, onLoginSuccess));

  document.getElementById('register-box').querySelector('form')
    .addEventListener('submit', handleRegister);

  document.querySelectorAll('.auth-toggle span').forEach(span => {
    span.addEventListener('click', toggleAuthBoxes);
  });
}

function toggleAuthBoxes() {
  document.getElementById('login-box').classList.toggle('hidden');
  document.getElementById('register-box').classList.toggle('hidden');
  document.getElementById('error-message').style.display = 'none';
  document.getElementById('reg-success-message').style.display = 'none';
}

function handleRegister(event) {
  event.preventDefault();
  const user = document.getElementById('reg-username').value.trim();
  const pass = document.getElementById('reg-password').value;
  const successMessage = document.getElementById('reg-success-message');

  if (user && pass) {
    usuariosRegistrados[user] = pass;
    successMessage.style.display = 'block';

    document.getElementById('reg-username').value = '';
    document.getElementById('reg-password').value = '';

    setTimeout(() => toggleAuthBoxes(), 1500);
  }
}

function handleLogin(event, onLoginSuccess) {
  event.preventDefault();
  const userInput = document.getElementById('username').value.trim();
  const passInput = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (usuariosRegistrados[userInput] && usuariosRegistrados[userInput] === passInput) {
    currentUser = userInput;
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    if (onLoginSuccess) onLoginSuccess(userInput);
  } else {
    errorMessage.style.display = 'block';
  }
}

export function getCurrentUser() {
  return currentUser;
}
