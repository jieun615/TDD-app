const productModel = require('../models/Product');

exports.createProduct = (req, res, next) => {
    productModel.create();
    res.status(201).send();
};