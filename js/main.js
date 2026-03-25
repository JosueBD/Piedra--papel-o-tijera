let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-pc");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let eligeTuArma = document.querySelector("#escoge-objeto");
let reiniciar = document.querySelector("#reiniciar");
let vs = document.querySelector("#vs");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-pc");

document.querySelectorAll(".btn-objeto").forEach(btn =>
    btn.addEventListener("click", iniciarTurno)
);

function iniciarTurno(e) {

    vs.classList.add("activo");
    setTimeout(() => vs.classList.remove("activo"), 300);

    let opciones = ["piedra💎", "papel📄", "tijera✂️"];
    let eleccionPC = opciones[Math.floor(Math.random() * 3)];
    let eleccionUsuario = e.currentTarget.id;

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

    // reiniciar animación
    contenedorEleccionUsuario.classList.remove("animar");
    contenedorEleccionPC.classList.remove("animar");
    void contenedorEleccionUsuario.offsetWidth;
    void contenedorEleccionPC.offsetWidth;
    contenedorEleccionUsuario.classList.add("animar");
    contenedorEleccionPC.classList.add("animar");

    if (puntosUsuario === 7 || puntosPC === 7) {
        mensaje.classList.add("victoria");

        instrucciones.innerText =
            puntosUsuario === 7
                ? "Ganaste el juego"
                : "La pc ganó el juego";

        eligeTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.onclick = reiniciarJuego;
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "Ganaste punto";

    mensaje.classList.add("ganar");
    setTimeout(() => mensaje.classList.remove("ganar"), 300);
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "PC gana punto";

    mensaje.classList.add("perder");
    setTimeout(() => mensaje.classList.remove("perder"), 300);
}

function empate() {
    contenedorGanaPunto.innerText = "Empate";
}

function reiniciarJuego() {
    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = 0;
    contenedorPuntosPC.innerText = 0;

    mensaje.classList.add("disabled");
    mensaje.classList.remove("victoria");

    eligeTuArma.classList.remove("disabled");
    reiniciar.classList.add("disabled");

    instrucciones.innerText = "Llega a 7 puntos y gana.";
}
