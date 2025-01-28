const Calculadora = require("../../Calculadora/calc")

describe('Testes para a calculadora de ração', () => {
    
    it('teste positivo 1', () => {

        let porte = "P"
        let peso = "10"
        let resulatdoEsperado = "A quantidade de ração ideal deverá ser de 100.00 gramas"

        let resultadoReal = Calculadora.calcularRacaoCao(porte, peso)

        expect(resulatdoEsperado).toEqual(resultadoReal)

        console.log(resultadoReal)
    })

    it('teste positivo porte pequeno 15', () => {

        expect("A quantidade de ração ideal deverá ser de 150.00 gramas").toBe(Calculadora.calcularRacaoCao("P","15"));

    })

})