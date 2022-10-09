// Escreva uma função que usa 2 números e retorna o maior entre eles

// minha solução
// function numMax(numUm, numDois) {
//     if(numUm > numDois) {
//         console.log(`O número ${numUm} é maior que o ${numDois}`)
//     } else {
//         console.log(`O número ${numDois} é maior que o ${numUm}`)
//     }
// };
// numMax(8, 8);

// solução do prof

function numMax(numUm, numDois) {
    return numUm > numDois ? numUm : numDois;
    
    // if (numUm > numDois) {
    //     return numUm
    // } return numDois
}

console.log(numMax(8,3));
