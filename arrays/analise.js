function analisararray(array = []) {
    array.sort()
    let contador = 0
    let soma = 0
    let media = 0
    let maior = 0
    let menor = 0
    do {
        if (contador == 0) {
            maior = array[contador]
            menor = array[contador]
        } else if (array[contador] > maior) {
            maior = array[contador]
        } else if (array[contador] < menor) {
            menor = array[contador]
        }
        soma += array[contador]
        contador++
    } while (contador < array.length)
    media = soma / array.length
    return {
        maior,
        menor,
        soma,
        media,
    }
}
let resultado = analisararray([7,4,2,7,12,9]) 
console.log(resultado)