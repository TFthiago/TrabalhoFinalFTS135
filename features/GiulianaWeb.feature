Feature: Montagem de carrinho na plataforma Giuliana Flores
    Scenario: Usuário consegue montar carrinho com 1 produto
        Given O Usuário tenha acessado a página home 
        When ele pesquisa pelo item "Orquídea Mine Rara Rosa" de valor "R$ 182,90"
        And acrescenta no carrinho
        And depois por "Buquê Magnificas Margaridas Amarelas" de valor "R$ 99,90"
        And realiza o mesmo procedimento
        Then ele consegue montar o carrinho com ambos os produtos