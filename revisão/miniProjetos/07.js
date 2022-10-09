// Criar função somar que retorna a soma de todos múltiplus de 3 e 5 de um x informado

somar(10);

function somar(entrada) {
    let multiplo3 = 0;
    let multiplo5 = 0;
    for (let i = 0; i <= entrada; i++) {
        if (i % 3 === 0) {
             multiplo3 += i;
        }
        if (i % 5 === 0) {
            multiplo5 += i;
       }
    }
return console.log(multiplo3 + multiplo5)
}
