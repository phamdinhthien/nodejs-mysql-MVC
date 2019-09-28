const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductsController');

router.get('/', productController.get_all_products);

router.get('/:id', productController.get_one_product);

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        createdProduct: product
    })
})

module.exports = router;