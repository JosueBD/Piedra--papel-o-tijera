let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-pc");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let eligeTuArma = document.querySelector("#escoge-objeto");
let reiniciar = document.querySelector("#reiniciar");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-pc");

let botonesArmas = document.querySelectorAll(".btn-objeto");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra💎";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel📄"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✂️"
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra💎" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📄") ||
        (eleccionUsuario === "papel📄" && eleccionPC === "piedra💎")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra💎" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📄") ||
        (eleccionPC === "papel📄" && eleccionUsuario === "piedra💎")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "🏅 ¡Ganaste el juego! 🏅"
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😢 ¡La pc ganó el juego! 😢"
        }

        eligeTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🏅"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La pc ganó un punto! 😢"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    eligeTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "Llega a 7 puntos y gana."
}