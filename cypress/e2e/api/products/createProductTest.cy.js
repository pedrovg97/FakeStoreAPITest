import {ProductBuilder} from "../../../support/builders/ProductBuilder";
import {UserBuilder} from "../../../support/builders/UserBuilder";

describe('Teste na criação de produtos', () => {

    it('Criar novo produto com dados válidos', () => {

        const product = new ProductBuilder().build();

        cy.createProduct(product).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Criar produto com campo price inválido', () => {

        const product = new ProductBuilder().withPrice("vinte").build();

        cy.createProduct(product).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Enviar image com URI inválida', () => {

        const product = new ProductBuilder().withImage("invalidImage").build();

        cy.createProduct(product).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');
        });
    });

    it('Criar produto com campo price muito grande', () => {

        const product = new ProductBuilder().withPrice(999999999.99).build();

        cy.createProduct(product).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Criar produto com campo price negativo', () => {

        const product = new ProductBuilder().withPrice(-1.00).build();

        cy.createProduct(product).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');

        });
    });

    it('Criar produto com campo description com mais de 255 caracteres', () => {

        const longText = faker.lorem.words(100);
        const product = new ProductBuilder().withDescription(longText).build();

        cy.createProduct(product).then((response) => {
            expect(response.status).to.eq(201);
        });
    });

    it('Criar produto dados vazios', () => {

        const product = new ProductBuilder()
            .withPrice("")
            .withImage("")
            .withTitle("").withCategory("")
            .withDescription("")
            .build();

        cy.createProduct(product).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('messege');

        });
    });

    it('Tentar criar produto passando um id no endpoint', () => {

        const product = new ProductBuilder().build();

        cy.request({
            method: 'POST',
            url: '/products/1',
            body: product,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.oneOf([404, 405])
        });
    });

    it('Tentar criar produto passando um XML no body', () => {
        const produtoXML =
            `<product>
                <title>Produto Teste</title>
                <price>49.99</price>
                <description>Nova descrição para o produto</description>
                <category>categoria-nova</category>
                <image>http://example.com/produto.jpg</image>
            </product>`;

        cy.request({
            method: 'POST',
            url: '/products',
            headers: {
                'Content-Type': 'application/xml',
            },
            body: produtoXML,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.oneOf([400, 405]);
        });

    });
});

