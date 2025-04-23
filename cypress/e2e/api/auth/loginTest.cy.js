

describe('Teste de autenticação', () => {

    it('Login com credenciais validas', () => {
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        cy.login(username,password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
        });
    });

    it('Login com senha incorreta', () => {
        const username = Cypress.env('username');
        const password = "senhaIncorreta";

        cy.login(username,password).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Login com usuário inexistente', () => {
        const username = "userInexisteste";
        const password = Cypress.env('password');

        cy.login(username,password).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Login com campo username vazio', () => {
        const username = "";
        const password = Cypress.env('password');

        cy.login(username,password).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');

        });
    });

    it('Login com campo password vazio', () => {
        const username = Cypress.env('username');
        const password = "";

        cy.login(username,password).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });
});