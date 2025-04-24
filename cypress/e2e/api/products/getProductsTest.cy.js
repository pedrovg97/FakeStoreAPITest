describe('Teste na listagem de produtos', () => {

    it('Obter todos os produtos', () => {

        cy.getProduct().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

        });
    });
    it('Obter produto por ID válido', () => {

        cy.getProduct(1).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('price');
            expect(response.body).to.have.property('description');
            expect(response.body).to.have.property('category');
            expect(response.body).to.have.property('image');
            expect(response.body.rating).to.have.property('rate');
            expect(response.body.rating).to.have.property('count');
        });
    });

    it('Obter produto inexistente', () => {

        cy.getProduct(9999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});

