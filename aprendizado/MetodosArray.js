// Metódos de manipulação de arrays (Básico)
/*
.push() - Adiciona um novo item ao FINAL do array
.unshift() - Adiciona um novo item ao INÍCIO do array
.pop() - Remove o ÚLTIMO item do array
.shift() - Remove o PRIMEIRO item do array
.slice() - O primeiro parâmetro irá iniciar no índice informado. 
O segundo parâmetro irá parar no item com o índice informado. Esse metódo não altera o array original.
.splice() - O primeiro parâmetro irá iniciar no índice informado. 
O segundo parâmetro irá deletar uma determinada quantidade de items no array a partir do item com o índice do primeiro parâmetro. O terceiro parâmetro irá adicionar um item novo. Esse metódo altera o array original
 */
function linhas() {
    return "----------------------------------------------------"
}
let residencia = []
residencia.push("Javascript")
residencia.unshift("Programmer")
residencia.unshift("HTML")
residencia.unshift("CSS")
residencia.pop()
residencia.unshift("Programmer")
residencia.pop()
residencia.push("JavaScript")
residencia.unshift(29)
residencia.shift()
console.log(residencia)
console.log(linhas())
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros.slice(0,3))
console.log(numeros)
numeros.splice(0, 5,-1)
console.log(numeros)
