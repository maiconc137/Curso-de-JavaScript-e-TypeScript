// factory function (função fábrica)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift()
            this.sobrenome = valor.join;
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Maicon', 'Costa', 1.70, 75);
console.log(p1.imc);
// console.log(p1.fala('falando sobre JS'));
console.log(p1.nomeCompleto);
