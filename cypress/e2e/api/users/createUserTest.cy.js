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

    it('Tentar criar usuario passando um id no endpoint', () => {

        const user = new UserBuilder().build();

        cy.request({
            method: 'POST',
            url: '/users/1',
            body: user,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.oneOf([404, 405])
            expect(response.body).to.have.property('messege');
        });
    });

    it('Tentar criar usuário passando um XML no body', () => {
        const xmlBody =
            `<user>
                <name>João</name>
                <email>joao@email.com</email>
                <password>joao@email.com</password>
            </user>`;

        cy.request({
            method: 'POST',
            url: '/users',
            headers: {
                'Content-Type': 'application/xml',
            },
            body: xmlBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.oneOf([400, 405]);
        });
    });

});

