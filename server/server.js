const express = require('express');
const app = express();
app.use(express.json())

app.get('/todos', function (req, res) {
  res.json({
    todos: [
      {value: 'todo 1', status: 0},
      {value: 'todo 2', status: 0},
    ]
  })
});

app.post('/todos', function (req, res) {
  console.log(JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
