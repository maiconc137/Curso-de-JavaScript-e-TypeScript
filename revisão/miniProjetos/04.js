// Velocidade máxima de até 70
// a cada 5 km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12  -> "Carteira suspensa"

verificaVelocidade(50)

function verificaVelocidade(velocidade) {
    const velocidadeMax = 70;
    const kmPorPontos = 5;
    const pontosMax = 12;
    if (velocidade <= velocidadeMax)
        console.log(`Você está andando à ${velocidade} km/h, continue`);
    else {
        const pontos = Math.floor((velocidade - velocidadeMax) / kmPorPontos);
    if (pontos >= pontosMax) 
        console.log(`${pontos} pontos, carteira supesnsa`)
    else
        console.log(`Você está acima da velocidade, está com ${pontos} pontos`)
    }
}
