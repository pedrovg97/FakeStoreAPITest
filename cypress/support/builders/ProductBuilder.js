export class ProductBuilder {
    constructor() {
        this.produto = {
            title: 'Produto Exemplo',
            price: 99.99,
            description: 'Descrição padrão de produto',
            category: 'categoria-teste',
            image: 'http://example.com'
        };
    }

    withTitle(title) {
        this.produto.title = title;
        return this;
    }

    withPrice(price) {
        this.produto.price = price;
        return this;
    }

    withDescription(description) {
        this.produto.description = description;
        return this;
    }

    withCategory(category) {
        this.produto.category = category;
        return this;
    }

    withImage(image) {
        this.produto.image = image;
        return this;
    }

    build() {
        return this.produto;
    }
}
