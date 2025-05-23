import './commands';

Cypress.Commands.add('createUser', user => {
    return cy.request({
        method: 'POST',
        url: '/users',
        body: user,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('updateUser', (user, id) => {
    return cy.request({
        method: 'PUT',
        url: `/users/${id}`,
        body: user,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getUser', (id, auth) => {

    const token =  auth || " ";
    const userId = id || " ";

    return cy.request({
        method: 'GET',
        url: `/users/${userId}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteUser', (id) => {

    const userId = id || " ";

    return cy.request({
        method: 'DELETE',
        url: `/users/${userId}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('createProduct', (product) => {
    return cy.request({
        method: 'POST',
        url: '/products',
        body: product,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('updateProduct', (product, id) => {
    return cy.request({
        method: 'PUT',
        url: `/products/${id}`,
        body: product,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getProduct', (id) => {

    const productId = id || " ";

    return cy.request({
        method: 'GET',
        url: `/products/${productId}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('createCart', (cart) => {
    return cy.request({
        method: 'POST',
        url: '/carts',
        body: cart,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('updateCart', (cart, id) => {
    return cy.request({
        method: 'PUT',
        url: `/carts/${id}`,
        body: cart,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getCart', (id) => {

    const cartId = id || " ";

    return cy.request({
        method: 'GET',
        url: `/carts/${cartId}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteCart', (id) => {

    const cartId = id || " ";

    return cy.request({
        method: 'DELETE',
        url: `/carts/${cartId}`,
        failOnStatusCode: false
    });
});


Cypress.Commands.add('login', (username, password) => {
    return cy.request({
        method: 'POST',
        url: '/auth/login',
        body: {
            username: username,
            password: password
        },
        failOnStatusCode: false
    }).then(({ body }) => {
        Cypress.env('token', body.token);
    });
});