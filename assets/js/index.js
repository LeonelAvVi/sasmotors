var dataCars = [


    {
        "name":"Mirage G4",
        "price": [17490,18490],
        "image": "assets/img/g4.jpg",
        "colors": [
            "gris Titanio",
            "Plateado Metalico",
            "Blanco Diamante",
            "Blanco Solido",
            "Rojo Metalico",
            "Rojo Vino",
            "Azul Mica",
            "Negro Mica"
        ]
    },
    {
        "name": "Xpander",
        "price":[23490, 26990],
        "image":"assets/img/g4.jpg",
        "colors":[
            "gris Grafito Metalico",
            "Plateado Metalico",
            "Blanco Cuarzo",
            "Rojo Metalico",
            "Negro Mica"
        ]
    },
    {
        "name":"Xpander Cross",
        "price":[30990],
        "image":"assets/img/g4.jpg",
        "colors":[
            "gris Grafito Metalico",
            "plateado Metalico",
            "blanco Cuarzo",
            "naranja Metalico",
            "Cafe Bronce",
        ]
    },
    {
        "name":"asx",
        "price":[29300, 30300,32300,34300],
        "image":"assets/img/g4.jpg",
        "colors":[
            "gris titanio",
            "plata metalico",
            "blanco Perla",
            "Rojo Diamante",
            "azul Deportivo",
            "Negro mica"
        ]
    },
    {
        "name":"Eclipse Cross",
        "price":[35990,37450,39300,],
        "image":"assets/img/g4.jpg",
        "colors":[
            "gris titanio",
            "plata metalico",
            "Blanco Polar",
            "Blanco Diamante",
            "Rojo Diamante",
            "Azul deportivo",
            "Bronce Metalico",
            "Negro Mica"
        ]
    },
    {
        "name":"outlander",
        "price":[39400,44000,46800,49800,52800],
        "image":"assets/img/g4.jpg",
        "colors":[
            "Gris Titanio Metálico",
            "Plateado Metálico",
            "Blanco Sólido",
            "Blanco Diamante",
            "Rojo Diamante",
            "Azul Metalico",
            "Bronce Metalico",
            "Negro Metalico",
            "Negro Diamante",
        ]
    },
    {
        "name":"Montero Sport",
        "price":[55990,61990],
        "image":"assets/img/g4.jpg",
        "color":[
            "Gris Graphito Metálico",
            "Plata Metálico Sterling",
            "Blanco Sólido",
            "Blanco Diamante",
            "Rojo Mica Medio",
            "Bronce Metalico",
            "Azul Mica Profundo",
            "Negro Mica Jet"
        ]
    },
    {
        "name":"L200",
        "price":[34500,36490,39090,41490],
        "image":"assets/img/g4.jpg",
        "color":[
            "Gris Grafito",
            "Plata Metálico",
            "Blanco Diamante",
            "Rojo Solido",
            "Naranja Perla",
            "Azul Metalico",
            "Bronce Metalico",
            "Negro Mica"
        ]
    }

]
const buttonSearch = document.getElementById("modal_trigger");

// Verifica si el elemento existe
if (buttonSearch) {
  // El botón con ID "button-search" existe en el documento
  console.log("El botón existe.");

  // Agrega un evento click al botón
  buttonSearch.addEventListener("click", function(event) {
    event.preventDefault(); // Detiene todos los comportamientos por defecto
    mostrarInformacion();
  });
} else {
  // El botón con ID "button-search" no existe en el documento
  console.log("El botón no existe.");
}

function mostrarInformacion() {
    const categorySelect = document.getElementById("category");
    const modelSelect = document.getElementById("model");
    const priceSelect = document.getElementById("price");
    const favColorInput = document.getElementById("favcolor");
  
    const selectedCategory = categorySelect.value;
    const selectedModel = modelSelect.value;
    const selectedPrice = priceSelect.value;
  
    const favoriteColor = favColorInput.value;
  
    const mensaje = `Categoría: ${selectedCategory}\nModelo: ${selectedModel}\nPrecio: ${selectedPrice}\nColor Favorito: ${favoriteColor}`;

    let content = document.getElementById("items-search");
    content.innerHTML = "";

    dataCars.forEach(element => {
        if(element.name == modelSelect.value){
            content.innerHTML += showCars(element);
        }
        let priceMin, priceMax = 0;

        switch(priceSelect.value){
            case "15000":{
                priceMin = 15000;
                priceMax = 20000;
                break;
            }
            case "20000":{
                priceMin = 20000;
                priceMax = 30000;
                break;
            }
            case "30000":{
                priceMin = 30000;
                priceMax = 40000;
                break;
            }
            case "40000":{
                priceMin = 40000;
                priceMax = 50000;
                break;
            }
            case "50000":{
                priceMin = 50000;
                priceMax = 100000;
                break;
            }

        }

        element.price.forEach(precio => {
            if(precio >= priceMin && precio <= priceMax){
                content.innerHTML += showCars(element);
            }
        });

        element.colors.forEach(color => {
            if(color.toLowerCase().replace(/\s/g, "").includes(favoriteColor.toLowerCase().replace(/\s/g, ""))){
                content.innerHTML += showCars(element);
            }
        });


    });

  }

    function showCars(cars){
        return `
        <div class="col-lg-3 item-content">
            <div class="item-search gap-1">
            <img src="${cars.image}" alt="logo">
            <h4>${cars.name}</h4>
            <p>$${cars.price[0]}</p>
            <button class="btn btn-primary"
                onclick="window.location.href='https://www.mitsubishi-motors.com.pe/modelos/${cars.name.toLowerCase()}'"
            >Ver más</button>
            </div>
        </div>
        `;
    }