// Selecciona los elementos
var div = document.querySelector('#content-statistics');
var clients = document.querySelector('#clients');
var products = document.querySelector('#product');
var marcas = document.querySelector('#marcas');

// Define la animación
var animation = anime.timeline({
  targets: [clients, products, marcas],
  round: 1,
  easing: 'easeInOutSine',
});

animation
.add({
  targets: clients,
  innerHTML: [0, 2000],
  duration: 2000,
  autoplay: false
})
.add({
  targets: products,
  innerHTML: [0, 250],
  duration: 2000,
  autoplay: false
}, '-=2000') // Esto hace que la animación comience al mismo tiempo que la anterior
.add({
  targets: marcas,
  innerHTML: [0, 10],
  duration: 2000,
  autoplay: false
}, '-=2000'); // Esto hace que la animación comience al mismo tiempo que la anterior

// Define una función que se activará cuando el div esté en la pantalla
var funcionActivar = function(entries, observer) {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Aquí es donde puedes activar tu animación
            animation.play();
        }
    });
};

// Crea una nueva instancia de IntersectionObserver que usará la función que definiste
var observer = new IntersectionObserver(funcionActivar);

// Finalmente, inicia el observer en tu div
observer.observe(div);
/************************
 * fin de la animación *
 ************************/

/*chance details image*/
// Obtén la imagen principal y las miniaturas de color
const carDetailsImg = document.getElementById("car-details-img");
const colorThumbnails = document.querySelectorAll(".color-thumbnail");

// Agrega un evento click a cada miniatura de color
colorThumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    alert("hola");
    // Remueve la clase "selected" de todas las miniaturas
    colorThumbnails.forEach(t => t.classList.remove("selected"));
    
    // Agrega la clase "selected" a la miniatura seleccionada
    thumbnail.classList.add("selected");
    
    // Obtén la ruta de la imagen de la miniatura
    const newImageSrc = thumbnail.src;
    
    // Actualiza la imagen principal con la nueva imagen
    carDetailsImg.src = newImageSrc;
  });
});

