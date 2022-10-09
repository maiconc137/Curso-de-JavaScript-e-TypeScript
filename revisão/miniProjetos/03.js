// se divisível por 3 => Fizz
// se divisível por 5 => Buzz
// se divisível por 3 e 5 => FizzBuzz
// não divisível por 3 ou 5 => entrada
// se não for um número => 'Não é um número

function fizzBuzz(entrada) {
    if ( typeof entrada !== 'number')
        return 'Não é um número'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
         return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
return entrada;
};

console.log(fizzBuzz())
