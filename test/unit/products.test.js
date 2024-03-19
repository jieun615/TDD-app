const productController = require('../../controller/products');

describe("Product Cotroller Create", () => {
    it("should have a createProduc function", () => {
        expect(typeof productController.createProduct).toBe("function")
    })
})