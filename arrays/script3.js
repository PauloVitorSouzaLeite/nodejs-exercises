let conteudo = [1, 2, 543, 422, 53, 113, 424]
let mostrar = pares(conteudo)
function pares(array) {
    let cont = 0
    let par = 0
    while (cont < array.length) {
        if (array[cont] % 2 == 0) {
            par++
        }
        cont++
    }
    return par
}
console.log(`${mostrar} números pares.`)