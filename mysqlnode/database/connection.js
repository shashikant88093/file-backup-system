const mysql = require("mysql");
var mysqlConnnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    multipleStatements: true,
    port: 3307,
    connectionLimit : 10

});

mysqlConnnection.connect((err) => {
    if (!err) {
        console.log("db connected")
    } else {
        console.log("connection fail", err)
    }
})

// mysqlConnnection.query = util.promisify(mysqlConnnection.query);

module.exports = mysqlConnnection;