const BasePage = require("./MobileBasePage")
import { visibilityOf } from 'wdio-wait-for'

class CartPage extends BasePage {

    get elProdName2() { return $('//android.widget.TextView[@text="Ramalhete com Dois Girassóis"]') }
    get elProdPrice2() { return $('(//android.widget.TextView[@text="R$ 42,90"])[1]') }
    
    async segundaValidacao() {
    
        await browser.waitUntil(visibilityOf(this.elProdName2))
        const prodName2 = await this.elProdName2.getText()
        await expect(prodName2).toContain("Ramalhete com Dois Girassóis")

        await browser.waitUntil(visibilityOf(this.elProdPrice2))
        const prodPrice2 = await this.elProdPrice2.getText()
        await expect(prodPrice2).toContain("R$ 42,90")
    }
}

module.exports = new CartPage()
