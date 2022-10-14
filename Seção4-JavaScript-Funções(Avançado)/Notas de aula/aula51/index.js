// function soma(a, b) {
//     return a + b
// }
// console.log(soma(2,3));

// function soma2(a, b) {
//     console.log(a + b);
// }
// soma2(2,3)

// document.addEventListener('click', function () {
//     document.body.style.background = 'red';
// });

// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome };
// };

// const p1 = criaPessoa('Maicon', 'Costa');
// const p2 = {
//     nome: 'Maicon',
//     sobrenome: 'Costa'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto
//     }
//     return falaResto
// };
// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('mundo!'));

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    return function (n) {
        return multiplicador * n;
    }
    
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
