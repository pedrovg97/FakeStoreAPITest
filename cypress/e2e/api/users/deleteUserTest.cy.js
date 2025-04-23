import {UserBuilder} from "../../../support/builders/UserBuilder";

describe('Teste na listagem de usuários', () => {

    it('Deletar usuário existente', () => {

        cy.deleteUser(2).then((response) => {
            expect(response.status).to.eq(204);

            cy.getUser(2).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Deletar usuário ineexistente', () => {

        cy.deleteUser(99999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});

