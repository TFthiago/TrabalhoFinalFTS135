//import {remote} from 'webdriverio'
//const { remote } = require('webdriverio')
// const EC = require('wdio-wait-for');
import { elementToBeClickable, visibilityOf } from 'wdio-wait-for'


describe('Teste Mobile', () => {

    before(async () => {
        //await browser.reset()
        // await driver.setTimeout({ implicit: 20000 });
        await browser.setTimeout({ 'implicit': 20000 })
    })

    after(async () => {
        //await browser.deleteSession()
    })

    it('Deve abrir o app e verificar um elemento', async () => {
        
        // const el1 = await driver.$("class name:android.widget.ImageView");
        // await el1.click();

        //Permissão do android
        const el2 = await driver.$("id:com.android.permissioncontroller:id/permission_deny_button")
        // await waitFor.visible(el2, 10000)
        // await browser.waitUntil(EC.elementToBeClickable(el2));
        await browser.waitUntil(visibilityOf(el2))
        await el2.click()

        //Atualizar mais tarde
        const el3 = await driver.$("id:android:id/button2")
        await el3.click()

        //Fechar mensagem
        const el4 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(1)")
        await el4.click()

        //Pular anúncios
        const el5 = await driver.$("-android uiautomator:new UiSelector().text(\"Pular\")")
        await browser.waitUntil(visibilityOf(el5))
        await el5.click()

        //await browser.pause(5000)

        //Botão Entrar
        const el6 = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")")
        await el6.click()

        // console.log('Antes da pausa')
        //await browser.pause(5000)
        // console.log("Esperando manualmente...");
        // await new Promise(resolve => setTimeout(resolve, 5000)); // Espera 5s
        // console.log("Continuando...");
        // console.log('Depois da pausa')
        // await browser.debug()

        //Campo de email
    //    //const el7 = await driver.$('-android uiautomator:new UiSelector().textContains("Digite seu e-mail ou CPF")');
        //Espaço normal// const el7 = await driver.$("-android uiautomator:new UiSelector().text(\"   Digite seu e-mail ou CPF\")")

        //Espaço diferente//
        const el7 = await driver.$("-android uiautomator:new UiSelector().text(\"   Digite seu e-mail ou CPF\")")
        //await el7.waitForClickable({ timeout: 10000 })
        //const el7 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(18)");
        await browser.waitUntil(visibilityOf(el7))
        // await browser.waitUntil(async () => {
        //     return await el7.isClickable();
        // }, {
        //     timeout: 20000,
        //     timeoutMsg: "O elemento não ficou clicável dentro de 20s"
        // })

        await el7.click()
        await el7.addValue("tftester26@yopmail.com")

        //alt 1
        // const el5 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(18)");
        // await el5.click();

        //Campo de senha
        const el8 = await driver.$("-android uiautomator:new UiSelector().text(\"Digite sua senha\")")
        // //const el8 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(19)");
        await el8.click()
        await el8.addValue("Tf121416@")

        //alt 2
        // const el9 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(19)");
        // await el9.click();

        //Botão Entrar 2
        const el9 = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")")
        await el9.click()
        // const el10 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(16)");
        // await el10.click();

        //Botão Novo endereço
        const el11 = await driver.$("-android uiautomator:new UiSelector().text(\"Novo endereço\")")
        //await el11.waitForClickable({ timeout: 10000 })
        await el11.click()
        //Campo de endereço
        const el12 = await driver.$("class name:android.widget.EditText")
        await el12.click()
        await el12.addValue("57010003")

    //VERIFICAR
        const el13 = await driver.$("-android uiautomator:new UiSelector().text(\"Avenida Siqueira Campos, Prado, Maceió - AL, 57010003, Brasil\")")
        await el13.click()
        // await el13.click();
        const el14 = await driver.$("-android uiautomator:new UiSelector().text(\"Próximo\")")
        await el14.click()

        //Botão confirma destinatário
        const el15 = await driver.$("-android uiautomator:new UiSelector().text(\"\").instance(0)")
        await el15.click()
        


        const el16 = await driver.$("-android uiautomator:new UiSelector().text(\"Salvar Endereço\")")
        await el16.click()

        //Btn Ok Sucesso
        const el17 = await driver.$("id:android:id/button1")
        await el17.click()

    //Página home

        //Campo de busca
        const el18 = await driver.$("class name:android.widget.EditText")
        //await el18.waitForClickable({ timeout: 10000 })
        await el18.click()
        await el18.addValue("Ramalhete com Dois Girassóis")


        // const el19 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(44)");
        // await el19.click();
        // await el19.click();
        // const el20 = await driver.$("-android uiautomator:new UiSelector().text(\"Ramalhete com Dois Girassóis\")");
        // await el20.click();
        // const el21 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(6)");
        // await el21.click();

        //Selecionar item
    //VERIFICAR
        const el22 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(53)")
        await browser.waitUntil(elementToBeClickable(el22))
        await el22.click()
        await el22.click()

    //Página do produto

        //Primeira validação do nome
        const el23 = await driver.$("-android uiautomator:new UiSelector().text(\"Ramalhete com Dois Girassóis\").instance(1)")
        //await waitFor.visible(el23)
        await el23.getText()
        await expect(el23).toBe("Ramalhete com Dois Girassóis")

        //Primeira validação de preço
        const el24 = await driver.$("-android uiautomator:new UiSelector().text(\"R$ 42,90\")")
        await el24.getText()
        await expect(el24).toBe("R$ 42,90")

        //Btn continuar
        const el25 = await driver.$("-android uiautomator:new UiSelector().text(\"CONTINUAR\")")
        await el25.click()

        //Btn continuar 2
        const el26 = await driver.$("accessibility id:CONTINUAR")
        await el26.click()

    //Página do carrinho

        // const el27 = await driver.$("class name:android.widget.ScrollView");
        // await el27.click();
        // const el28 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(8)");
        // await el28.click();

        //Segunda validação do nome
        const el29 = await driver.$("-android uiautomator:new UiSelector().text(\"Ramalhete com Dois Girassóis\")")
        //await el29.waitForClickable({ timeout: 10000 })
        await el29.getText()
        await expect(el29).toBe("Ramalhete com Dois Girassóis")

        //Segunda validação de preço
        const el30 = await driver.$("-android uiautomator:new UiSelector().text(\"R$ 42,90\").instance(0)")
        await el30.getText()
        await expect(el30).toBe("R$ 42,90")
    })
})

 


//const el1 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.LinearLayout\").instance(0)");
// await el1.click();
// const el2 = await driver.$("id:android:id/button2");
// await el2.click();
// const el3 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(1)");
// await el3.click();
// const el4 = await driver.$("-android uiautomator:new UiSelector().text(\"Pular\")");
// await el4.click();
// const el5 = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")");
// await el5.click();
// const el6 = await driver.$("-android uiautomator:new UiSelector().text(\"   Digite seu e-mail ou CPF\")");
// await el6.click();
// await el6.addValue("tftester26@yopmail.com");
// const el7 = await driver.$("-android uiautomator:new UiSelector().text(\"Digite sua senha\")");
// await el7.click();
// await el7.addValue("Tf121416@");
// const el8 = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")");
// await el8.click();
// const el9 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(16)");
// await el9.click();


// it("Deve aguardar o elemento estar clicável", async () => {
//     const el = await $('-android uiautomator:new UiSelector().text("Digite seu e-mail ou CPF")');

//     await browser.waitUntil(async () => {
//         return await el.isClickable();
//     }, {
//         timeout: 20000,
//         timeoutMsg: "O elemento não ficou clicável dentro de 20s"
//     });

//     await el.click();
// });
