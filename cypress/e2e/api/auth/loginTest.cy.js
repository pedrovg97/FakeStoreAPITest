

describe('Teste de autenticação', () => {

    it('Login com credenciais validas', () => {
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        cy.login(username,password).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('token');
        });

    });
});