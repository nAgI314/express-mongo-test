const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/users/:id', function (req, res) {
  res.send('User ID: ' + req.params.id)
})

app.post('/', (req, res) => {
  res.send({
    msg:'POST request'
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});