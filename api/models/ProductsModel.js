const connection = require('./ConnectDB');

var Products = function(product){
    this.title = product.title;
    this.body = product.body;
}

Products.getAllProducts = function(res){
    let sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results)=>{
        if(err) throw err;
        console.log(results);
        res.status(200).json({
            results: results
        })
    })
};

Products.getOneProduct = function(id, res){
    let sql = 'SELECT * FROM posts where id=' + id;
    connection.query(sql, (err, results)=>{
        if(err) throw err;
        console.log(results);
        res.status(200).send(results);
    })
}

module.exports = Products;