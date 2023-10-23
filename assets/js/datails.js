// Obtén la imagen principal y las miniaturas de color
const carDetailsImg = document.getElementById("car-details-img");
const colorThumbnails = document.querySelectorAll(".color-thumbnail");

// Agrega un evento click a cada miniatura de color
colorThumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    // Remueve la clase "selected" de todas las miniaturas
    colorThumbnails.forEach(t => t.classList.remove("selected"));
    
    // Agrega la clase "selected" a la miniatura seleccionada
    thumbnail.classList.add("selected");
    
    // Obtén la ruta de la imagen de la miniatura usando getAttribute()
    const newImageSrc = thumbnail.getAttribute("data-image");
    
    // Actualiza la imagen principal con la nueva imagen
    carDetailsImg.src = newImageSrc;
  });
});


const slides = document.querySelectorAll(".carousel-slide");
const thumbnails = document.querySelectorAll(".thumbnail");
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  thumbnails.forEach(thumbnail => thumbnail.classList.remove("active"));

  // Aplica el efecto de fundido (fade) utilizando la propiedad opacity
  slides[index].classList.add("active");
  slides[index].style.opacity = 0;
  thumbnails[index].classList.add("active");

  // Utiliza la función requestAnimationFrame para animar el cambio de opacidad
  const fadeIn = () => {
    slides[index].style.opacity = (parseFloat(slides[index].style.opacity) || 0) + 0.05;
    if (slides[index].style.opacity < 1) {
      requestAnimationFrame(fadeIn);
    }
  };
  requestAnimationFrame(fadeIn);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Función para activar el cambio automático cada 1 segundo
function startAutoPlay() {
  intervalId = setInterval(nextSlide, 2500);
}

// Inicia el cambio automático
startAutoPlay();

// Agrega un evento click a cada thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    clearInterval(intervalId); // Detiene el cambio automático al hacer clic en un thumbnail
    currentIndex = index;
    showSlide(currentIndex);
    startAutoPlay(); // Reinicia el cambio automático
  });
});


