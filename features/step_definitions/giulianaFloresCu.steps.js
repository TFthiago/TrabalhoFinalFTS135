const {Given, When, Then, Before, After} = require("@cucumber/cucumber")
const { Builder, By, Browser, until } = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome");
const assert = require('assert')

let driver
let url = "https://www.giulianaflores.com.br"
let options = new chrome.Options()
    options.addArguments("--incognito")

Before(async function() {
    driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build()
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

When('acrescenta no carrinho', async function () {
  //Primeira verificação do nome
    let elementName1 = await driver.findElement(By.css(".jq-product-name")).getText()
    assert.strictEqual(elementName1,"ORQUÍDEA MINE RARA ROSA")

  //Primeira verificação do preço
    let elementPrice1 = await driver.findElement(By.css(".precoPor_prod")).getText()
    assert.strictEqual(elementPrice1,"R$ 182,90")

    await driver.findElement(By.id("ContentSite_txtZip")).click()
    await driver.findElement(By.id("ContentSite_txtZip")).sendKeys("57010003")
    await driver.findElement(By.css(".jOpenShippingPopup")).click()

    let elementCalend = await driver.findElement(By.css(".jSelectedMonth"))
    await driver.wait(until.elementIsVisible(elementCalend), 20000)

    await driver.findElement(By.css("[class = 'btOk jConfirmShippingData']")).click()

  //Segunda verificação do nome
    let elementName2 = await driver.findElement(By.css(".prodBasket_nome")).getText()
    assert.strictEqual(elementName2,"Orquídea Mine Rara Rosa")

  //Segunda verificação do preço
    let elementPrice2 = await driver.findElement(By.css(".precoPor_basket")).getText()
    assert.strictEqual(elementPrice2,"R$ 182,90")
})

When('depois por {string}', async function (margaridas) {
    await driver.findElement(By.css(".logo_checkout")).click()

    let elementBanner = await driver.findElement(By.css(".img_banner"))
    await driver.wait(until.elementIsVisible(elementBanner), 20000)

    //await new Promise(resolve => setTimeout(resolve, 3000));
    let elementSearch = await driver.findElement(By.id("txtDsKeyWord"))
    await driver.wait(until.elementIsVisible(elementSearch), 5000)
    await elementSearch.click()
    //await driver.findElement(By.id("txtDsKeyWord")).click()
    await elementSearch.sendKeys(margaridas)
    //await driver.findElement(By.id("txtDsKeyWord")).sendKeys(margaridas)
    
    let elementAutoComp = await driver.findElement(By.css(".autocomplete_completionListElement"))
    await driver.wait(until.elementIsVisible(elementAutoComp), 20000)
    await elementAutoComp.click()

})

When('realiza o mesmo procedimento', async function () {
  //await new Promise(resolve => setTimeout(resolve, 5000));
  //Primeira verificação do nome
    let elementName3 = await driver.findElement(By.css(".jq-product-name")).getText()
    assert.strictEqual(elementName3,"Buquê Magnificas Margaridas Amarelas")

  //Primeira verificação do preço
    let elementPrice3 = await driver.findElement(By.css(".precoPor_prod")).getText()
    assert.strictEqual(elementPrice3,"R$ 99,90")

    await driver.findElement(By.id("ContentSite_lbtBuy")).click()

    let elementCalend = await driver.findElement(By.css(".jSelectedMonth"))
    await driver.wait(until.elementIsVisible(elementCalend), 20000)
  //.jPeriodRadio
    await driver.findElement(By.id("btConfirmShippingData")).click()

  //Segunda verificação do nome
    let elementName4 = await driver.findElement(By.css(".prodBasket_nome")).getText()
    assert.strictEqual(elementName4,"Buquê Magnificas Margaridas Amarelas")

  //Segunda verificação do preço
    let elementPrice4 = await driver.findElement(By.css(".precoPor_basket")).getText()
    assert.strictEqual(elementPrice4,"R$ 99,90")
})

Then('ele consegue montar o carrinho com ambos os produtos', async function () {
  //Verificação do preço total
    let elementPrice5 = await driver.findElement(By.css(".vr-total")).getText()
    assert.strictEqual(elementPrice5,"R$ 388,67")
})



