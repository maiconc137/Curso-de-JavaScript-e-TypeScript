// global

function retornoFuncao(nome)  {
    return function(){
        return nome
    }
}
const funcao = retornoFuncao('Maicon');
const funcao2 = retornoFuncao('Costa');

console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());
