// Objeto para almacenar el índice actual de cada carrusel
let currentSlides = {};

// Función para ir a la diapositiva indicada por el punto
function goToSlide(index, carouselId) {
    // Seleccionamos el carrusel y sus elementos
    const carousel = document.querySelector(`#${carouselId} .carousel`);
    const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);
    const dots = document.querySelectorAll(`#${carouselId} .dot`);

    // Validamos que el índice sea válido
    if (index < 0 || index >= slides.length) return;

    // Actualizamos el índice actual para este carrusel
    currentSlides[carouselId] = index;

    // Mover el carrusel
    carousel.style.transform = `translateX(-${currentSlides[carouselId] * 100}%)`;

    // Actualizar los puntos (dots) activos
    updateDots(carouselId);
}

// Función para actualizar los puntos activos
function updateDots(carouselId) {
    const dots = document.querySelectorAll(`#${carouselId} .dot`);
    dots.forEach(dot => dot.classList.remove('active'));

    // Marcar el punto activo
    if (currentSlides[carouselId] !== undefined) {
        dots[currentSlides[carouselId]].classList.add('active');
    }
}

// Función para inicializar cada carrusel
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        const carouselId = carousel.id;
        currentSlides[carouselId] = 0; // Comienza en la primera imagen de cada carrusel
        updateDots(carouselId);  // Actualiza los puntos
    });
});
