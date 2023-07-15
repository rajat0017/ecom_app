const mysql = require('mysql2');

const pool = mysql.createPool({
   host:'localhost',
   user:'root',
   database:'nodejs',
   password:'Rajat@7208'
});

module.exports= pool.promise();