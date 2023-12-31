const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello, world!!');
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});
