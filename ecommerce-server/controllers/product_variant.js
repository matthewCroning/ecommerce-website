var mysqlConf = require('../config/config').mysql_pool;

exports.create = function(req, res, next) {
    productVariant = req.body.product_variant;
    productVariant.images = JSON.stringify(productVariant.images);
    filter = productVariant;

    mysqlConf.getConnection(function (err, connection) {
      connection.query('INSERT INTO product_variant SET ?', filter , function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json("successfully created product variant");
        }      
      });
    });
}