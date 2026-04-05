function mostrartabuada(num = 1) {
    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${num} x ${contador} = ${num * contador}`)
    }
}
let resultado = mostrartabuada(0) 
console.log(resultado)