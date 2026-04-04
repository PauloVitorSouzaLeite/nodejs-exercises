let lista = [-4,-2,-1,-7]
let resultado = maior_numero(lista)
function maior_numero(array) {
    let cont = 0
    let maior
    do {
        console.log(array[cont])
        if (cont == 0) {
            maior = array[cont]
        }
        if (array[cont] > maior) {
            maior = array[cont]
        }
        cont++
    } while (cont < array.length)
    return maior
}
console.log(`O maior número do array é o ${resultado}`)
