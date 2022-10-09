// Escreva uma função que usa 2 números e retorna o maior entre eles

function numMax(numUm, numDois) {
    if(numUm > numDois) {
        console.log(`O número ${numUm} é maior que o ${numDois}`)
    } else {
        console.log(`O número ${numDois} é maior que o ${numUm}`)
    }
};
numMax(3, 8);