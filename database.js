const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'test',
  database: 'carsdb'
});
module.exports = connection;