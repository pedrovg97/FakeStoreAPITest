import { faker } from '@faker-js/faker';

export class UserBuilder {
    constructor() {
        this.usuario = {
            username: faker.internet.username(),
            email: faker.internet.email(),
            password: Cypress.env('password')
        };
    }

    withId(id) {
        this.usuario.id = id;
        return this;
    }

    withUsername(username) {
        this.usuario.username = username;
        return this;
    }

    withEmail(email) {
        this.usuario.email = email;
        return this;
    }

    withPassword(password) {
        this.usuario.password = password;
        return this;
    }

    build() {
        return this.usuario;
    }
}
