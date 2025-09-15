const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: 'db',      // service name in compose
  user: 'root',
  password: 'root',
  database: 'todo_db'
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() as time', (err, result) => {
    if (err) return res.send(err);
    res.send(`Backend connected to DB. Time: ${result[0].time}`);
  });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
