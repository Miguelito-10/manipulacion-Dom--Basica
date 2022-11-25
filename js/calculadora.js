let numUno = document.getElementById('numUno')
let numDos = document.getElementById('numDos')
let resultado = document.getElementById("result")

function sumar(){
    let operacion = parseInt(numUno.value) + parseInt(numDos.value)
    resultado.value = operacion
}
function restar(){
    let operacion = parseInt(numUno.value) - parseInt(numDos.value);
    resultado.value = operacion
}
function multiplicar(){
    let operacion = parseInt(numUno.value) * parseInt(numDos.value);
    resultado.value = operacion
}
function dividir(){
    let operacion = parseInt(numUno.value) / parseInt(numDos.value);
    resultado.value = operacion
}
function raizCuadrada(){
    let raizNumUno = Math.sqrt(parseInt(numUno.value))
    let raizNumDos = Math.sqrt(parseInt(numDos.value))
    resultado.value = `Num1: ${raizNumUno.toFixed(2)} Num2: ${raizNumDos.toFixed(2)}`
}

function potencias(){
    let operacion = parseInt(numUno.value) ** parseInt(numDos.value);
    resultado.value = operacion
}