// let eu = 'Maicão';
// console.log(eu)

// camelCase
// let nomeCompleto = ''

// JavaScript é Case Sentitive
//  é possível declarar mais de uma variável ao mesmo tempo, ex:

// let nome, idade, cidade;

// nome = 'Maicon';
// idade = 26;
// cidade = 'Poa';

// console.log(nome, idade, cidade);

// o tipo const é para varíaveis constante, quando não pretendemos alterar o valor

//  é uma boa prática usarmos preferencialmente o const, 
// e o let para quando precisamos ficar alterando os varoles

// let nome = 'Maicon'; // string literal
// let idade = 26; // number literal
// let estaAprovado = true; // boolean
// let sobreNome; // indefined
// let corSelecionado = null // redefinir um valor

// let varUm = 'Sou uma String';
// console.log(typeof varUm);

// varUm = 5;
// console.log(typeof varUm);

// let pessoa = {
//     nome: 'Maicon',
//     idade: 26,
//     estaAprovado: true,
//     sobreNome: 'Costa'
// };

// console.log(pessoa);
// console.log(pessoa.nome, pessoa.sobreNome);
// console.log(pessoa.idade);

// let colega = ['João', 23, 'Gênio'];

// let nomeColega = colega.slice(0,1);
// let idadeColega = colega[1];

// console.log(`Meu colega ${nomeColega} tem ${idadeColega} anos.`)

// ** Como criar funções  **
// verbo + subtantivo

// let corSite = 'Cor atual é Azul';
// function resetaCor(cor, tonalidade) {
//     corSite = `Nova cor ${cor} ${tonalidade} foi adicionada`;
// };

// console.log(corSite);
// resetaCor('Vermelho', 'claro');
// console.log(corSite);

// realiza uma terefa e não devolve nada
// function dizerNome() {
//     console.log('Maicon');
// }
// dizerNome();

// // realiza uma tarefa e retorna algo
// function multiplicaPorDois(valor) {
//     return valor * 2;
// }

// let resultado = multiplicaPorDois(5)

// console.log(resultado);

// Tipo de operadores (artiméticos, atribuição, comparação, lógicos e bitwise)

// Aritiméticos 
// +, -, *, /, **

// let salario = 100;
// console.log(salario + salario);

// // ++ e -- (incremento e decremento)

// let idade = 26;
// console.log(idade++);
// console.log(idade);
// // o momento que faz a atribuição faz total diferença
// // se colocado antes, será feito o cálculo e após outra tarefa, se depois
// // será feita a tarefa e depois o cálculo

//  atribuição

// let valorTecladoGamer = 300;
// // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer; (ou - etc)
// console.log(valorTecladoGamer);
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);

// operadores de igualdade
// igualdade restrita
// console.log(1 === 1); true
// console.log('1' === 1); false

// igualdade solta
// console.log(1 == 1); true
// console.log('1' == 1); true

// operador ternário
// tem um cliente , 100 premium, comum

// let nomeCliente1 = 'Luffy';
// let pontosCliente1 = 100;
// let nivelCliente1 = pontosCliente1 >= 100 ? 'Premium' : 'Comum';
// console.log(`Seu cliente ${nomeCliente1} é ${nivelCliente1}`);

// let nomeCliente2 = 'Sandy';
// let pontosCliente2 = 98;
// let nivelCliente2 = pontosCliente2 >= 100 ? 'Premium' : 'Comum';
// console.log(`Seu cliente ${nomeCliente2} é ${nivelCliente2}`);

// operaores lógicos
// e (&&)
// let maiorIdade = true;
// let possuiCarteiraTrabalho = true;
// let resultado;
// let aplicarVaga = function() {
//     if (maiorIdade && possuiCarteiraTrabalho) {
//         resultado = 'Pode Aplicar';
//     } else {
//         resultado = 'Não pode aplicar';
//     }
//     return
// }
// aplicarVaga();
// console.log(resultado)

// ou (||)
// let sabeJs = true;
// let sabePython = false;
// let resultado;
// let aplicarVaga = function() {
//     if (sabeJs || sabePython) {
//         resultado = 'Pode Aplicar';
//     } else {
//         resultado = 'Não pode aplicar';
//     }
//     return

// }
// aplicarVaga();
// console.log(resultado)

// não (!=)
let testNot = true;

console.log(testNot);
console.log(!testNot);
