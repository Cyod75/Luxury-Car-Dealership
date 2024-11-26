// Mostrar el popup al hacer clic en la imagen
document.getElementById('lottery').addEventListener('click', function() {
    document.getElementById('miPopup').style.display = 'flex'; // Mostrar el popup
});

// Cerrar el popup al hacer clic en la "X"
document.getElementById('cerrarPopup').addEventListener('click', function() {
    document.getElementById('miPopup').style.display = 'none'; // Ocultar el popup
});

// Cerrar el popup si se hace clic fuera del contenido del popup
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('miPopup')) {
        document.getElementById('miPopup').style.display = 'none'; // Ocultar el popup
    }
});

// Mostrar el mensaje de confirmación después de enviar el formulario
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir que la página se recargue
    document.getElementById('confirmationMessage').classList.remove('hidden'); // Mostrar mensaje de confirmación
    document.getElementById('donationForm').reset(); // Limpiar el formulario
});
