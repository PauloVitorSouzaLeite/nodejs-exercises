function maiordeTres(n1 = 0, n2 = 0, n3 = 0) {
    if (n1 === n2 && n2 === n3) {
        return n1
    } else {
        let lista = [n1, n2, n3] 
        let maior = lista[0]
        for (let contador = 0; contador < lista.length; contador++) {
            if (lista[contador] > maior) {
                maior = lista[contador]
            }
        }
        return maior
    }
}
console.log(`Maior número -> ${maiordeTres(10,5,8)}`)