var mysql      = require('mysql');

var config;

config = {
    mysql_pool : mysql.createPool({
        host: 'localhost',
        user: "matty",
        password: "password",
        database: 'ecommerceapp',
    })
};

secret = {

};

module.exports = config;