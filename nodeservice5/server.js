'use strict';

const express = require('express');

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/checkfive', (req, res) => {
  res.send('Hello world m from 5th service\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
