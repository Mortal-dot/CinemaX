// Variables para controlar el carrusel
let currentIndex = 0;  // Índice de la imagen actual
const images = document.querySelectorAll('.carousel-images .anime-item');  // Seleccionamos todos los elementos del carrusel
const totalImages = images.length;  // Total de elementos en el carrusel

// Ancho de cada item + margen (ancho: 280px, margen: 15px)
const itemWidth = 280 + 15;  // 280px de ancho + 15px de margen

// Función para cambiar la imagen mostrada
function changeImage() {
    // Calculamos el desplazamiento
    const offset = -currentIndex * itemWidth;  // Desplazamos el contenedor de acuerdo al índice y al tamaño total del item
    // Aplicamos el desplazamiento al contenedor de imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

// Función para mover al siguiente
function nextImage() {
    // Incrementamos el índice y lo volvemos a cero si llegamos al final
    currentIndex = (currentIndex + 1) % totalImages;
    changeImage();
}

// Función para mover a la imagen anterior
function prevImage() {
    // Decrementamos el índice y lo volvemos al final si llegamos al principio
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    changeImage();
}

// Añadir eventos a los botones
document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);
