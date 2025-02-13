const BasePage = require("./MobileBasePage")
import { visibilityOf } from 'wdio-wait-for'

class ProductPage extends BasePage {

    get elprodName1() { return $('(//android.widget.TextView[@text="Ramalhete com Dois Girassóis"])[2]') }
    get elprodPrice1() { return $('//android.widget.TextView[@text="R$ 42,90"]') }
    get btnContinuar() { return $('-android uiautomator:new UiSelector().text("CONTINUAR")') }
    get btnContinuar2() { return $('accessibility id:CONTINUAR') }

    async primeiraValidacao() {
    
        await browser.waitUntil(visibilityOf(this.elprodName1))
        const prodName1 = await this.elprodName1.getText()
        await expect(prodName1).toContain("Ramalhete com Dois Girassóis")

        await browser.waitUntil(visibilityOf(this.elprodPrice1))
        const prodPrice1 = await this.elprodPrice1.getText()
        await expect(prodPrice1).toContain("R$ 42,90")

        await this.btnContinuar.click()

        await this.btnContinuar2.click()
    }
}

module.exports = new ProductPage()
