const apiClientes = "https://jsonplaceholder.typicode.com/users";

const contenedorClientes = document.getElementById("contendorClientes");

fetch(apiClientes)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        console.log(datos); 
      

    })
    .catch(error => console.log(error))

    