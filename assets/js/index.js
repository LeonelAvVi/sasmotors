var dataCars = [
    {
        "name":"Mirage G4",
        "price": [17490,18490],
        "image": "../catalog/mirage-g4/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/mirage-g4/index.html",
        "type":"Auto.",
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
        "image":"../catalog/xpander/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/xpander/index.html",
        "type":"Auto.",
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
        "image":"../catalog/xpander-cross/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/xpander-cross/index.html",
        "type":"Auto.",
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
        "image":"../catalog/asx/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/asx/index.html",
        "type":"Auto.",
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
        "image":"../catalog/eclipse-cross/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/eclipse-cross/index.html",
        "type":"Auto.",
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
        "image":"../catalog/outlander/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/outlander/index.html",
        "type":"Auto.",
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
        "image":"../catalog/montero-sport/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/montero-sport/index.html",
        "type":"Auto.",
        "colors":[
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
        "image":"../catalog/l200/img/banner.webp",
        "anio":"2022",
        "force":"1000",
        "marca":"Mitsubishi",
        "url":"../catalog/l200/index.html",
        "type":"Auto.",
        "colors":[
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
  
    //quitar los espacios y poner todo en minuscula
    const favoriteColor = favColorInput.value.trim().toLowerCase();
    console.log(favoriteColor);
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

        element.colors.forEach(elementColor=>{
            //eliminar espacios y poner a todo en minuscula
            let color = elementColor.toLowerCase().replace(/\s/g, "");
            if(color.includes(favoriteColor)){
                console.log(elementColor);
                content.innerHTML += showCars(element);
            }
        })


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

function loadCatalog(){
    let content = document.getElementById("catalog-content");
    content.innerHTML = "";
    dataCars.forEach(element => {
        content.innerHTML += cardCatalog(element);
    });
}

function loadCarousel(){
    let content = document.getElementById("carousel-content");
    content.innerHTML = "";
    dataCars.forEach(element => {
        content.innerHTML += cardCarousel(element);
    });
}

function cardCatalog(cars){
    return `
    <div class="col-lg-4" data-aos="zoom-out-up">
        <div class="model-car">
        <div class="see">
            <div>
            <div>
                <a
                    href=${cars.url}
                >
                ver mas</a>
                
            </div>
            </div>
        </div>
        <img src="${cars.image}" alt="">
        <div class="description">
            <h4>${cars.name}</h4>
            <p class="pd-0">${cars.marca}</p>
            <div class="dates">
            <!-- anio  -->
            <div class="inline ">
                <i class="fas fa-calendar-alt"></i>
                <p>${cars.anio}</p>
            </div>
            <div class="inline" 
                style="color: #FFBB00 !important;"
            >
                <i class="fas fa-horse-head"></i>
                <p>${cars.force}</p>
            </div>
            <!-- marca -->
            <p
                style="margin-left: 4px;"
            >${cars.type}</p>
            

            </div>
            <p class="sales">$ ${cars.price[0]}</p>
        </div>
        </div>
    </div>
    `
}

function cardCarousel(cars){
    return `
    <div class="carousel-item active">
        <div class="card">
            <div class="img-wrapper"
            style="background-image: url(${cars.image});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            "
            >
            <!-- <img src="/assets/img/caruosel/car1.webp" class="d-block w-100" alt="car1">  -->
            </div>
            <div class="card-body">
                <h5 class="card-title">${cars.name}</h5>
                <div class="card-info">
                <div class="card-info-element">
                    <i class="fas fa-calendar-alt"></i>
                    ${cars.anio}
                </div>
                <div class="card-info-element border-horizontal">
                    <i class="fas fa-horse-head"></i>
                    ${cars.force}
                </div>
                <div class="card-info-element">
                    <i class="fas fa-dollar-sign"></i> 
                    ${cars.price[0]}
                </div>
                </div>
                
            </div>
        </div>
    </div>`
}