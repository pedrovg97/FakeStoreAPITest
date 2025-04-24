export class CartBuilder {
    constructor() {
        this.carrinho = {
            userId: 1,
            products: [
                { productId: 1, quantity: 2 },
                { productId: 2, quantity: 3 }
            ]
        };
    }

    withUserId(userId) {
        this.carrinho.userId = userId;
        return this;
    }

    addProduct(productId, quantity = 1) {
        this.carrinho.products.push({ productId, quantity });
        return this;
    }

    setProducts(productsArray) {
        this.carrinho.products = productsArray;
        return this;
    }

    build() {
        return this.carrinho;
    }
}
