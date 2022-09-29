// argumentos que sustenta todos o sargumentos enviados

function funcao() {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos;
    }

    console.log(total);
}

funcao(1 ,3 , 6);