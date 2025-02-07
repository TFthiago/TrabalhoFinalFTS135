const BasePage = require("./BasePage")
const By = require("selenium-webdriver".By)

class CartPage extends BasePage {
    
    constructor(driver){
        super(driver)
        this.productName2 = By.css(".prodBasket_nome")
        this.productPrice2 = By.css(".precoPor_basket")
        this.productNameXpath = By.xpath("//*[@id=\"ContentSite_Basketcontrol1_idUpdatePanel\"]/div[2]/div[2]/ul[2]/li/div[2]/span[1]")
        this.productPriceXpath = By.xpath("//*[@id=\"ContentSite_Basketcontrol1_idUpdatePanel\"]/div[2]/div[2]/ul[2]/li/div[4]/span[2]")
        this.totalPrice = By.css(".vr-total")
    }

    async validaProdName2(){
        await this.driver.findElement(this.productName2).getText()
    }

    async validaProdPrice2(){
        await this.driver.findElement(this.productPrice2).getText()
    }

    async validaProdNameXpath(){
        await this.driver.findElement(this.productNameXpath).getText()
    }

    async validaProdPriceXpath(){
        await this.driver.findElement(this.productPriceXpath).getText()
    }

    async validaPrecTotal(){
        await this.driver.findElement(this.totalPrice).getText()
    }
}

export default CartPage