const TodoHandler = require('./todoHandler.js');
const express = require('express');

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/todos', function (req, res) {
  res.json(TodoHandler.originTodos);
});

app.post('/todo', function (req, res) {
  console.log(JSON.stringify(req.body));
  const updatedTodos = TodoHandler.setTodo(req.body);
  res.json(updatedTodos);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
