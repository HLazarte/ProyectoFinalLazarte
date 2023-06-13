const formulario = document.getElementById ("formulario");
const tasaInteres = 0.80;





formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let monto = document.getElementById ("monto").value;
    let cuotas = document.getElementById ("cuotas").value;
    let interes = (monto * tasaInteres);
    let total = parseFloat(monto) + parseFloat(interes);

   


    mostrarMensaje(interes, total);

})





const mostrarMensaje = (interes, total) => {
    formulario.innerHTML = `
    <strong>El interes es de $ ${interes.toFixed(2)} y el total a pagar es de $ ${total.toFixed(2)} </strong>
    <div class="from-group">
        <h2>Ingrese sus datos</h2>
        <label for="Nombre"> Nombre </label>
        <input type="text" class="form-control" id="nombre"> <br>
        <label for="Documento"> Documento </label>
        <input type="number" class="form-control" id="documento"> <br>
        <label for="Email"> E-mail </label>
        <input type="email" class="form-control" id="email"> <br>

        <button class="btn boton10" id="solicitarCredito"> Solicitar credito</button>
    </div>
    `

    const solicitarCredito = document.getElementById("solicitarCredito");
         solicitarCredito.addEventListener("click", () => {
        Swal.fire("Por el momento no podemos ofrecerte nuestros productos, intenta nuevamente en un mes");


        const nombre = document.getElementById("nombre");
        const documento = document.getElementById("documento");
        const email = document.getElementById("email");

        const datos = {
            nombre: nombre.value,
            documento: documento.value,
            email: email.value,
            interes: interes,
            total: total
        }

        localStorage.setItem("datos", JSON.stringify(datos));

    })

}

const botonlogin = document.getElementById("botonlogin");


const usuarioautorizado = "admin";
const passwordautorizado = "1234";
const usuarioautorizadodos = "samu";
const passwordautorizadodos = "majestuoso";
const usuarioautorizadotres = "agus";
const passwordautorizadotres = "pasameunbuzito";


botonlogin.addEventListener ("click", () => {
    swal.fire ({
        title:"Inicio de Sesion",
        html:`<input type="text" id="usuario" class="swal2.input" placeholder ="usuario"> </input>
        <input type="password" id="password" class="swal2.input" placeholder = "password"></input>`,
        confirmButtontext: "enviar",
        showCancelButton: true,
        cancelButtonText: "cancelar"
    }).then((result) => {
        if(result.isConfirmed) {
            let usuario = document.getElementById("usuario").value;
            let password = document.getElementById("password").value;
        if (usuario === usuarioautorizado && password === passwordautorizado){
            window.location.href = "usuarios.html";
        }  if (usuario === usuarioautorizadodos && password === passwordautorizadodos){
            window.location.href = "login.html";
        } if (usuario === usuarioautorizadotres && password === passwordautorizadotres){
            window.location.href = "login.html";
        } else( 
            swal.fire("Los datos son incorrectos")) ;
            
        }
    })
})

setTimeout ( () => {
    document.body.style.backgroundColor ="green";
}, 3000)