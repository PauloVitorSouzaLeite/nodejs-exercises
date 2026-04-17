let nums = [1, 2, 3, 4]
function soma(array = []) {
    let soma = 0
    let contador = 0
    do {
        soma += array[contador]
        contador++
    } while (contador < array.length)
    return soma
}
console.log(soma(nums))