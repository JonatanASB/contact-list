
var listaContactos = [];
var listaContactos = {
    id: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    ubicaciones: {
        ciudad: "",
        direccion: ""
    }
};

function añadirContacto() {
    let id = prompt("Ingresa tu Id: ");
    let nombre = prompt("Ingresa tu nombre: ");
    let apellidos = prompt("Ingresa los apellidos: ");
    let telefono = prompt("Ingresa tu telefono");
    let ciudad = prompt("Ingresa la ciudad");
    let direccion = prompt("Ingresa la direccion: ");

    listaContactos.push(id);
    listaContactos.push(nombre);
    listaContactos.push(apellidos);
    listaContactos.push(telefono);
    listaContactos.ubicaciones.push(ciudad);
    listaContactos.ubicaciones.push(direccion);
}

function mostarLista() {
    let lista = listaContactos.join("  -  ");
    console.log(lista);
}
function eliminarContacto(){
    return listaContactos.pop();
}