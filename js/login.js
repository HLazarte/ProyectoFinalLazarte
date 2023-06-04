
const lamoneyuno = document.getElementById("moneda-uno");
const lamoneydos = document.getElementById("moneda-dos");
const cantidaduno = document.getElementById("cantidad-uno");
const cantidaddos = document.getElementById("cantidad-dos");
const cuchucambiaso = document.getElementById("cambio");
const dondetomoelcafe = document.getElementById("taza");

// FETCH

function calculo () {
    const lamoneyone = lamoneyuno.value;
    const lamoneytwo = lamoneydos.value;

    fetch (`https://api.exchangerate-api.com/v4/latest/${lamoneyone}`)
    .then(res => res.json())
    .then(data =>{
        const taza = data.rates[lamoneytwo];
        
        cuchucambiaso.innerText =`1 ${lamoneyone} = ${taza} ${lamoneytwo}`;

        cantidaddos.value = (cantidaduno.value * taza).toFixed(2);
    });
} 


//EVENTOS

lamoneyuno.addEventListener("change", calculo);
cantidaduno.addEventListener("input", calculo);
lamoneydos.addEventListener("change", calculo);
cantidaddos.addEventListener("input", calculo);
taza.addEventListener("click",() => {
    const  cambiodivisa = lamoneyuno.value;
    lamoneyuno.value = lamoneydos.value;
    lamoneydos.value = cambiodivisa;
    calculo();
})

calculo();