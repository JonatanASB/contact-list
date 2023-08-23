
const listaContactos = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Lopez",
        telefono: 123456,
        ubicaciones: {
            ciudad: "Apartado",
            direccion: "Cr12"
        }
    },
    {
        id: 2,
        nombre: "Ana",
        apellido: "Perez",
        telefono: 789456,
        ubicaciones: {
            ciudad: "Carepa",
            direccion: "barrio Obrero"
        }
    }
];

function añadirContacto() {
    let id = prompt("Ingresa el Id: ");
    let nombre = prompt("Ingresa los nombre: ");
    let apellido = prompt("Ingresa los apellidos: ");
    let telefono = prompt("Ingresa el telefono: ");
    let ciudad = prompt("Ingresa la ciudad: ");
    let direccion = prompt("Ingresa la direccion: ");

    const lista = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ciudad: ciudad,
        direccion: direccion
    }

    listaContactos.push(lista);
}

function mostrarLista() {
    for (let i = 0; i < listaContactos.length; i++) {
        console.log("--------------------");
        console.log("Indice " + [i]);
        console.log( listaContactos[i]);
    }
}

const eliminarContacto = () => {
    let id = prompt("Ingresa el id a eliminar: ");
    let eliminarContacto = id;
    let index = listaContactos.findIndex(itr => itr.id == eliminarContacto);
    listaContactos.splice(index, 1);
    console.log("Contacto eliminado");
}

const actualizarContacto = () => {
    // escogemos la posicion en el objeto  
    let indice = prompt("Ingresa el indice a actualizar: ");
    alert("Ingrese uno a uno los nueos valores");

    //esta condicion es para buscar el indice selecionado y asi actualizarlo
    if (indice >= 0 && indice < listaContactos.length) {
        let actContacto = listaContactos[indice];
        let id = prompt("Ingresa el nuevo id: ");
        let nomb = prompt("Ingresa tel nuevo nombre: ");
        let apell = prompt("Ingresa el nuevo apellido: ");
        let tel = prompt("Ingresa el nuevo telefono: ");
        let ciu = prompt("Ingresa la nueva ciudad: ");
        let dir = prompt("Ingresa la nueva direccion: ");

        actContacto.id = id,
        actContacto.nombre = nomb,
        actContacto.apellido = apell,
        actContacto.telefono = tel,
        actContacto.ciudad = ciu,
        actContacto.direccion = dir
    } else {
        console.log("Índice fuera de rango.");
    }





}