'use strict';

const express = require('express');

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/checkthree', (req, res) => {
  res.send('Hello world m from 3rd service\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
