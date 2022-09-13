/* 
Maicon Costa tem 26 anos, pesa 75 kg e tem 1.70 m de altura e seu IMC é x
Maicon nasceu em xxxx
*/

const nome = 'Maicon';
const sobrenome = 'Costa';
let idade = 26;
let massa = 75;
let altura = 1.70;

let imc = massa / altura ** 2;
let nascimento = 2022 - idade;
// uso da template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${massa}kg e tem ${altura}m de altura.`);
console.log(`Seu IMC é ${imc}. ${nome} nasceu em ${nascimento}`);