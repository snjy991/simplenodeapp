'use strict';

const express = require('express');

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/checktwo', (req, res) => {
  res.send('Hello world I am from 2nd service\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
