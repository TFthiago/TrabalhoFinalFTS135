const Calculadora = require("../../Calculadora/calc")

describe('Testes para a calculadora de ração', () => {
    
// TESTES POSITIVOS

    it('Teste positivo porte pequeno 8kg ', () => {

        expect("A quantidade de ração ideal deverá ser de 80.00 gramas").toBe(Calculadora.calcularRacaoCao("P","8"));

    })

    it('Teste positivo porte médio 20kg', () => {

        expect("A quantidade de ração ideal deverá ser de 400.00 gramas").toBe(Calculadora.calcularRacaoCao("M","20"));

    })

    it('Teste positivo porte grande 50kg', () => {

        expect("A quantidade de ração ideal deverá ser de 1500.00 gramas").toBe(Calculadora.calcularRacaoCao("G","50"));

    })


//TESTES NEGATIVOS

    it('Teste negativo valor não suportado // > 100', () => {

        expect("Valor não suportado! Apenas maiores que 0 e menores que 100").toBe(Calculadora.calcularRacaoCao("G","103"));

    })

    it('Teste negativo valor não suportado // < 0', () => {

        expect("Valor não suportado! Apenas maiores que 0 e menores que 100").toBe(Calculadora.calcularRacaoCao("P","-1"));

    })

    
    it('Teste negativo tamanho não suportado', () => {

        expect("Por favor digite um tamanho suportado: P, M ou G").toBe(Calculadora.calcularRacaoCao("N","15"));

    })

    it('Teste negativo peso não corresponde ao porte', () => {

        expect("Peso não corresponde ao porte informado").toBe(Calculadora.calcularRacaoCao("G","22.42"));

    })

// TESTES NEGATIVOS COM LISTA

    let listaNegValor = [
        ["p",-5],
        ["M",-0.54],
        ["G",0],
        ["m",102.55],
        ["g",115]
    ]

    test.each(listaNegValor)("Teste negativo para porte %s e peso %f (Valores)", (porte,peso) => {

        expect(Calculadora.calcularRacaoCao(porte,peso)).toBe("Valor não suportado! Apenas maiores que 0 e menores que 100");
    })

    let listaNegPorte = [
        ["I",7.35],
        ["b",18.70],
        ["o",26],
    ]

    test.each(listaNegPorte)("Teste negativo para porte %s e peso %f (Porte)", (porte,peso) => {

        expect(Calculadora.calcularRacaoCao(porte,peso)).toBe("Por favor digite um tamanho suportado: P, M ou G");
    })

    let listaNegCor = [
        ["P",13],
        ["M",29.70],
        ["G",18.70],
    ]

    test.each(listaNegCor)("Teste negativo para porte %s e peso %f (Peso correspondente)", (porte,peso) => {

        expect(Calculadora.calcularRacaoCao(porte,peso)).toBe("Peso não corresponde ao porte informado");
    })

})