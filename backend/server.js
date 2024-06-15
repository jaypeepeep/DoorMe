const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database(':memory:'); // ':memory:' for an in-memory database, or a file path for a persistent database

// Create users table and insert initial account
db.serialize(() => {
  db.run(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT,
      email TEXT,
      university TEXT,
      socialStatus TEXT,
      phoneNumber TEXT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);

  const initialUser = `
    INSERT INTO users (fullName, email, university, socialStatus, phoneNumber, username, password)
    VALUES ('John Doe', 'john@example.com', 'Example University', 'Student', '+63 999 999 9999', 'john_doe', 'password123')
  `;
  db.run(initialUser);
});

// Register user endpoint
app.post('/register', (req, res) => {
  const { fullName, email, university, socialStatus, phoneNumber, username, password } = req.body;
  const query = `
    INSERT INTO users (fullName, email, university, socialStatus, phoneNumber, username, password)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.run(query, [fullName, email, university, socialStatus, phoneNumber, username, password], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User registered successfully', id: this.lastID });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `
    SELECT * FROM users WHERE username = ? AND password = ?
  `;
  db.get(query, [username, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.json({ message: 'Login successful', user: row });
    } else {
      res.status(400).json({ error: 'Invalid username or password' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
