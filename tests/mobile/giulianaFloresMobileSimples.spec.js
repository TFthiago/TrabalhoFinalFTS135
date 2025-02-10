//import {remote} from 'webdriverio'
const { remote } = require('webdriverio')

let browser

describe('Teste Mobile', () => {

    before(async () => {
        // browser = await remote({
        //     capabilities: {
        //         "platformName": "Android",
        //         "appium:deviceName": "emulator-5554",
        //         "appium:automationName": "uiautomator2",
        //         "appium:appPackage": "br.com.giulianaflores.android",
        //         "appium:appActivity": "br.com.giulianaflores.android.MainActivity",
        //         "appium:ensureWebviewsHavePages": true,
        //         "appium:nativeWebScreenshot": true,
        //         "appium:newCommandTimeout": 3600,
        //         "appium:connectHardwareKeyboard": true
        //     }
        // })
        // await browser.reset()
    })

    afterEach(async () => {
        // if (browser) {
        //     await browser.deleteSession()
        // }
    })

    it('Deve abrir o app e verificar um elemento', async () => {
        const el1 = await driver.$("class name:android.widget.ImageView");
        await el1.click();
        const el2 = await driver.$("id:com.android.permissioncontroller:id/permission_deny_button");
        await el2.click();
        const el3 = await driver.$("id:android:id/button2");
        await el3.click();
        const el4 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(1)");
        await el4.click();
        const el5 = await driver.$("-android uiautomator:new UiSelector().text(\"Pular\")");
        await el5.click();
        const el6 = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")");
        await el6.click();
        const el7 = await driver.$("-android uiautomator:new UiSelector().text(\"   Digite seu e-mail ou CPF\")");
        await el7.click();
        await el7.addValue("tftester26@yopmail.com");
        const el8 = await driver.$("-android uiautomator:new UiSelector().text(\"Digite sua senha\")");
        await el8.click();
        await el8.addValue("Tf121416@");
        const el9 = await driver.$("-android uiautomator:new UiSelector().text(\"Entrar\")");
        await el9.click();
        const el10 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(16)");
        await el10.click();
        const el11 = await driver.$("-android uiautomator:new UiSelector().text(\"Novo endereço\")");
        await el11.click();
        const el12 = await driver.$("class name:android.widget.EditText");
        await el12.click();
        await el12.addValue("57010003");
        const el13 = await driver.$("-android uiautomator:new UiSelector().text(\"Avenida Siqueira Campos, Prado, Maceió - AL, 57010003, Brasil\")");
        await el13.click();
        await el13.click();
        const el14 = await driver.$("-android uiautomator:new UiSelector().text(\"Próximo\")");
        await el14.click();
        const el15 = await driver.$("-android uiautomator:new UiSelector().text(\"\").instance(0)");
        await el15.click();
        const el16 = await driver.$("-android uiautomator:new UiSelector().text(\"Salvar Endereço\")");
        await el16.click();
        const el17 = await driver.$("id:android:id/button1");
        await el17.click();
        const el18 = await driver.$("class name:android.widget.EditText");
        await el18.click();
        await el18.addValue("Ramalhete com Dois Girassóis");
        const el19 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(44)");
        await el19.click();
        await el19.click();
        const el20 = await driver.$("-android uiautomator:new UiSelector().text(\"Ramalhete com Dois Girassóis\")");
        await el20.click();
        const el21 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(6)");
        await el21.click();
        const el22 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(53)");
        await el22.click();
        const el23 = await driver.$("-android uiautomator:new UiSelector().text(\"Ramalhete com Dois Girassóis\").instance(1)");
        await el23.click();
        const el24 = await driver.$("-android uiautomator:new UiSelector().text(\"R$ 42,90\")");
        await el24.click();
        const el25 = await driver.$("-android uiautomator:new UiSelector().text(\"CONTINUAR\")");
        await el25.click();
        const el26 = await driver.$("accessibility id:CONTINUAR");
        await el26.click();
        const el27 = await driver.$("class name:android.widget.ScrollView");
        await el27.click();
        const el28 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(8)");
        await el28.click();
        const el29 = await driver.$("-android uiautomator:new UiSelector().text(\"Ramalhete com Dois Girassóis\")");
        await el29.click();
        const el30 = await driver.$("-android uiautomator:new UiSelector().text(\"R$ 42,90\").instance(0)");
        await el30.click();
    })
})

 


