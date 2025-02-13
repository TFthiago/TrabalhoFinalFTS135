const BasePage = require("./MobileBasePage")
import { visibilityOf } from 'wdio-wait-for'

class HomePage extends BasePage {
    
    get btnEnd() { return $("-android uiautomator:new UiSelector().text(\"Novo endereço\")") }
    get campoEnd() { return $("class name:android.widget.EditText") }
    get confEnd() { return $("-android uiautomator:new UiSelector().text(\"Avenida Siqueira Campos, Prado, Maceió - AL, 57010003, Brasil\")") }
    get btnProx() { return $("-android uiautomator:new UiSelector().text(\"Próximo\")") }
    get btnConfEnd() { return $("-android uiautomator:new UiSelector().text(\"\").instance(0)") }
    get salvarEnd() { return $("-android uiautomator:new UiSelector().text(\"Salvar Endereço\")") }
    get btnOk() { return $("id:android:id/button1") }
    get campoBusca() { return $("class name:android.widget.EditText") }
    get elemProd() { return $('//android.view.ViewGroup[@content-desc="Ramalhete com Dois Girassóis"]') }

    async buscarProduto() {
        
        await browser.waitUntil(visibilityOf(this.btnEnd))
        await this.btnEnd.click()

        await this.campoEnd.click()
        await this.campoEnd.addValue("57010003")

        await browser.waitUntil(visibilityOf(this.confEnd))
        await this.confEnd.click()
        await this.confEnd.click()

        await this.btnProx.click()

        await this.btnConfEnd.click()

        await this.salvarEnd.click()

        await this.btnOk.click()

        await this.campoBusca.click()
        await this.campoBusca.addValue("Ramalhete com Dois Girassóis")

        await browser.waitUntil(visibilityOf(this.elemProd))
        await this.elemProd.click()
        await this.elemProd.click()
    }
}

module.exports = new HomePage()
