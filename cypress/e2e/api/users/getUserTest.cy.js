import {UserBuilder} from "../../../support/builders/UserBuilder";

describe('Teste na listagem de usuários', () => {

    it('Obter todos os usuários', () => {

        cy.getUser().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

        });
    });
    it('Obter usuário por ID válido', () => {

        cy.getUser(1).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('email');
            expect(response.body).to.have.property('username');
            expect(response.body).to.have.property('password');
            expect(response.body).to.have.property('name');
            expect(response.body.name).to.have.property('firstname');
            expect(response.body.name).to.have.property('lastname');
            expect(response.body).to.have.property('phone');
            expect(response.body).to.have.property('address');
            expect(response.body.address).to.have.property('geolocation');
            expect(response.body.address.geolocation).to.have.property('lat');
            expect(response.body.address.geolocation).to.have.property('long');
            expect(response.body.address).to.have.property('city');
            expect(response.body.address).to.have.property('street');
            expect(response.body.address).to.have.property('number');
            expect(response.body.address).to.have.property('zipcode');
            expect(response.body).to.have.property('__v');
        });
    });

    it('Obter usuário inexistente', () => {

        cy.getUser(9999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});

