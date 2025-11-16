import mysql from "mysql2";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123",
  database: "employeems",
  port: 3307,
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL Database:", err);
  } else {
    console.log("Connected to MySQL Database!");
  }
});

export default con;
