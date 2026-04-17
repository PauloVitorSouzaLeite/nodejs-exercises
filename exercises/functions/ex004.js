function ContagemRegressiva(n) {
    if (n == null || n == undefined) {
        return -1
    }
    if (n == 1) {
        return n
    } else {
        let lista_numeros = []
        while (n >= 1) {
            lista_numeros.push(n)
            n--
        }
        return lista_numeros
    }
}
console.log(ContagemRegressiva(73))