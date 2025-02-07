const HomePage = require("../../PageObjects/HomePage")
const ProductPage = require("../../PageObjects/ProductPage")
const CartPage = require("../../PageObjects/CartPage")
const { default: HomePage } = require("../../PageObjects/HomePage")
const {Given, When, Then, Before, After} = require("@cucumber/cucumber")
const { Builder, Browser } = require("selenium-webdriver")

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
        await driver.get(url)
        const homePage = new HomePage(driver)
        await homePage.selecionaBarraPesquisa()
        await homePage.pesquisaProduto("Orquídea Mine Rara Rosa")
        await homePage.selecionaAutoComplete()
    })
})