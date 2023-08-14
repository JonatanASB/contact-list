var listaContactos = [];

function añadirContacto() {
    let nombre = prompt("Ingresa el nombre: ");
    let añadir = listaContactos.push(nombre);
}

function mostarLista() {
    let lista = listaContactos.join("  -  ");
    console.log(lista);
}
function eliminarContacto(){
    return listaContactos.pop();
}