const login = require("../../vendors/json/gfLogin.json")

class LoginPage {
    get btnPerm() { return $("id:com.android.permissioncontroller:id/permission_deny_button") }
    get btnAtt() { return $("id:android:id/button2") }
    get fechMensagem() { return $("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(1)") }
    get btnPularAnun() { return $("-android uiautomator:new UiSelector().text(\"Pular\")") }
    get btnEntrar() { return $('-android uiautomator:new UiSelector().text("Entrar")') }
    get campoEmail() { return $('-android uiautomator:new UiSelector().text("   Digite seu e-mail ou CPF")') }
    get campoSenha() { return $('-android uiautomator:new UiSelector().text("Digite sua senha")') }
    get btnEntrar2() { return $('-android uiautomator:new UiSelector().text("Entrar")') }

    async login(email, senha) {
        await this.btnPerm.click()
        await this.btnAtt.click()
        await this.fechMensagem.click()
        await this.btnPularAnun.click()
        await this.btnEntrar.click()
        await this.campoEmail.setValue(login.email)
        await this.campoSenha.setValue(login.senha)
        await this.btnEntrar2.click()
    }
}

module.exports = new LoginPage()
