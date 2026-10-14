let hora = prompt("Ingrese hora: ");

switch(true) {
    case hora >= 0 && hora <= 12:
        alert("Mañana")
        break;
    default:
        alert("El horario no corresponde a la mañana")
}