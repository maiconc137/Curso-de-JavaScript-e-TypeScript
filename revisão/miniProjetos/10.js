// Criar função para mostrar os números primos

exibeNmerosPrimos(20)
function exibeNmerosPrimos(limite) {
    for (let num = 2; num <= limite; num++) {

      if (numeroPrimo(num)) console.log(num)
    }
};

function numeroPrimo(num){      
    for (let divisor = 2; divisor < num; divisor++) {
      if(num % divisor === 0) {
          return false;
      }
    }
    return true;
}
