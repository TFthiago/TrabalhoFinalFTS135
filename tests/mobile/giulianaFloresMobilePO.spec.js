const LoginPage = require("../../PageObjectsMobile/LoginPage")
const HomePage = require("../../PageObjectsMobile/HomePage")
const ProductPage = require("../../PageObjectsMobile/ProductPage")
const CartPage = require("../../PageObjectsMobile/CartPage")


describe('Teste mobile PO - Giuliana Flores', () => {

    before(async () => {
        await browser.setTimeout({ 'implicit': 20000 })
    })

    it('Teste montar carrinho com 1 produto', async () => {

    //Login Page
        await LoginPage.login()

    //Página home
        await HomePage.buscarProduto()

    //Página do produto
        await ProductPage.primeiraValidacao()

    //Página do carrinho
        await CartPage.segundaValidacao()
    })
})
