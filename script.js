function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

function borrar() {
    document.getElementById('pantalla').value = ''
}

function borrarUno() {
    let pantalla = document.getElementById('pantalla')
    pantalla.value = pantalla.value.slice(0, -1)
}


function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}