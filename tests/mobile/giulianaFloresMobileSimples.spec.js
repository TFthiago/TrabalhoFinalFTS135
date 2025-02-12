import { visibilityOf } from 'wdio-wait-for'
const login = require("../../vendors/json/gfLogin.json")


describe('Teste mobile - Giuliana Flores', () => {

    before(async () => {
        await browser.setTimeout({ 'implicit': 20000 })
    })

    it('Teste montar carrinho com 1 produto', async () => {
        //Permissão do android
        const btnPerm = await driver.$("id:com.android.permissioncontroller:id/permission_deny_button")
        await browser.waitUntil(visibilityOf(btnPerm))
        await btnPerm.click()

        //Atualizar mais tarde
        const btnAtt = await driver.$("id:android:id/button2")
        await btnAtt.click()

        //Fechar mensagem
        const fechMensagem = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(1)")
        await fechMensagem.click()

        //Pular anúncios
        const btnPularAnun = await driver.$("-android uiautomator:new UiSelector().text(\"Pular\")")
        await browser.waitUntil(visibilityOf(btnPularAnun))
        await btnPularAnun.click()

        //Botão Entrar
        const btnEntrar = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")")
        await btnEntrar.click()

        //Campo de email
        const campoEmail = await driver.$("-android uiautomator:new UiSelector().text(\"   Digite seu e-mail ou CPF\")")
        await browser.waitUntil(visibilityOf(campoEmail))
        await campoEmail.click()
        await campoEmail.addValue(login.email)

        //Campo de senha
        const campoSenha = await driver.$("-android uiautomator:new UiSelector().text(\"Digite sua senha\")")
        await campoSenha.click()
        await campoSenha.addValue(login.password)

        //Botão Entrar 2
        const btnEntrar2 = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")")
        await btnEntrar2.click()

        //Botão Novo endereço
        const btnEnd = await driver.$("-android uiautomator:new UiSelector().text(\"Novo endereço\")")
        await browser.waitUntil(visibilityOf(btnEnd))
        await btnEnd.click()

        //Campo de endereço/CEP
        const campoEnd = await driver.$("class name:android.widget.EditText")
        await campoEnd.click()
        await campoEnd.addValue("57010003")

        //Confirmar endereço
        const confEnd = await driver.$("-android uiautomator:new UiSelector().text(\"Avenida Siqueira Campos, Prado, Maceió - AL, 57010003, Brasil\")")
        await browser.waitUntil(visibilityOf(confEnd))
        await confEnd.click()
        await confEnd.click()

        //Btn próximo
        const btnProx = await driver.$("-android uiautomator:new UiSelector().text(\"Próximo\")")
        await btnProx.click()

        //Botão confirma destinatário
        const btnConfEnd = await driver.$("-android uiautomator:new UiSelector().text(\"\").instance(0)")
        await btnConfEnd.click()

        const salvarEnd = await driver.$("-android uiautomator:new UiSelector().text(\"Salvar Endereço\")")
        await salvarEnd.click()

        //Btn Ok Sucesso
        const btnOk = await driver.$("id:android:id/button1")
        await btnOk.click()

    //Página home

        //Campo de busca
        const campoBusca = await driver.$("class name:android.widget.EditText")
        await campoBusca.click()
        await campoBusca.addValue("Ramalhete com Dois Girassóis")


        const elemProd = await driver.$('//android.view.ViewGroup[@content-desc="Ramalhete com Dois Girassóis"]');
        await browser.waitUntil(visibilityOf(elemProd))
        await elemProd.click()
        await elemProd.click()

    //Página do produto

        //Primeira validação do nome
        const elprodName1 = await driver.$('(//android.widget.TextView[@text="Ramalhete com Dois Girassóis"])[2]')
        const prodName1 = await elprodName1.getText()
        await expect(prodName1).toContain("Ramalhete com Dois Girassóis")

        //Primeira validação de preço
        const elProdPrice1 = await driver.$('//android.widget.TextView[@text="R$ 42,90"]')
        const prodPrice1 = await elProdPrice1.getText()
        await expect(prodPrice1).toContain("R$ 42,90")

        //Btn continuar
        const btnContinar = await driver.$("-android uiautomator:new UiSelector().text(\"CONTINUAR\")")
        await btnContinar.click()

        //Btn continuar 2
        const btnContinuar2 = await driver.$("accessibility id:CONTINUAR")
        await btnContinuar2.click()

    //Página do carrinho

        //Segunda validação do nome
        const elProdName2 = await driver.$('//android.widget.TextView[@text="Ramalhete com Dois Girassóis"]')
        const prodName2 = await elProdName2.getText()
        await expect(prodName2).toContain("Ramalhete com Dois Girassóis")

        //Segunda validação de preço
        const elProdPrice2 = await driver.$('(//android.widget.TextView[@text="R$ 42,90"])[1]')
        const prodPrice2 = await elProdPrice2.getText()
        await expect(prodPrice2).toContain("R$ 42,90")
    })
})
