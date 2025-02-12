class HomePage {
    get btnEnd() { return $("-android uiautomator:new UiSelector().text(\"Novo endereço\")") }
    get campoEnd() { return $("class name:android.widget.EditText") }
    get confEnd() { return $("-android uiautomator:new UiSelector().text(\"Avenida Siqueira Campos, Prado, Maceió - AL, 57010003, Brasil\")") }
    get btnProx() { return $("-android uiautomator:new UiSelector().text(\"Próximo\")") }
    get btnConfEnd() { return $("-android uiautomator:new UiSelector().text(\"\").instance(0)") }
    get salvarEnd() { return $("-android uiautomator:new UiSelector().text(\"Salvar Endereço\")") }
    get btnOk() { return $("id:android:id/button1") }
    //get campoBusca() { return $('class name:android.widget.EditText') }
    get elemProd() { return $('//android.view.ViewGroup[@content-desc="Ramalhete com Dois Girassóis"]') }

    async buscarProduto(produto) {
        await this.campoBusca.click();
        await this.campoBusca.setValue(produto);
    }
}

module.exports = new HomePage();
