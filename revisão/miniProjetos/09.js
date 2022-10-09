// Criar uma função que exibe a quantidade de * que aquela linha possui

exibirAsteriscos(5)
function exibirAsteriscos(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao)
    }
}
