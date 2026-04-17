function inverter(array = []) {
    let invertida = []
    for (let c = array.length - 1; c >= 0; c--) {
        invertida.push(array[c])
    }
    return invertida
}
console.log(inverter([3,7,6,9,1]))