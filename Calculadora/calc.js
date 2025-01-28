function calcularRacaoCao(porte, peso) {

    // Verificação inicial de peso
    if (peso <= 0 || peso > 100) {
        return "Valor não suportado! Apenas maiores que 0 e menores que 100";
    }

    let quantidadeRacao = 0;

    switch (porte) {
        case "P":
            quantidadeRacao = peso <= 15 ? peso * 10 : 0;
            break;
        case "M":
            quantidadeRacao = (peso > 15 && peso <= 30) ? peso * 20 : 0;
            break;
        case "G":
            quantidadeRacao = peso > 30 ? peso * 30 : 0;
            break;
        default:
            return "Por favor digite um tamanho suportado: P, M ou G";
    }

    // Se o peso não concorda com o porte esperado, retorna uma mensagem específica
    if (quantidadeRacao === 0) {
        return "Peso não corresponde ao porte informado";
    }

    return `A quantidade de ração ideal deverá ser de ${quantidadeRacao.toFixed(2)} gramas`;
}

// Exemplo de uso:
// console.log(calcularRacaoCao("P", 10)); // Saída: A quantidade de ração ideal deverá ser de 100.00 gramas
// console.log(calcularRacaoCao("M", 25)); // Saída: A quantidade de ração ideal deverá ser de 500.00 gramas
// console.log(calcularRacaoCao("G", 40)); // Saída: A quantidade de ração ideal deverá ser de 1200.00 gramas
// console.log(calcularRacaoCao("X", 10)); // Saída: Por favor digite um tamanho suportado: P, M ou G
// console.log(calcularRacaoCao("P", 0));  // Saída: Valor não suportado! Apenas maiores que 0 e menores que 100



module.exports = {
    calcularRacaoCao
}