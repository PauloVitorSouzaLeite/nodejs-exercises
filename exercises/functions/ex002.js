function somaaten(numero=1) {
    let soma = 0
    for (let cont = 1; cont <= numero; cont++) {
        soma += cont
    }
    return soma
}
console.log(`A soma é igual a: ${somaaten(765)}`)