// Variables globales
let menuVisible = false;
let carrito = []; // Array para almacenar productos en el carrito

// Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Array de productos basado en los servicios del gimnasio
const productosServicios = [
    {
        id: 1,
        nombre: "Clases de Fitness",
        descripcion: "Entrenamientos completos que combinan ejercicios cardiovasculares y de fuerza para mejorar tu condición física general.",
        precio: 50
    },
    {
        id: 2,
        nombre: "Clases de Crossfit",
        descripcion: "Entrenamiento funcional de alta intensidad que combina gimnasia, levantamiento de pesas y ejercicios cardiovasculares.",
        precio: 60
    },
    {
        id: 3,
        nombre: "Clases de Boxeo",
        descripcion: "Aprende técnicas de boxeo mientras mejoras tu condición física. Incluye entrenamiento con saco.",
        precio: 55
    },
    {
        id: 4,
        nombre: "Clases de Enduro",
        descripcion: "Entrenamiento específico para mejorar tu resistencia física y mental.",
        precio: 45
    },
    {
        id: 5,
        nombre: "Clases de Cardio",
        descripcion: "Sesiones intensivas focalizadas en mejorar tu capacidad cardiovascular.",
        precio: 40
    },
    {
        id: 6,
        nombre: "Clases de Ciclismo",
        descripcion: "Entrenamiento en bicicleta estática con diferentes niveles de intensidad.",
        precio: 45
    }
];


