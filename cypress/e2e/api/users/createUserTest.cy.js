import {UserBuilder} from "../../../support/builders/UserBuilder";

describe('Teste na criação de usuários', () => {

    it('Criar novo usuário com dados válidos', () => {

        const user = new UserBuilder().build();

        cy.createUser(user).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Criar usuário com e-mail inválido', () => {

        const user = new UserBuilder().withEmail("emailInvalido").build();

        cy.createUser(user).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Criar usuário com password em branco', () => {

        const user = new UserBuilder().withPassword("").build();

        cy.createUser(user).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Criar usuário com username em branco', () => {

        const user = new UserBuilder().withUsername("").build();

        cy.createUser(user).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Criar usuário com username já cadastrado', () => {

        const username = Cypress.env('username');
        const user = new UserBuilder().withUsername(username).build();

        cy.createUser(user).then((response) => {
            expect(response.status).to.eq(409);
            expect(response.body).to.have.property('messege');
        });
    });
});

