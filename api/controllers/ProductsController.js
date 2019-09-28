const ProductsModel = require('../models/ProductsModel');

function get_all_products (req, res, next){
    ProductsModel.getAllProducts(res);
}
function get_one_product (req, res, next){
    ProductsModel.getOneProduct(req.params.id, res);
}

module.exports = {
    get_all_products: get_all_products,
    get_one_product: get_one_product
}