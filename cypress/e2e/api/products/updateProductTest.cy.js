import {ProductBuilder} from "../../../support/builders/ProductBuilder";

describe('Teste na atualização de produto', () => {

    it('Atualizar produto existente', () => {

        const product = new ProductBuilder().build();

        cy.updateProduct(product, 2).then((response) => {
            expect(response.status).to.eq(200);

            cy.getProduct(2).then((response) => {
                expect(response.status).to.eq(200);

                expect(response.body.title).to.eq(product.title);
                expect(response.body.price).to.eq(product.price);
                expect(response.body.description).to.eq(product.description);
                expect(response.body.category).to.eq(product.category);
                expect(response.body.image).to.eq(product.image);

            });
        });
    });

    it('Atualizar usuário inexistente', () => {

        const product = new ProductBuilder().build();

        cy.updateProduct(product, 99999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });


});

