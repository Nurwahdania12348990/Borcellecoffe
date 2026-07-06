// ==============================
// Auth guard — Borcelle Coffee Shop
// Melindungi halaman: jika belum login, langsung diarahkan ke login.html
// Login menerima akun apa saja (username & password bebas, asal diisi).
// ==============================

(function () {
  const raw = localStorage.getItem("borcelle_auth");
  if (!raw) {
    window.location.replace("login.html");
    return;
  }
  try {
    const session = JSON.parse(raw);
    if (!session || !session.username) {
      window.location.replace("login.html");
    }
  } catch (e) {
    window.location.replace("login.html");
  }
})();

// ==============================
// Setelah DOM siap: tampilkan nama pengguna & pasang tombol logout
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  let session = null;
  try {
    session = JSON.parse(localStorage.getItem("borcelle_auth"));
  } catch (e) {
    session = null;
  }
  if (!session) return;

  const label = document.getElementById("authUserLabel");
  if (label) {
    label.textContent = "Halo, " + session.username;
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("borcelle_auth");
      window.location.href = "login.html";
    });
  }
});
