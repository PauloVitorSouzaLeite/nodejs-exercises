function contador(inicio = 1, fim = 10, pula = 1) {
    if (pula < 0) {
        pula = pula - (pula * 2)
    }
    if (pula == 0) {
        pula = 1
    }
    if (inicio < fim) {
        while (inicio <= fim) {
            console.log(inicio)
            inicio += pula
        }
    } else if (inicio > fim) {
        while (inicio >= fim) {
            console.log(inicio) 
            inicio -= pula
        }
    }
    return "Final do programa"
} 
console.log(contador(50, 3, 0))
