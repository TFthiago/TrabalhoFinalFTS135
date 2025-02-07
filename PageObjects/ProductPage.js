const BasePage = require("./BasePage")
const By = require("selenium-webdriver".By)

class ProductPage extends BasePage {

    constructor(driver) {
        super(driver)
        this.productName = By.css(".jq-product-name")
        this.productPrice = By.css(".precoPor_prod")
        this.campoCep = By.css("ContentSite_txtZip")
        this.btnOkCep = By.css(".jOpenShippingPopup")
        this.btnAddCart = By.id("ContentSite_lbtBuy")
        this.elementoData = By.css(".jSelectedMonth")
        this.btnConfData = By.id("btConfirmShippingData")

    }

    async validaProdName(){
        await this.driver.findElement(this.productName).getText()
    }

    async validaProdPrice(){
        await this.driver.findElement(this.productPrice).getText()
    }

    async selecionaCampoCep(){
        await this.driver.findElement(this.campoCep).click()
    }

    async preencheCampoCep(){
        await this.driver.findElement(this.campoCep).sendKeys("57010003")
    }

    async clicaBtnCep(){
        await this.driver.findElement(this.btnOkCep).click()
    }

    async clicaBtnAddCart(){
        await this.driver.findElement(this.btnAddCart).click()
    }

    async esperaElementoData(){
        await this.driver.wait(until.elementIsVisible(this.elementoData), 20000)
    }

    async clicaBtnConfData(){
        await this.driver.findElement(this.btnConfData).click()
    }
}

export default ProductPage