import {CartBuilder} from "../../../support/builders/CartBuilder";

describe('Teste na listagem de carrinhos', () => {

    it('Obter todos os carrinhos', () => {

        cy.getCart().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

        });
    });

    it('Obter carrinho por ID válido', () => {

        cy.getCart(1).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('userId');
            expect(response.body).to.have.property('products');
            expect(response.body.products[0]).to.have.property('productId');
            expect(response.body.products[0]).to.have.property('quantity');
        });
    });

    it('Obter carrinho inexistente', () => {

        cy.getCart(9999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});

