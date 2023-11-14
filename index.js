// import express from 'express';
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is started and works on http://localhost:${PORT}`);
});
//zadacha 1
app.get('/', (req, res) => {
  res.send('Добро пожаловать на мой сервер Express!');
});
//zadacha 2
app.get('/profile/:username', (req, res) => {
  const username = req.query.username;
  res.send(`Профиль пользователя: ${username}`);
});
//zadacha 3
app.post('/login', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  if (login && password) {
    res.send('Авторизация успешна');
  } else {
    res.send('Авторизация не успешна');
  }
});

//zadacha 4
app.delete('/users/:id', (req, res) => {
  const id = req.query.id;
  res.send(`Профиль ${id} удален`);
});
