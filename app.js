const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const productRouter = require('./api/routes/products');

// to see logging
app.use(morgan('dev'));
// to see simple body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE', 'GET');
        return res.status(200).json({});
    }
    next();
})
// Routes
app.use('/products', productRouter);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    // to redirect
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;