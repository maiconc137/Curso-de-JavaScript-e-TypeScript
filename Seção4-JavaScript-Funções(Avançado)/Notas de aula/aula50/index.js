// argumentos que sustenta todos o sargumentos enviados

// function funcao() {
//     let total = 0;
//     for (let argumentos of arguments) {
//         total += argumentos;
//     }

//     console.log(total);
// }

// funcao(1 ,3 , 6);

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};

conta('+', 0, 20, 30, 40, 50)