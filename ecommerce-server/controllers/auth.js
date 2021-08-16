var mysqlConf = require('../config/config').mysql_pool;

const bcrypt = require ('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(10);
    
exports.create = function(req, res, next) {
    var user = req.body.user;
const hashedPsw = bcrypt.hashSync(user.password, salt);
    user.password = hashedPsw;
    mysqlConf.getConnection(function (err, connection) {
      connection.query('INSERT INTO users SET ?' , user, function (err, rows) {
        connection.release();
        if(err) {
          return res.json(err);
        } else {
          return res.json("successfully created user");
        }  
          
      });
    });
}

exports.checkAuthentication = function(req, res, next) {
    const hashedPsw = bcrypt.hashSync("pass", salt);
    console.log("fat");
    console.log(bcrypt.compareSync("pass", "$2b$10$QxkYSUPTiknfks5yzr6Iq.cC24Z6pJIETOm6Rnv7yNNH2Be8Ib2EK"));
}

// bcrypt.hash(password, saltRounds, function(err, hash) {

// });

