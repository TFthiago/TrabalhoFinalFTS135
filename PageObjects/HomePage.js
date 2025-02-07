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

}


// constructor(driver){
//     super(driver) // chama a super classe BasePage e passa o Selenium
//     // mapeamos cada elemento da tela (no caso 4 deles)
//     this.linkDaSemana = By.linkText("destination of the week! The Beach!");
//     this.dropdownOrigem = By.name("fromPort");
//     this.dropdownDestino = By.name("toPort");
//     this.btnProcurarVoos = By.css(".btn-primary");
// }

