// Par ou Ímpar exercício
function verificar(numero) {
    if (numero % 2 == 0) {
        return "O número é PAR!"
    } else {
        return "O número é ÍMPAR!"
    }
}
let resultado = verificar(2)
console.log(resultado)