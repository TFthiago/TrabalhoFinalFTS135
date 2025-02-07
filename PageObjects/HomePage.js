const BasePage = require("./BasePage")
const By = require("selenium-webdriver".By)

class HomePage extends BasePage {

    constructor(driver){
        super(driver)
        this.barraPesquisa = By.id("txtDsKeyWord")
        this.elementAutoComp = By.css(".autocomplete_completionListElement")
        this.logoLink = By.css(".img_banner")
        this.thrdFooter = By.css(".third-footer")
    }


    async selecionaBarraPesquisa(){
        await this.driver.findElement(this.barraPesquisa).click()
    }

    async pesquisaProduto(produto){
        await this.driver.findElement(this.barraPesquisa).sendKeys(produto)
    }

    async selecionaAutoComplete(){
        await this.driver.findElement(this.elementAutoComp).click()
    }

    async esperarElementoLogo(){
        await this.driver.wait(until.elementIsVisible(this.logoLink), 20000)
    }

    async esperarElementoFooter(){
        await this.driver.wait(until.elementIsVisible(this.thrdFooter), 20000)
    }
}

export default HomePage