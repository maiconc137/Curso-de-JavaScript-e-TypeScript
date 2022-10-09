// Nota escolar
// obter a média a partir de um array

// 0 - 59 : F
// 60 - 69 : D
// 79 - 79 : C
// 80 - 89 : D
// 90 - 100 : A
 

const arrayNotas = [86, 95, 90];

console.log(mediaAluno(arrayNotas));
function calcularMedia(arrayNotas) {
    let soma = 0;
    for (let valor of arrayNotas) {
        soma += valor;
    };
    return soma/(arrayNotas.length);
}
function mediaAluno(notas) {
    const media = calcularMedia(notas)

    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    return 'A'
}
