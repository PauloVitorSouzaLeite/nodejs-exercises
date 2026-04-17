function ParOuImpar(numero=0) {
    if (numero % 2 == 1) {
        return "Número ÍMPAR"
    } else {
        return "Número PAR"
    }
}
console.log(ParOuImpar(2))