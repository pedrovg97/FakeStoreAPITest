import {CartBuilder} from "../../../support/builders/CartBuilder";

describe('Teste na atualização de carrinho', () => {

    it('Atualizar carrinho existente', () => {

        const cart = new CartBuilder().build();

        cy.updateCart(cart, 2).then((response) => {
            expect(response.status).to.eq(200);

            cy.getCart(2).then((response) => {
                expect(response.status).to.eq(200);

                expect(response.body.userId).to.eq(cart.userId);
                expect(response.body.products).to.eq(cart.products);
            });
        });
    });

    it('Atualizar carrinho inexistente', () => {

        const cart = new CartBuilder().build();

        cy.updateCart(cart, 99999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });


});

