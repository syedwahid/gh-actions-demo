'use strict';
const express = require('express');


const app = express();
app.get('/hello', (req, res) => {
  res.status(200).json({
    message: "Hello World!";
 git push });
});

app.get('/', (req, res) => {
  res.redirect('/hello');
});

module.exports = { app };
