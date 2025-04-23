import { faker } from '@faker-js/faker';

export class UsuarioBuilder {
    constructor() {
        this.usuario = {
            username: faker.internet.username(),
            email: faker.internet.email(),
            password: 'senha123'
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
