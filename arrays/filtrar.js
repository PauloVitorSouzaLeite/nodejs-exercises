function filtragem(array=[]) {
    let arraypar = []
    for (let c = 0; c < array.length; c++) {
        if (array[c] % 2 == 0) {
            if (!arraypar.includes(array[c])) {
                arraypar.push(array[c])
            }
        }
    }
    return arraypar
}
let res = filtragem([2, 4, 6, 7, 4, 3, 2, 13, 5, 2, 5, 35, 532, 1,32,32,32,0,-4])
console.log(res)