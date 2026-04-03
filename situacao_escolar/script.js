function situacaoaluno(nota1 = 0, nota2 = 0, nota3 = 0) {
    let media = (nota1 + nota2 + nota3) / 3
    let situacao
    if (media >= 7) {
        situacao = "O aluno está aprovado!"
    } else if (media >= 5) {
        situacao = "O aluno está em recuperação!"
    } else {
        situacao = "O aluno está reprovado!"
    }
    return situacao
}
console.log(situacaoaluno(7,4,2))
