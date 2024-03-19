const productModel = require('../models/Product');

exports.createProduct = (req, res, next) => {
    const createdProduct = productModel.create();
    res.status(201).json(createdProduct);
};