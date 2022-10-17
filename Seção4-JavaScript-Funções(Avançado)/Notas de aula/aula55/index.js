// IIFE => Immediaty invoked function expression
(function(idade, peso) {
    const sobrenome = 'Costa';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    };

    function falaNome() {
        console.log(criaNome('Maicon'));
    }

    falaNome();
    console.log(idade, peso)

})(26, 75.8);
