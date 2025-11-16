import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = `SELECT * FROM admin WHERE email = ? AND password = ?`;
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign({ role: "admin", email: email }, "jwt_secretkey", {
        expiresIn: "6h",
      });
      res.cookie("token", token);

      return res.json({ loginStatus: true, token });
    } else {
      return res.json({ loginStatus: false, Error: "Invalid credentials" });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    return res.json({ Status: true, Result: result });
  });
});
//catergory api
router.post("/add_category", (req, res) => {
  const sql = "INSERT INTO category (name) VALUES (?)";
  con.query(sql, [req.body.category], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    return res.json({ message: "Category added successfully" });
  });
});

router.post("/add_employee", (req, res) => {
  const { name, email, password, salary, address, category, image } = req.body;
  const sql =
    "INSERT INTO employees (name, email, password, salary, address, category_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.json({ Status: false, Error: "Hashing error" });
    }
    const values = [name, email, hash, salary, address, category, image];
    con.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Status: false, Error: "Query Error" });
      }
      return res.json({ Status: true, Message: "Employee added successfully" });
    });
  });
});

export { router as AdminRouter };
