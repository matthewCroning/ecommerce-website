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

exports.findAll = function(req, res, next) {
  mysqlConf.getConnection(function (err, connection) {
      connection.query("SELECT * FROM product_variant" , function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json(rows);
        }  
        
      });
    });
}

exports.findAllDistinct = function(req, res, next) {
  mysqlConf.getConnection(function (err, connection) {
      connection.query("select distinct p.product_id, pv.product_variant_id, p.name, p.brand, pv.colour, pv.images from products p inner join product_variant pv on p.product_id = pv.product_id" , function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          rows.map(row => (row.images = JSON.parse(row.images), row));
          return res.json(rows);
        }  
        
      });
    });
}

exports.getProductVariant = function(req, res, next) {
  filter = req.params.id;
  mysqlConf.getConnection(function (err, connection) {
      connection.query("SELECT * FROM product_variant where product_variant_id = ?" , filter, function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          rows.map(row => (row.images = JSON.parse(row.images), row));
          return res.json(rows);
        }  
        
      });
    });
}

exports.getProductVariants = function(req, res, next) {
  filter = req.params.id;
  mysqlConf.getConnection(function (err, connection) {
      connection.query("SELECT * FROM product_variant where product_id = ?" , filter, function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          rows.map(row => (row.images = JSON.parse(row.images), row));
          return res.json(rows);
        }  
        
      });
    });
}



