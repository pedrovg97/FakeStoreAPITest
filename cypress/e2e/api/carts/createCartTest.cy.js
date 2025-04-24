import {CartBuilder} from "../../../support/builders/CartBuilder";

describe('Teste na criação de carrinhos', () => {

    it('Criar novo carrinho com dados válidos', () => {

        const cart = new CartBuilder().build();

        cy.createCart(cart).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Criar carrinho com array de produtos vazio', () => {

        const cart = new CartBuilder().setProducts([]).build();

        cy.createCart(cart).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Criar carrinho com userId inválido', () => {

        const cart = new CartBuilder().withUserId("abc").build();

        cy.createCart(cart).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Criar carrinho com userId vazio', () => {

        const cart = new CartBuilder().withUserId("").build();

        cy.createCart(cart).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Criar carrinho com userId inexistente', () => {

        const cart = new CartBuilder().withUserId(99999).build();

        cy.createCart(cart).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Tentar criar carrinho passando um id no endpoint', () => {

        const cart = new CartBuilder().build();

        cy.request({
            method: 'POST',
            url: '/carts/1',
            body: cart,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.oneOf([404, 405])
            expect(response.body).to.have.property('messege');
        });
    });

    it('Tentar criar carrinho passando um XML no body', () => {
        const carrinhoXML =
            `<cart>
                <userId>123</userId>
                <products>
                <product>
                    <productId>3</productId>
                    <quantity>2</quantity>
                </product>
            </cart>`;

        cy.request({
            method: 'POST',
            url: '/carts',
            headers: {
                'Content-Type': 'application/xml',
            },
            body: carrinhoXML,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.oneOf([400, 405]);
        });
    });
});

