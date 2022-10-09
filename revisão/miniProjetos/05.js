// Receber uma quantidade de valores para avaliar
// função exibe se cada valor par ou ímpar

// // minha solução
// console.log(parImpar(13))

// function parImpar(numero) {
//     if (numero % 2 === 0) {
//         console.log(`O número ${numero} é par`)
//     }
//     else
//         console.log(`O número ${numero} é ímpar`)
//     return ''
// }

// solução professor

exibirTipo(5)

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i, 'PAR')
        else
        console.log(i, 'ÍMPAR')
    }
}
