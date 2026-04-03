function situacaoaluno(nota1 = 0, nota2 = 0, nota3 = 0) {
    let media = (nota1 + nota2 + nota3) / 3
    return media >= 7 ? "O aluno está aprovado!" :
        media >= 5 ? "O aluno está de recuperação!" :
        "O aluno está reprovado!"
}
console.log(situacaoaluno(5,10,6))
