require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "eshop_data",
});

app.get("", function (req, res) {
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/createUser", function (req, res) {
  const { username, password, email } = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;

    console.log(`connected: ${connection.threadId}`);
    connection.query(
      "INSERT INTO users_data (username, password, email) VALUES (?, ?, ?)",
      [username, password, email],
      (err, result) => {
        connection.release();
        if (!err) {
          res.send("User added");
        } else {
          console.log(err);
        }
      }
    );
  });
});

app.listen(3000, () => {
  console.log("server port 3000");
});
