// Receber uma quantidade de valores para avaliar
// função exibe se cada valor par ou ímpar
4
console.log(parImpar(13))

function parImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`)
    }
    else
        console.log(`O número ${numero} é ímpar`)
    return ''
}