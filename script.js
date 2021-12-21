

function insert(num) {

   let numero = document.querySelector('#resultados').innerHTML
   document.querySelector('#resultados').innerHTML = numero + num
}

function clean(){

    document.querySelector('#resultados').innerHTML = ''
}


function back () {

    let resultado = document.querySelector('#resultados').innerHTML 
    document.querySelector('#resultados')
    .innerHTML = resultado.substring(0,resultado.length -1)
}

function calcular () {

    let resultado = document.querySelector('#resultados').innerHTML

    if (resultado) {

        document.querySelector('#resultados').innerHTML = eval(resultado)
    }else {

        document.querySelector('#resultados').innerHTML
    }

}