function somarpares(array = []) {
    let cont = 0;
    let soma = 0;
    let lpar = [];
    while (cont < array.length) {
        if (array[cont] % 2 == 0) {
            lpar.push(array[cont])
        };
        cont++
    };
    for (let numero in lpar) {
        soma += lpar[numero]
    };
    return soma;
}
console.log(`A soma dos números pares é: ${somarpares([1,2,3,4])}`);