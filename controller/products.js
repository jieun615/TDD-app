const productModel = require('../models/Product');

exports.createProduct = async (req, res, next) => {
    try {
        const createdProduct = await productModel.create();
        res.status(201).json(createdProduct);
    } catch (err) {
        next(err);
    }
};