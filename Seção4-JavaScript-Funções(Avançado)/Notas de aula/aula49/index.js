// Declação de função (Function hoiting)
falaOi();
function falaOi() {
    console.log('Oi');
};

// First-class objects (Objetos de primeira classe)
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado()

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar()