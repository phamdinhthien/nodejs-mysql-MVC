const mysql = require('mysql');
//create connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'thien.vn',
    database : 'nodemysql'
  });
// connect
connection.connect((err)=>{
    if(err) throw err;
    console.log('MySql connected');
});

module.exports = connection;