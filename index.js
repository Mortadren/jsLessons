// import express from 'express';
const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server is started and works');
});
app.get('/', (req, res) => {
  console.log(req);
  res.send('Добро пожаловать на мой сервер Express!')
});
