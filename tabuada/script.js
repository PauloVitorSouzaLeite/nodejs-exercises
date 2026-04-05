function tabuada(n=1) {
    let contador = 1
    while (contador <= 10) {
        console.log(`${n} x ${contador} = ${n * contador}`)
        contador++
    }
}
let a = tabuada(0)
console.log(a)