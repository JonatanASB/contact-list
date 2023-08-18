
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
    let id = prompt("Ingresa tu Id: ");
    let nombre = prompt("Ingresa tu nombre: ");
    let apellido = prompt("Ingresa los apellidos: ");
    let telefono = prompt("Ingresa tu telefono: ");
    let ciudad = prompt("Ingresa tu ciudad: ");
    let direccion = prompt("Ingresa tu direccion: ");

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
    for(let lista in listaContactos) {
        console.log("--------------------");
        console.log(lista, listaContactos[lista]);
    }
}

const eliminarContacto = (contacto) => {
   let id = listaContactos.findIndex(itr => itr == contacto);
   listaContactos.splice(id,1);
   console.log("Contacto eliminado");
}