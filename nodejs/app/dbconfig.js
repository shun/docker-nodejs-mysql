let mysql = require("mysql");
let client = mysql.createConnection({
  host: "db",
  port: 3306,
  user: "node",
  password: "node",
  database: "example"
});

client.connect();

let init = function() {
  console.log("### run init")
  client.query("CREATE TABLE car (" +
    "id INT(10) AUTO_INCREMENT," +
    "maker VARCHAR(32)," +
    "model VARCHAR(32)," +
    "year INT(4)," +
    "driver INT(10)," +
    "PRIMARY KEY (id)" +
    ")"
  );
  client.query("CREATE TABLE driver (" +
    "id INT(10) AUTO_INCREMENT," +
    "firstname VARCHAR(32), " +
    "lastname VARCHAR(32)," +
    "car INT(10)," +
    "PRIMARY KEY (id)" +
    ")"
  );
};


module.exports ={
  init: init,
  db: client
};

