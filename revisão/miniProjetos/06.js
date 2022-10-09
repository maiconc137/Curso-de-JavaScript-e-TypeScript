// Criar um método para ler propriedade de um objeto e exibir somento as prop do tipo string que estão neste objeto

const filme = {
    titulo: 'Um dia',
    ano: 2012,
    diretor: 'Nick Alguma coisa',
    personagem: 'Emma'
}

exibirPropriedade(filme)
function exibirPropriedade(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
    }
}
