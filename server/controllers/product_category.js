var mysqlConf = require('../config/config').mysql_pool;

exports.create = function(req, res, next) {
    var product_id = req.body.product_id;
    var category = req.body.category
    var filter = {};
    filter.product_id = product_id;
    filter.category = category;
    console.log(filter);
    mysqlConf.getConnection(function (err, connection) {
      connection.query('INSERT INTO product_category SET ?', filter , function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json("successfully created product");
        }  
          
      });
    });
}

//SELECT id, name, cast(concat('[', group_concat(json_quote(category) ORDER BY category SEPARATOR ','), ']') as json) AS categories FROM products INNER JOIN product_category ON products.id = product_category.product_id GROUP by products.id