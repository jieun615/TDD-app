const productModel = require('../models/Product');

exports.createProduct = (req, res, next) => {
    productModel.create();
};