var mysqlConf = require('../config/config').mysql_pool;

exports.create = function(req, res, next) {
    category = req.body.category;
    filter = category;

    mysqlConf.getConnection(function (err, connection) {
      connection.query('INSERT INTO category SET ?', filter , function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json("successfully created category");
        }      
      });
    });
}