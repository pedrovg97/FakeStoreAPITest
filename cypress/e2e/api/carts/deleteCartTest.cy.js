import {CartBuilder} from "../../../support/builders/CartBuilder";

describe('Teste na listagem de carrinho', () => {

    it('Deletar usuário existente', () => {

        cy.deleteCart(2).then((response) => {
            expect(response.status).to.be.oneOf([200, 204])

            cy.getCart(2).then((response) => {
                expect(response.status).to.eq(200);

            });
        });
    });

    it('Deletar usuário ineexistente', () => {

        cy.deleteCart(99999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});

