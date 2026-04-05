function dobrar(array = []) {
    let dobrado = []
    for (let c = 0; c < array.length; c++) {
        dobrado.push(array[c] * 2)
    }
    return dobrado
}
console.log(dobrar([7,3]))