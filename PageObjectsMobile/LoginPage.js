const BasePage = require("./MobileBasePage")
const login = require("../vendors/json/gfLogin.json")
import { visibilityOf } from 'wdio-wait-for' 

class LoginPage extends BasePage {
    get btnPerm() { return $("id:com.android.permissioncontroller:id/permission_deny_button") }
    get btnAtt() { return $("id:android:id/button2") }
    get fechMensagem() { return $("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(1)") }
    get btnPularAnun() { return $("-android uiautomator:new UiSelector().text(\"Pular\")") }
    get btnEntrar() { return $('-android uiautomator:new UiSelector().text("Entrar")') }
    get campoEmail() { return $('-android uiautomator:new UiSelector().text("   Digite seu e-mail ou CPF")') }
    get campoSenha() { return $('-android uiautomator:new UiSelector().text("Digite sua senha")') }

    async login() {
        
        await browser.waitUntil(visibilityOf(this.btnPerm))
        await this.btnPerm.click()

        await this.btnAtt.click()

        await this.fechMensagem.click()

        await browser.waitUntil(visibilityOf(this.btnPularAnun))
        await this.btnPularAnun.click()

        await this.btnEntrar.click()

        await browser.waitUntil(visibilityOf(this.campoEmail))
        await this.campoEmail.setValue(login.email)

        await this.campoSenha.addValue(login.password)

        await this.btnEntrar.click()
    }
}

module.exports = new LoginPage()
