let lista_numeros = [1, 2, 7, 6, 4]
let resultado = soma(lista_numeros)
function soma(array = 0) {
    let somar = 0
    for (let cont = 0; cont < array.length; cont++) {
        somar += array[cont]
    }
    return somar
}
console.log(`A soma dos números do array é igual a: ${resultado}`)