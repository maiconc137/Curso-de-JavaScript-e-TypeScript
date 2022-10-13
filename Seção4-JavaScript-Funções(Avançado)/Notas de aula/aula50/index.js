// arguments = sustenta todos argumento enviados

// function funcao() {
//     console.log(arguments[0]+' '+arguments[9]);
// }
// funcao('Maicon', 4, 6, 19, 8, 9, 2, 9 ,0, 'Costa');

// funcao(4, 6, 19, 8, 9, 2, 9 ,0);
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total)
// }

// function funcao(a,b, c, d, e, f) {
//     console.log(a,b, c, d, e, f);
// }
// funcao(1,2,3);

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, undefined,5);

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// };

// let obj =  {nome: 'Maicon', sobrenome:'Costa', idade: 26}
// funcao(obj);

// function funcao([ nome, sobrenome, idade ]) {
//     console.log(nome, sobrenome, idade);
// };

// let obj =  [ 'Maicon','Costa', 26]
// funcao(obj);

const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
};
conta('-', 1, 1, 2);

// argumetns não existe nas arrow functions 
