// MODAL de bienvenida
window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("bienvenida-modal");
    const cerrarBtn = document.getElementById("cerrar-modal");
  
    // Solo mostrar si no se ha cerrado antes
    if (!localStorage.getItem("modalCerrado")) {
      modal.style.display = "block";
    }
  
    cerrarBtn?.addEventListener("click", () => {
      modal.style.display = "none";
      localStorage.setItem("modalCerrado", "true");
    });
  
    // Aplicar modo guardado
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado === "claro") {
      document.body.classList.add("modo-claro");
      const toggleBtn = document.getElementById("modo-toggle");
      if (toggleBtn) toggleBtn.textContent = "🌙 Modo Oscuro";
    }
  });
  
  // TOGGLE modo claro/oscuro
  const toggleBtn = document.getElementById("modo-toggle");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("modo-claro");
    const modoActual = document.body.classList.contains("modo-claro") ? "claro" : "oscuro";
    localStorage.setItem("modo", modoActual);
  
    toggleBtn.textContent = modoActual === "claro" ? "🌙 Modo Oscuro" : "☀️ Modo Claro";
  });
  