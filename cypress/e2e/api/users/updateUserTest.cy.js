import {UserBuilder} from "../../../support/builders/UserBuilder";

describe('Teste na atualização de usuários', () => {

    it('Atualizar usuário existente', () => {

        const user = new UserBuilder().build();

        cy.updateUser(user, 2).then((response) => {
            expect(response.status).to.eq(200);

            cy.getUser(2).then((response) => {
                expect(response.status).to.eq(200);

                expect(response.body.email).to.eq(user.email);
                expect(response.body.username).to.eq(user.username);
                expect(response.body.password).to.eq(user.password);
            });
        });
    });

    it('Atualizar usuário inexistente', () => {

        const user = new UserBuilder().build();

        cy.updateUser(user, 99999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });


});

