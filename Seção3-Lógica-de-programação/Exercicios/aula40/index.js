// escreva uma função que recebe dois números e retorna o maior deles

// const max2 = (x, y) => x > y ? x : y;
// console.log(max2(2, 5))

const nume1 = prompt('Digite um número:');
const nume2 = prompt('Digite outro número número:');

function numero() {

    const maiorNumero = Math.max(nume1, nume2);

    return alert(`Entre os número digitados, o maior é o ${maiorNumero}`);
}

numero()