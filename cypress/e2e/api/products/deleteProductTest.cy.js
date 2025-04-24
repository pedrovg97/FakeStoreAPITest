import {ProductBuilder} from "../../../support/builders/ProductBuilder";

describe('Teste na listagem de produtos', () => {

    it('Deletar produto existente', () => {

        cy.deleteProduct(2).then((response) => {
            expect(response.status).to.be.oneOf([200, 204])

            cy.getProduct(2).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Deletar produto ineexistente', () => {

        cy.deleteProduct(99999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});

