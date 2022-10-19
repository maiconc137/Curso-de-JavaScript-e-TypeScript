// função construtora -> objeto
// função fábrica -> objeto
// contrutora -> Pessoa (new)
function Pessoa (nome, sobrenome) {
    const Id = 12345;

    const metodoInerno = () => {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(nome + ': sou um método')
    }
}

const p1 = new Pessoa('Maicon', 'Costa');
console.log(p1.nome);
p1.metodo();
