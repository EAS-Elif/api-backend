const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

//app.use(express.static('public'));

app.use(express.json());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.BACKEND_HOST,
  user: process.env.BACKEND_USER,
  database: process.env.BACKEND_DATABASE,
  password: process.env.BACKEND_PASSWORD,
 

});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/tasks', (req, res) => {
  console.log("get tasks")
  connection.query('SELECT * FROM tasks', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.post('/tasks', (req, res) => {
  const { name, description } = req.body;
  connection.query(
    'INSERT INTO tasks (name, description) VALUES (?, ?)',
    [name, description],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  connection.query(
    'UPDATE tasks SET name = ?, description = ?  WHERE id = ?',
    [name, description, id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM tasks WHERE id = ? ', [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, () => console.log('Server started!'));