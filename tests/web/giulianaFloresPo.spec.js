const HomePage = require("../../PageObjectsWeb/HomePage")
const ProductPage = require("../../PageObjectsWeb/ProductPage")
const CartPage = require("../../PageObjectsWeb/CartPage")
const { Builder, Browser } = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const assert = require('assert')

describe('Montagem de carrinho - Giulinana Flores', () => {
    let driver
    let url = "https://www.giulianaflores.com.br"
    let options = new chrome.Options()
    options.addArguments("--incognito")

    beforeEach(async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build()
        await driver.manage().window().maximize()
        await driver.manage().setTimeouts({implicit: 30000})
    })

    afterEach(async function() {
        await driver.manage().deleteAllCookies();
        await driver.executeScript("window.localStorage.clear();");
        await driver.executeScript("window.sessionStorage.clear();");
        await driver.quit()
    })

    it('Teste montar carrinho com 2 produtos ', async () => {
        const homePage = new HomePage(driver)
        const productPage = new ProductPage(driver)
        const cartPage = new CartPage(driver)
        await driver.get(url)

    //Produto - Orquídea Mine Rara Rosa
        //HomePage
        await homePage.selecionaBarraPesquisa()
        await homePage.pesquisaProduto("Orquídea Mine Rara Rosa")
        await homePage.selecionaAutoComplete()

        //ProductPage
        const prodTextName1 = await productPage.validaProdName()
        assert.strictEqual(prodTextName1,"ORQUÍDEA MINE RARA ROSA")

        const prodTextPrice1 = await productPage.validaProdPrice()
        assert.strictEqual(prodTextPrice1,"R$ 182,90")

        await productPage.selecionaCampoCep()
        await productPage.preencheCampoCep()
        await productPage.clicaBtnCep()
        await productPage.esperaElementoData()
        await productPage.clicaBtnConfData()

        //CartPage
        const prodTextName2 = await cartPage.validaProdName2()
        assert.strictEqual(prodTextName2,"Orquídea Mine Rara Rosa")

        const prodTextPrice2 = await cartPage.validaProdPrice2()
        assert.strictEqual(prodTextPrice2,"R$ 182,90")

        await cartPage.retornaHome()
    
    //Produto - Buquê Magnificas Margaridas Amarelas
        //HomePage
        await homePage.selecionaBarraPesquisa()
        await homePage.selecionaBarraPesquisa()
        await homePage.pesquisaProduto("Buquê Magnificas Margaridas Amarelas")
        await homePage.selecionaAutoComplete()

        //ProductPage
        const prodTextName3 = await productPage.validaProdName()
        assert.strictEqual(prodTextName3,"BUQUÊ MAGNIFICAS MARGARIDAS AMARELAS")

        const prodTextPrice3 = await productPage.validaProdPrice()
        assert.strictEqual(prodTextPrice3,"R$ 99,90")

        await productPage.clicaBtnAddCart()
        await productPage.esperaElementoData()
        await productPage.clicaBtnConfData()

        //CartPage
        const prodTextName4 = await cartPage.validaProdNameXpath()
        assert.strictEqual(prodTextName4,"Buquê Magnificas Margaridas Amarelas")

        const prodTextPrice4 = await cartPage.validaProdPriceXpath()
        assert.strictEqual(prodTextPrice4,"R$ 99,90")

        const valorTotal = await cartPage.validaPrecTotal()
        assert.strictEqual(valorTotal,"Total da compra:\nR$ 388,67")
    })
})