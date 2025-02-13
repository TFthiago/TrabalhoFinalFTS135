function calcularRacaoCao(porte, peso) {

    //Cálculo de ração
    let quantidadeRacao = 0;

    porte = porte.toUpperCase();

    switch (porte) {
        case "P":
            quantidadeRacao = peso <= 10 ? peso * 10 : 0;
            break;
        case "M":
            quantidadeRacao = (peso > 10 && peso <= 25) ? peso * 20 : 0;
            break;
        case "G":
            quantidadeRacao = peso > 25 ? peso * 30 : 0;
            break;
        default:
            return "Por favor digite um tamanho suportado: P, M ou G";
    }

    // Verificação do peso
    if (peso <= 0 || peso > 100) {
        return "Valor não suportado! Apenas maiores que 0 e menores que 100";
    }

    // Peso não corresponde
    if (quantidadeRacao === 0) {
        return "Peso não corresponde ao porte informado";
    }

    return `A quantidade de ração ideal deverá ser de ${quantidadeRacao.toFixed(2)} gramas`;
}

module.exports = {
    calcularRacaoCao
}
