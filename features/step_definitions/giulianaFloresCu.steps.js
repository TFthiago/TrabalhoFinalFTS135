const {Given, When, Then, Before, After} = require("@cucumber/cucumber")
const { Builder, By, Browser, until } = require("selenium-webdriver")
//const jestExpect = require('jest').expect
const assert = require('assert')

let driver
let url = "https://www.giulianaflores.com.br"

Before(async function() {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
    await driver.manage().window().maximize()
    await driver.manage().setTimeouts({implicit: 30000})
})

After(async function() {
    await driver.manage().deleteAllCookies();
    await driver.executeScript("window.localStorage.clear();");
    await driver.executeScript("window.sessionStorage.clear();");
    await driver.quit()
    
})

Given('O Usuário tenha acessado a página home', async function () {
    await driver.get(url)
})

When('ele pesquisa pelo item {string}', async function (orquidea) {
    await driver.findElement(By.id("txtDsKeyWord")).click()
    await driver.findElement(By.id("txtDsKeyWord")).sendKeys(orquidea)
    
    let elementAutoComp = await driver.findElement(By.css(".autocomplete_completionListElement"))
    await driver.wait(until.elementIsVisible(elementAutoComp), 20000)
    await elementAutoComp.click()
})

Then('ele consegue adicionar o produto no carrinho de compras', async function () {
  //Primeira verificação do nome
    let elementName1 = await driver.findElement(By.css(".jq-product-name")).getText()
    await assert.strictEqual(elementName1,"ORQUÍDEA MINE RARA ROSA")

  //Primeira verificação do preço
    let elementPrice1 = await driver.findElement(By.css(".precoPor_prod")).getText()
    //await jestExpect(elementPrice1).toBe("R$ 182,90")
    await assert.strictEqual(elementPrice1,"R$ 182,90")

    await driver.findElement(By.id("ContentSite_txtZip")).click()
    await driver.findElement(By.id("ContentSite_txtZip")).sendKeys("57010003")
    await driver.findElement(By.css(".jOpenShippingPopup")).click()

    let elementCalend = await driver.findElement(By.css(".jSelectedMonth"))
    await driver.wait(until.elementIsVisible(elementCalend), 20000)

    await driver.findElement(By.css("[class = 'btOk jConfirmShippingData']")).click()

  //Segunda verificação do nome
    let elementName2 = await driver.findElement(By.css(".prodBasket_nome")).getText()
    //await jestExpect(elementName2).toBe("Orquídea Mine Rara Rosa")
    await assert.strictEqual(elementName2,"Orquídea Mine Rara Rosa")

  //Segunda verificação do preço
    let elementPrice2 = await driver.findElement(By.css(".precoPor_basket")).getText()
    //await jestExpect(elementPrice2).toBe("R$ 182,90")
    await assert.strictEqual(elementPrice2,"R$ 182,90")
})



