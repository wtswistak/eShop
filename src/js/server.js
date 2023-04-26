const express = require("express");
const mysql = require("mysql2");

const app = express();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "eshop_data",
});

app.get("", function (req, res) {
  // res.send("test");
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected: ${connection.threadId}`);
    connection.query("SELECT * from users_data", (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

app.listen(3000, () => {
  console.log("server port 3000");
});
