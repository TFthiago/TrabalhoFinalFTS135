const Calculadora = require("../../Calculadora/calc")

describe('Testes para a calculadora de ração', () => {
    
// TESTES POSITIVOS

    it('Teste positivo porte pequeno 8kg ', () => {

        expect("A quantidade de ração ideal deverá ser de 80.00 gramas").toBe(Calculadora.calcularRacaoCao("P","8"));

        console.log()
    })

    it('Teste limite positivo porte pequeno', () => {

        expect("A quantidade de ração ideal deverá ser de 99.90 gramas").toBe(Calculadora.calcularRacaoCao("P","9.99"));

    })

    it('Teste positivo porte médio 20kg', () => {

        expect("A quantidade de ração ideal deverá ser de 400.00 gramas").toBe(Calculadora.calcularRacaoCao("M","20"));

    })

    it('Teste limite positivo porte médio', () => {

        expect("A quantidade de ração ideal deverá ser de 499.80 gramas").toBe(Calculadora.calcularRacaoCao("M","24.99"));

    })

    it('Teste positivo porte grande 50kg', () => {

        expect("A quantidade de ração ideal deverá ser de 1500.00 gramas").toBe(Calculadora.calcularRacaoCao("G","50"));

    })

    it('Teste limite positivo porte grande', () => {

        expect("A quantidade de ração ideal deverá ser de 750.30 gramas").toBe(Calculadora.calcularRacaoCao("G","25.01"));

    })

})