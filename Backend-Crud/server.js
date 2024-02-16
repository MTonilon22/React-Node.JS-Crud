const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

//create connection with mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mtoni",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM mtonitable";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Listening");
});
