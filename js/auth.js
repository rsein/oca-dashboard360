// Senha única para acesso
const MASTER_PASSWORD = "OCA2025#medsenior";

// Checa se está autenticado
function isAuthenticated() {
  return localStorage.getItem("authenticated") === "true";
}

// Faz login
function login(password) {
  if (password === MASTER_PASSWORD) {
    localStorage.setItem("authenticated", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Senha incorreta!");
  }
}

// Protege as páginas
function protectPage() {
  if (!isAuthenticated()) {
    window.location.href = "index.html";
  }
}

