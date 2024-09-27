document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userInfoSpan = document.getElementById('user-info');
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');

    if (currentUser) {
        // Mostrar el nombre del usuario en la navegación
        userInfoSpan.innerHTML = `<i class='bx bxs-user'></i> ${currentUser.nombre}`;
        loginLink.style.display = "none"; // Ocultar enlace de iniciar sesión
        logoutLink.style.display = "block"; // Mostrar enlace de cerrar sesión
    } else {
        // Si no hay un usuario conectado, no mostrar nada
        userInfoSpan.innerHTML = '';
        loginLink.style.display = "block"; // Mostrar enlace de iniciar sesión
        logoutLink.style.display = "none"; // Ocultar enlace de cerrar sesión
    }

    // Manejo de cerrar sesión
    logoutLink.addEventListener("click", function () {
        localStorage.removeItem('currentUser'); // Eliminar el usuario actual del localStorage
        alert("Has cerrado sesión.");
        window.location.href = "index.html"; // Redirigir a la página principal u otra
    });
});
