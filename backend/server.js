const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  port: 7002,
  user: "root",
  password: "password",
  database: "ielts",
});

app.get("/", (req, res) => {
  return res.json("Backend running");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const sql = "INSERT INTO Users (Email, password) VALUES (?, ?)";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "An error occurred while registering the user" });
    }
    return res.json({ message: "User registered successfully" });
  });
});

app.post("/dashboard", (req, res) => {
  return res.json("dashboard running");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "An error occurred while logging in" });
    }
    if (results.length > 0 && (email!="" || password!="")) {
      return res.json("Success");
    } else {
      return res.json("Fail");
      // return res.json({ message: "Login successful", user: results[0] });
    }
  });
});

// const authenticate = (req, res, next) => {
//   if (req.session.loggedIn) {
//     next(); // User is authenticated, proceed to the next route handler
//   } else {
//     res.status(401).json({ error: 'Unauthorized' }); // User is not authenticated
//   }
// };

// app.post("/authenticated", (req, res) => {
//   return res.json({ authenticated: true });
// });

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
