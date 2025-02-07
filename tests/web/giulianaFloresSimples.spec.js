const { Builder, By, Browser, until } = require("selenium-webdriver")

describe('Giuliana Flores webtest', () => {
    let driver
    let url = "https://www.giulianaflores.com.br"

    beforeEach(async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.manage().window().maximize()
        await driver.manage().setTimeouts({implicit: 30000})
    })

    afterEach(async function() {
        await driver.quit()
    })

    it('Teste montagem de carrinho', async () => {
        await driver.get(url)

        //Pesquisar o item Orquídea Mine Rara Rosa
        await driver.findElement(By.id("txtDsKeyWord")).click()
        await driver.findElement(By.id("txtDsKeyWord")).sendKeys("Orquídea Mine Rara Rosa")
        
        let elementAutoComp = await driver.findElement(By.css(".autocomplete_completionListElement"))
        await driver.wait(until.elementIsVisible(elementAutoComp), 20000)
        await elementAutoComp.click()

        //Primeira validação do nome
        let elementName1 = await driver.findElement(By.css(".jq-product-name")).getText()
        await expect(elementName1).toBe("ORQUÍDEA MINE RARA ROSA")

        //Primeira validação do preço
        let elementPrice1 = await driver.findElement(By.css(".precoPor_prod")).getText()
        await expect(elementPrice1).toBe("R$ 182,90")

        //Preencher campo do CEP
        await driver.findElement(By.id("ContentSite_txtZip")).click()
        await driver.findElement(By.id("ContentSite_txtZip")).sendKeys("57010003")
        await driver.findElement(By.css(".jOpenShippingPopup")).click()
        
        //Data de entrega
        let elementCalend = await driver.findElement(By.css(".jSelectedMonth"))
        await driver.wait(until.elementIsVisible(elementCalend), 20000)
    
        await driver.findElement(By.css("[class = 'btOk jConfirmShippingData']")).click()

        //Segunda validação do nome
        let elementName2 = await driver.findElement(By.css(".prodBasket_nome")).getText()
        await expect(elementName2).toBe("Orquídea Mine Rara Rosa")

        //Segunda validação do preço
         let elementPrice2 = await driver.findElement(By.css(".precoPor_basket")).getText()
         await expect(elementPrice2).toBe("R$ 182,90")
    
    })
})