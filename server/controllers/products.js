var mysqlConf = require('../config/config').mysql_pool;

exports.findAll = function(req, res, next) {
    mysqlConf.getConnection(function (err, connection) {
        connection.query("SELECT * FROM products" , function (err, rows) {
          connection.release();
          if(err) {
            return res.json(err);
          } else {
            return res.json(rows);
          }  
          
        });
      });
}



exports.findLike = function(req, res, next) {
  var searchInput = req.params.searchInput;
  var columnFilter = req.params.columnFilter;
  mysqlConf.getConnection(function (err, connection) {
      connection.query("SELECT * FROM products WHERE concat(" + columnFilter + ") LIKE CONCAT( '%',?,'%')" , searchInput, function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json(rows);
        }  
        
      });
    });
}


exports.create = function(req, res, next) {
    var product = req.body.product;
    console.log(req.body);
    console.log(product);
    product.categories = JSON.stringify(product.categories);
    mysqlConf.getConnection(function (err, connection) {
      connection.query('INSERT INTO products SET ?' , product, function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json("successfully created product");
        }  
          
      });
    });
}

exports.getProduct = function(req, res, next) {
  var id = req.params.id;
  mysqlConf.getConnection(function (err, connection) {
    connection.query("SELECT * FROM products WHERE product_id = ?", id, function (err, rows) {
      connection.release();
      if(err) {
        return res.json(err);
      } else {
        return res.json(rows);
      }  
        
    });
  });
}

exports.update = function(req, res, next) {
    var id = req.body.id;
    var product = req.body.product;
    var filter = Object.values(product);
    filter.push(product.id);
    console.log(product);
    mysqlConf.getConnection(function (err, connection) {
      connection.query("Update products SET " + Object.keys(product).map(key => `${key} = ?`).join(", ") + " WHERE id = ?", filter, function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json(rows);
        }  
     
      });
    });
}

exports.delete = function(req, res, next) {
  var id = req.body.id;
  mysqlConf.getConnection(function (err, connection) {
    connection.query("DELETE FROM products WHERE id=?", id, function (err, rows) {
      connection.release();
      if(err) {
        return res.json(err);
      } else {
        return res.json(rows);
      }  
   
    });
  });
};



exports.addCategory = function(req, res, next) {
  var id = req.body.id;
  var category = req.body.category;
  var filter = [];
  filter.push(category);
  filter.push(id);
  filter.push(category);
  mysqlConf.getConnection(function (err, connection) {
    connection.query("UPDATE products SET categories = JSON_ARRAY_APPEND (categories, '$', ?) WHERE id = ? AND JSON_SEARCH(categories, 'one', ?) IS NULL", filter, function (err, rows) {
      connection.release();
      if(err) {
        return res.json(err);
      } else {
        return res.json(rows);
      }  
   
    });
  });
}

exports.removeCategory = function(req, res, next) {
  var id = req.body.id;
  var category = req.body.category;
  var filter = [];
  filter.push(category);
  filter.push(id);
  filter.push(category);
  mysqlConf.getConnection(function (err, connection) {
    connection.query("UPDATE products SET categories = JSON_REMOVE(categories, JSON_UNQUOTE(JSON_SEARCH(categories, 'one', ?))) WHERE id = ? AND JSON_SEARCH(categories, 'one', ?) IS NOT NULL", filter, function (err, rows) {
      connection.release();
      if(err) {
        return res.json(err);
      } else {
        return res.json(rows);
      }  
   
    });
  });
}


