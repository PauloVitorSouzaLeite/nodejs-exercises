function fazertabuada(numero = 1) {
    let c = 1
    console.log(`Fazendo a tabuada do número ${numero}`)
    do {
        console.log(`${numero} x ${c} = ${numero * c}`)
        c++
    } while (c <= 10)
}
let mostrar = fazertabuada(7)
console.log(mostrar)