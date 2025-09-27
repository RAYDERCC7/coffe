function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("usuario", user);
    window.location.href = "menu.html";
  } else {
    document.getElementById("mensaje").innerText = "Usuario o contraseña incorrectos";
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
}

// Proteger menú
if (window.location.pathname.includes("menu.html")) {
  if (!localStorage.getItem("usuario")) {
    window.location.href = "index.html";
  }
}

// Control de navegación en el menú
function mostrarSeccion(seccion) {
  const pantalla = document.getElementById("pantalla");
  if (seccion === "inicio") {
    pantalla.innerHTML = "<h2>Inicio ☕</h2><p>Bienvenido a True Coffee.</p>";
  } else if (seccion === "pedidos") {
    pantalla.innerHTML = "<h2>Pedidos 📋</h2><p>Aquí aparecerán tus órdenes de café.</p>";
  } else if (seccion === "config") {
    pantalla.innerHTML = "<h2>Configuración ⚙️</h2><p>Ajustes de la aplicación.</p><br><button onclick='cerrarSesion()'>Cerrar Sesión</button>";
  }
}
function mostrarSeccion(seccion) {
  const pantalla = document.getElementById("pantalla");

  if (seccion === "inicio") {
    pantalla.innerHTML = `
      <h2>Inicio ☕</h2>
      <p>Bienvenido a True Coffee.</p>
      <p>Explora nuestro menú de cafés en la pestaña "Pedidos".</p>
    `;
  } else if (seccion === "pedidos") {
    pantalla.innerHTML = `
      <h2>Pedidos 📋</h2>
      <div class="menu-cafe">
        <div class="cafe-item">
          <img src="img/latte.jpg" alt="Latte">
          <h3>Latte</h3>
          <p>$45 MXN</p>
        </div>
        <div class="cafe-item">
          <img src="img/cappu.jpg" alt="Cappuccino">
          <h3>Cappuccino</h3>
          <p>$50 MXN</p>
        </div>
        <div class="cafe-item">
          <img src="img/express.jpg" alt="Espresso">
          <h3>Espresso</h3>
          <p>$35 MXN</p>
        </div>
      </div>
    `;
  } else if (seccion === "config") {
    pantalla.innerHTML = `
      <h2>Configuración ⚙️</h2>
      <p>Ajustes de la aplicación.</p>
      <br>
      <button onclick='cerrarSesion()'>Cerrar Sesión</button>
    `;
  }
}
