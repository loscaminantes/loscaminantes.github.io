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

  // Cargar muertes recientes al cargar DOM
  cargarMuertesRecientes();
});

  // TOGGLE modo claro/oscuro
  const toggleBtn = document.getElementById("modo-toggle");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("modo-claro");
    const modoActual = document.body.classList.contains("modo-claro") ? "claro" : "oscuro";
    localStorage.setItem("modo", modoActual);
  
    toggleBtn.textContent = modoActual === "claro" ? "🌙 Modo Oscuro" : "☀️ Modo Claro";
  });

// MUERTES RECIENTES
async function cargarMuertesRecientes() {
  try {
    const response = await fetch('https://gameinfo.albiononline.com/api/gameinfo/kills/recent');
    const data = await response.json();

    const lista = document.getElementById('lista-muertes');
    if (!lista) return;

    lista.innerHTML = ''; // Limpia antes de agregar

    data.slice(0, 10).forEach(kill => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${kill.Killer.Name}</strong> mató a <strong>${kill.Victim.Name}</strong> 
        (${Math.round(kill.TotalVictimKillFame).toLocaleString()} de fama)
      `;
      lista.appendChild(li);
    });
  } catch (error) {
    console.error('Error al cargar muertes:', error);
  }
}
