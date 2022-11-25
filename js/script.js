const h1 = document.querySelector('h1')
const form = document.querySelector('form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResultado = document.querySelector('#resultado')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
   event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResultado.innerText= "resultado: " + sumaInputs
}

//form.addEventListener('submit', sumarInputValues);
//function sumarInputValues(event) {
    //console.log({event});
    //event.preventDefault();
  //const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  //pResultado.innerText= "resultado: " + sumaInputs
//}